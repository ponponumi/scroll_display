import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        manifest: true,
        outDir: './dist',
        rollupOptions: {
            input: [
                'index.html',
                'test/scss/style.scss',
                'test/ts/script.ts',
            ],
        },
    },
});
