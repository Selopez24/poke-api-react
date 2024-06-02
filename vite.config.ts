import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr({
			include: "**/*.svg",
		}),
	],
	test: {
		environment: "jsdom",
	},
	css: {
		modules: {
			localsConvention: "camelCaseOnly",
		},
	},
});
