import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess(),
    kit: {
        adapter: adapter({
            // default options are shown
            pages: 'docs',
            assets: 'docs',
            fallback: null,
            precompress: true
        }),
        prerender: {
            default: true
        },
        vite: {
            server: {
                open: false,
                strictPort: false,
            }
        }
    }
};

export default config;
