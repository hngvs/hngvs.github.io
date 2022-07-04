import adapter from '@sveltejs/adapter-static';

const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            // default options are shown
            pages: 'docs',
            assets: 'docs',
            fallback: null,
            precompress: true
        }),
        paths: {
            // change below to your repo name
            base: dev ? "" : "/hngvs.github.io",
        },
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
