/** @type {import('next').NextConfig} */
const nextConfig = {
images:{
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'nextui.org',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'pbs.twimg.com',
          port: '',
          pathname: '/**',
        },
      ],
}
}

module.exports = nextConfig
