/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'duvd8m7ocsflh.cloudfront.net' },
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'https', hostname: '**.compunnel.com' },
      { protocol: 'https', hostname: '**.wordpress.com' },
      { protocol: 'https', hostname: '**.wp.com' },
      { protocol: 'https', hostname: 'secure.gravatar.com' },
      { protocol: 'https', hostname: 'i0.wp.com' },
      { protocol: 'https', hostname: 'i1.wp.com' },
      { protocol: 'https', hostname: 'i2.wp.com' },
    ],
  },
  env: {
    WP_SITE: process.env.WP_SITE || 'compu81.wordpress.com',
    WP_API_URL: process.env.WP_API_URL || '',
    REVALIDATE_SECRET: process.env.REVALIDATE_SECRET || '',
  },
};

module.exports = nextConfig;
