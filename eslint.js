module.exports = {
	'extends': [
		'eslint:recommended',
		'plugin:vue/essential',
		'plugin:vue/recommended'
	],
	'parserOptions': {
		'ecmaVersion': 12,
		'sourceType': 'module'
	},
	'plugins': [
		'vue',
		'extra-rules',
	],
	'rules': {
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'indent': 'off',
		'vue/custom-event-name-casing': 'off',
		'vue/script-indent': ['error', 'tab', {
			'baseIndent': 1,
			'switchCase': 1,
			'ignores': []
		}],
		'vue/html-indent': ['error', 'tab', {
			'attribute': 1,
			'baseIndent': 1,
			'closeBracket': 0,
			'alignAttributesVertically': true,
			'ignores': []
		}],
		'vue/html-closing-bracket-newline': ['error', {
			'singleline': 'never',
			'multiline': 'never'
		}],
		'no-mixed-spaces-and-tabs': 'off',
		'vue/html-self-closing': 'off',
		'vue/no-v-html': 'off',
		'vue/no-template-shadow': 'off',
		'vue/component-definition-name-casing': 'off',
		'vue/max-attributes-per-line': ['error', {
			'singleline': 2,
			'multiline': {
				'max': 2,
				'allowFirstLine': true
			}
		}],
		'extra-rules/no-commented-out-code': 'warn',
		'no-console': ['warn'],
	},

};