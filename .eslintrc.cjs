module.exports = {
	'env': {
		'es2021': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'require-jsdoc': [
			'error',
		],
		'@typescript-eslint/no-unused-vars': ['off', { 'argsIgnorePattern': '^_' }],
		// no-case-declarationsで_のみの変数名を許可
		'no-case-declarations': ['error', { 'allowUnboundThis': true }],
	}
};
