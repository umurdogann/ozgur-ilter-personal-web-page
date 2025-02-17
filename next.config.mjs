/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true},
    redirects: async () => {
        return [
            {
                source: '/works',
                destination: '/',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
