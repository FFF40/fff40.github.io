import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		adapter: adapter({ fallback: "404.html", pages: "./dist" }),
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				return;
			}
		}
	}
};

export default config;
