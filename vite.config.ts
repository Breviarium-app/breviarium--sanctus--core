import {defineConfig} from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
    build: {
        sourcemap: true,
        lib: {
            entry: "src/sanctus.ts",
            name: "Sanctus",
        },
        rollupOptions: {
            output: [
                {
                    format: "es",
                    entryFileNames: "index.esm.js",
                    dir: "dist",
                },
                {
                    format: "cjs",
                    entryFileNames: "index.cjs.js",
                    dir: "dist",
                },
                {
                    format: "umd",
                    entryFileNames: "index.umd.js",
                    dir: "dist",
                    name: "Sanctus", // Global variable for browsers
                    sourcemap: true,
                },
            ],
        },
    },
    plugins: [dts()],
});