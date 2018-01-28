import webpack from 'webpack';

/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
 **/
export default function (config, env, helpers) {
	const isProduction = process.env.NODE_ENV === 'production';
	const callbackUrl = isProduction ? 'https://petite-auth.surge.sh/callback' : 'http://localhost:8080/callback';
	config.plugins = [
		...config.plugins,
		// Fixes `formidable` issue with ssr (https://github.com/felixge/node-formidable/issues/337#issuecomment-153408479)
		new webpack.DefinePlugin({
			'global.GENTLY': false,
			process: {
				env: {
					AUTH0_DOMAIN: JSON.stringify('petite-auth.auth0.com'),
					AUTH0_CLIENT_ID: JSON.stringify('nCeCLL3DQ6IjDDovV30cbgyyWPd3akZ4'),
					GOOGLE_CLIENT_ID: JSON.stringify('934399699312-niohk8v1b3bktl58n2ovuf9kmnbmkdai.apps.googleusercontent.com'),
					FACEBOOK_CLIENT_ID: JSON.stringify('2023835517832584'),
					CALLBACK_URL: JSON.stringify(callbackUrl)
				}
			}
		})
	];
}
