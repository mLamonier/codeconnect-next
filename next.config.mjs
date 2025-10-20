/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // forma antiga:
        // domains: [
        //     'raw.githubusercontent.com'
        // ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '**',
            },
        ],
    }
};

export default nextConfig;
