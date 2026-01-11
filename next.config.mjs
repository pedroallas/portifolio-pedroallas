/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Configuração para deploy estático
  output: "export",
  trailingSlash: true,
  // Base path para GitHub Pages ou outros hosts (deixar vazio para Netlify)
  basePath: "",
};

export default nextConfig;
