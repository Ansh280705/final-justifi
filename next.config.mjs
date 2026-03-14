// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     serverComponentsHmrCache: false,
//   },

//   productionBrowserSourceMaps: false,

//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "img.clerk.com",
//       },
//       {
//         protocol: "https",
//         hostname: "res.cloudinary.com", // 👈 REQUIRED for blog images
//       },
//     ],
//   },
// };

// export default nextConfig;
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  './i18n/request.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsHmrCache: false,
  },

  productionBrowserSourceMaps: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // blog images
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // about page images ✅
      },
    ],
  },
};

export default withNextIntl(nextConfig);
