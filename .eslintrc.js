module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		project: './tsconfig.eslint.json',
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint/eslint-plugin',
		'simple-import-sort',
		'import',
		'unicorn',
		'unused-imports',
	],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:import/typescript',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/errors',
		'plugin:import/warnings',
		'eslint:recommended',
	],
	settings: {
		'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				directory: './tsconfig.json',
			},
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	root: true,
	env: {
		jest: true,
		es6: true,
		node: true,
	},
	ignorePatterns: [
		'.eslintrc.js',
		'commitlint.config.js',
		'jest.config.cjs',
		'*.gql',
	],
	rules: {
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		semi: 'off',

		'@typescript-eslint/no-explicit-any': 'off',
		/**
		 * plugin:unused-import
		 */
		'no-unused-vars': 'off',
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
		'no-mixed-spaces-and-tabs': 'off',
		/**
		 * plugin:import
		 */
		'import/export': 'error',
		'import/first': 'error',
		'import/no-unresolved': 'error',
		'import/namespace': 'error',
		'import/no-duplicates': 'error',
		'import/no-relative-packages': 'error',
		'import/newline-after-import': 'error',
		'import/no-absolute-path': 'error',
		'import/no-default-export': 'error',
		'import/no-self-import': 'error',
		'import/no-deprecated': 'error',
		'import/no-cycle': 'off',
		'import/no-unused-modules': 'error',
		'import/no-namespace': 'off',
		'import/extensions': ['error', 'never'],
		'import/no-useless-path-segments': [
			'error',
			{
				noUselessIndex: true,
			},
		],
		'import/no-internal-modules': 'off',
		'import/order': 'off',

		/**
		 * plugin:simple-import-sort
		 */
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		/**
		 * plugin:typescript-eslint
		 */
		'@typescript-eslint/member-ordering': 'off',
		'@typescript-eslint/no-angle-bracket-type-assertion': 'off',
		'@typescript-eslint/explicit-member-accessibility': [
			'off',
			{
				overrides: {
					constructors: 'off',
				},
			},
		],
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/await-thenable': 'error',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/ban-tslint-comment': 'off',
		'@typescript-eslint/consistent-indexed-object-style': 'error',
		'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{ prefer: 'type-imports' },
		],
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-return': 'off',
		'@typescript-eslint/restrict-template-expressions': 'off',
		'keyword-spacing': 'off',
		'@typescript-eslint/keyword-spacing': 'error',
		'@typescript-eslint/no-namespace': 'error',
		'@typescript-eslint/no-this-alias': 'error',
		'@typescript-eslint/no-use-before-define': 'error',
		'@typescript-eslint/no-use-before-declare': 'off',
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/type-annotation-spacing': 'error',
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-duplicate-imports': ['error'],
		'@typescript-eslint/no-shadow': 'error',
		'@typescript-eslint/no-unused-expressions': ['error'],
		/**
		 * plugin:eslint
		 */
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: '*', next: 'return' },
			{ blankLine: 'always', prev: '*', next: 'try' },
			{ blankLine: 'always', prev: 'try', next: '*' },
			{ blankLine: 'always', prev: '*', next: 'block-like' },
			{ blankLine: 'always', prev: 'block-like', next: '*' },
			{ blankLine: 'always', prev: '*', next: 'throw' },
			{ blankLine: 'always', prev: 'var', next: '*' },
		],
		complexity: 'off',
		'no-multi-spaces': 'error',
		'no-useless-return': 'error',
		'no-else-return': 'error',
		'no-implicit-coercion': 'error',
		yoda: 'error',
		eqeqeq: ['error', 'smart'],
		'new-parens': 'error',
		'no-bitwise': 'error',
		'no-caller': 'error',
		'no-cond-assign': 'error',
		'no-constant-condition': 'error',
		'no-dupe-else-if': 'error',
		'lines-between-class-members': ['error', 'always'],
		'valid-typeof': 'off',
		'space-before-function-paren': 'off',
		'no-return-await': 'error',
	},
}
