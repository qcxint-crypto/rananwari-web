/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/models/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: process.env.NEXT_PUBLIC_CORS_ORIGIN || '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET' },
          { key: 'Cache-Control', value: 'public, max-age=31536000' },
        ],
      },
      {
        source: '/icons/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Izinkan semua hostname untuk gambar lokal
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Pastikan asset statis di-serve dengan benar
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://yourdomain.com' : '',
};

module.exports = nextConfig;
