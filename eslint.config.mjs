import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";

export default [
	{
		files: ["src/**/*.ts"],
		languageOptions: {
			parser: tsparser,
			parserOptions: {
				project: "./tsconfig.json",
			},
		},
		plugins: {
			"@typescript-eslint": tseslint,
		},
		rules: {
			...tseslint.configs.recommended.rules,
			// relax rules for legacy codebase
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
			"@typescript-eslint/no-require-imports": "off",
			"@typescript-eslint/no-wrapper-object-types": "warn",
			"@typescript-eslint/no-unsafe-function-type": "warn",
			"no-var": "warn",
		},
	},
	{
		ignores: ["dist/", "node_modules/"],
	},
];
