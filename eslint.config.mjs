// @ts-check
import eslint from "@eslint/js";
import eslintPluginVue from "eslint-plugin-vue";
import tseslint from "typescript-eslint";

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...eslintPluginVue.configs["flat/recommended"],

  // register all of the plugins up-front
  {
    // note - intentionally uses computed syntax to make it easy to sort the keys
    plugins: {
      ["@typescript-eslint"]: tseslint.plugin,
      // ["@typescript-eslint/internal"]: tseslintInternalPlugin,
      // // https://github.com/gund/eslint-plugin-deprecation/issues/78
      // // https://github.com/typescript-eslint/typescript-eslint/issues/8988
      // ["deprecation"]: fixupPluginRules(deprecationPlugin),
      // ["eslint-comments"]: eslintCommentsPlugin,
      // ["eslint-plugin"]: eslintPluginPlugin,
      // // https://github.com/import-js/eslint-plugin-import/issues/2948
      // ["import"]: fixupPluginRules(importPlugin),
      // ["jest"]: jestPlugin,
      // ["jsdoc"]: jsdocPlugin,
      // ["jsx-a11y"]: jsxA11yPlugin,
      // // https://github.com/facebook/react/issues/28313
      // ["react-hooks"]: fixupPluginRules(reactHooksPlugin),
      // // https://github.com/jsx-eslint/eslint-plugin-react/issues/3699
      // ["react"]: fixupPluginRules(reactPlugin),
      // ["simple-import-sort"]: simpleImportSortPlugin,
      // ["unicorn"]: unicornPlugin,
    },
  },

  {
    // config with just ignores is the replacement for `.eslintignore`
    ignores: [
      "**/public/**",
      "**/node_modules/**",
      "**/dist/**",
      "**/lib-flexible.js",
    ],
  },

  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "@typescript-eslint/adjacent-overload-signatures": "error",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },

  {
    files: ["**/*.js", "**/*.ts"],

    // This is required, see the docs
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.app.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },

    // After defining the plugin, you can use the rules like this
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
    },
  },
  {
    rules: {
      "no-undef": "off", // https://github.com/unplugin/unplugin-auto-import?tab=readme-ov-file#eslint
    },
    files: ["*.vue", "**/*.vue"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.app.json",
        parser: "@typescript-eslint/parser",
        sourceType: "module",
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        extraFileExtensions: [".vue"],
      },
    },
  },
  {
    files: ["*.config.ts", "*.config.js", "*.config.mjs"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.node.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ["eslint.config.*", "prettier.config.*"],
    ...tseslint.configs.disableTypeChecked,
  }
);
