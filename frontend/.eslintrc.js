module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true
	},
	parser: "babel-eslint",
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: "module",
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true
		}
	},
	extends: ["eslint:recommended", "airbnb", "prettier"],
	plugins: ["prettier", "react"],
	rules: {
		indent: [2, "tab"],
		"import/no-extraneous-dependencies": [
			"off",
			{ devDependencies: false }
		],
		"react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
		"react/prefer-stateless-function": "off"
	}
};
