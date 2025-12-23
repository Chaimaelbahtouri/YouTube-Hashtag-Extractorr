/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['http://192.168.136.1:3000'], // بدّل هاد الـ IP باللي كتستعمله فالـ dev
}

module.exports = nextConfig;
