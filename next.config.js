/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	env: {
		BASE_URL: 'http://185.22.61.79:8000/v1/'
	},
	compiler: {
		styledComponents: true
	}
}

module.exports = nextConfig
