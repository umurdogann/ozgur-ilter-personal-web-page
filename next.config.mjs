/** @type {import('next').NextConfig} */
const nextConfig = {
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
