import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: true, // Enable gzip/brotli compression
			strict: true
		}),
		paths: {
			base: ''
		},
		prerender: {
			handleMissingId: 'warn'
		}
	}
};

export default config;