import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname, // Required for resolving configs
});

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.ts", "**/*.tsx"], // Apply rules to TypeScript files
    rules: {
      // Custom rules can be added here
      "no-unused-vars": "warn",
      "react/react-in-jsx-scope": "off", // Example: React 17+ JSX transform
    },
  },
  {
    files: ["**/*.js", "**/*.jsx"], // Apply rules to JavaScript files
    rules: {
      // Custom JavaScript rules
      "no-console": "warn",
    },
  },
];

