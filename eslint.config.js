// @ts-check
import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import unocss from '@unocss/eslint-config/flat';
import eslintPluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  unocss,

  {
    plugins: {
      '@stylistic': stylistic 
    },
    rules: {
      'no-var': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ],
      'no-undef': 'warn',
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@stylistic/indent': ['error', 2, {
        offsetTernaryExpressions: true,
        MemberExpression: 1,
        flatTernaryExpressions: false,
        SwitchCase: 1
      }],
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/quotes': ['error', 'single', {
        avoidEscape: true,
        allowTemplateLiterals: true
      }],
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/block-spacing': 'error',
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/comma-spacing': ['error', {
        before: false, after: true 
      }],
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/function-call-spacing': ['error', 'never'],
      '@stylistic/arrow-spacing': ['error', {
        before: true, after: true 
      }],
      '@stylistic/max-len': [
        'error',
        {
          code: 80,
          ignoreComments: true,
          ignoreUrls: true,
          ignoreTemplateLiterals: true
        }
      ],
      '@stylistic/object-curly-newline':  ['error', {
        ObjectExpression: 'always',
        ObjectPattern: {
          multiline: true 
        },
        ImportDeclaration: 'never',
        ExportDeclaration: {
          multiline: true, minProperties: 3 
        }
      }],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/nonblock-statement-body-position': ['error', 'beside',
        {
          overrides: {
            while: 'below' 
          } 
        }
      ] 
    }
  },

  // register all of the plugins up-front
  {
    // note - intentionally uses computed syntax to make it easy to sort the keys
    plugins: {
      ['@typescript-eslint']: tseslint.plugin 
    }
  },

  {
    files: ['**/*.js', '**/*.ts'],

    // This is required, see the docs
    languageOptions: {
      parserOptions: {
        project: './tsconfig.app.json',
        tsconfigRootDir: import.meta.dirname
      }
    },

    // After defining the plugin, you can use the rules like this
    rules: {
      '@typescript-eslint/no-unused-vars': 'error' 
    }
  },
  {
    extends: [...eslintPluginVue.configs['flat/recommended']],
    files: ['*.vue', '**/*.vue'],
    rules: {
      'no-undef': 'off', // https://github.com/unplugin/unplugin-auto-import?tab=readme-ov-file#eslint
      'vue/block-lang': [
        'error',
        {
          script: {
            lang: 'ts' 
          } 
        }
      ],
      'vue/component-api-style': ['error', ['script-setup']],
      'vue/block-order': [
        'error',
        {
          order: ['script', 'template', 'style'] 
        }
      ],
      'vue/component-name-in-template-casing': [
        'error',
        'kebab-case',
        {
          registeredComponentsOnly: false 
        }
      ]
    },
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.app.json',
        parser: tseslint.parser,
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        extraFileExtensions: ['.vue']
      }
    }
  },
  {
    files: ['*.config.{ts,js,mjs}'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.node.json',
        tsconfigRootDir: import.meta.dirname
      }
    }
  },
  {
    // eslint-disable-next-line @stylistic/max-len
    files: ['eslint.config.js', 'postcss.config.js', 'stylelint.config.js', 'prettier.config.js'],
    ...tseslint.configs.disableTypeChecked
  },
  {
    // config with just ignores is the replacement for `.eslintignore`
    ignores: [
      'public',
      'node_modules',
      'dist',
      'lib-flexible.js',
      'auto-imports.d.ts',
      'components.d.ts'
    ]
  }
);
