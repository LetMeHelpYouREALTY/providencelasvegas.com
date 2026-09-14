/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920, 2048],
    remotePatterns: [
      { protocol: 'https', hostname: 'imagedelivery.net' },
      { protocol: 'https', hostname: 'images.providencelasvegas.com' },
    ],
  },
  async redirects() {
    const providenceRedirects = [
      { source: '/neighborhoods/summerlin', destination: '/providence', permanent: true },
      { source: '/neighborhoods/henderson', destination: '/providence', permanent: true },
      { source: '/neighborhoods/green-valley', destination: '/providence', permanent: true },
      { source: '/neighborhoods/the-ridges', destination: '/providence', permanent: true },
      { source: '/neighborhoods/skye-canyon', destination: '/providence', permanent: true },
      { source: '/neighborhoods/southern-highlands', destination: '/providence', permanent: true },
      { source: '/neighborhoods/north-las-vegas', destination: '/providence', permanent: true },
      { source: '/neighborhoods/inspirada', destination: '/providence', permanent: true },
      { source: '/neighborhoods/mountains-edge', destination: '/providence', permanent: true },
      { source: '/neighborhoods/centennial-hills', destination: '/providence', permanent: true },
      { source: '/buyers/luxury-homes-las-vegas', destination: '/luxury-homes', permanent: true },
      { source: '/55-plus-communities/trilogy-summerlin', destination: '/55-plus-communities', permanent: true },
      { source: '/55-plus-communities/sun-city-summerlin', destination: '/55-plus-communities', permanent: true },
      { source: '/55-plus-communities/sun-city-anthem', destination: '/55-plus-communities', permanent: true },
      { source: '/55-plus-communities/sun-city-aliante', destination: '/55-plus-communities', permanent: true },
      { source: '/55-plus-communities/solera-anthem', destination: '/55-plus-communities', permanent: true },
      { source: '/55-plus-communities/heritage-stonebridge', destination: '/55-plus-communities', permanent: true },
      { source: '/55-plus-communities/del-webb-lake-las-vegas', destination: '/55-plus-communities', permanent: true },
    ];
    return [
      ...providenceRedirects,
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'providencelasvegas.com',
          },
        ],
        destination: 'https://www.providencelasvegas.com/:path*',
        permanent: true,
      },
    ]
  },
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination:
          process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:5328/api/:path*'
            : '/api/',
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/Image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://assets.calendly.com https://www.googletagmanager.com https://www.google-analytics.com https://maps.googleapis.com",
              "style-src 'self' 'unsafe-inline' https://em.realscout.com https://www.realscout.com https://assets.calendly.com",
              "img-src 'self' data: blob: https: http: https://imagedelivery.net https://images.providencelasvegas.com https://maps.googleapis.com https://maps.gstatic.com",
              "font-src 'self' data: https://assets.calendly.com",
              "connect-src 'self' https://em.realscout.com https://www.realscout.com https://openrouter.ai https://api.openai.com https://calendly.com https://www.google-analytics.com https://analytics.google.com https://maps.googleapis.com",
              "frame-src 'self' https://em.realscout.com https://www.realscout.com https://calendly.com https://assets.calendly.com https://www.google.com https://maps.google.com https://*.google.com",
              "worker-src 'self' blob:",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
