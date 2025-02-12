// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		// see: https://stackoverflow.com/questions/78628151/how-to-publish-a-forward-facing-api-in-sveltekit
		csrf: {
			checkOrigin: false //<--- Add this line
		}
	}
};

export default config;
