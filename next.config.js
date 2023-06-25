/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [{
            hostname : 'res.cloudinary.com'
        }]
    },
    "compilerOptions": {
        "baseUrl": "."
      }
}

module.exports = nextConfig
