import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import {mdsvex} from 'mdsvex'


/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', '.md'],
    preprocess: [
        preprocess(),
        mdsvex({
            extensions: ['.md'],
            layout: {
                nets: 'src/routes/nets/_netLayout.svelte'
            }
        })
    ],
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
