/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        reactCompiler: true,
        taint: true,
    },
};

export default nextConfig;
