// next.config.mjs
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',                       // Required for static export
  basePath: isProd ? '/himali-portfolio' : '',
  assetPrefix: isProd ? '/himali-portfolio/' : '',
  images: { unoptimized: true },          // Disable image optimization for static export
};

export default nextConfig;
