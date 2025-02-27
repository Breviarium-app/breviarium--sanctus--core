import {defineConfig} from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
    build: {
        sourcemap: true,
        lib: {
            entry: "./src/sanctus.ts",
            name: "Sanctus",
            fileName: (format) => `sanctus.${format}.js`,
            formats: ["es", "cjs", "umd"]
        },
    },
    plugins: [dts()],
});