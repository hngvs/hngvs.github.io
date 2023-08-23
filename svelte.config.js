import adapter from '@sveltejs/adapter-auto';
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
        adapter: adapter(),
        vite: {
            server: {
                open: false,
                strictPort: false,
            }
        }
    }
};

export default config;
