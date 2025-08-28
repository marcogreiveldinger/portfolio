const { withContentlayer } = require("next-contentlayer");
const { withPlausibleProxy } = require("next-plausible");

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: true };

module.exports = withContentlayer(withPlausibleProxy()(nextConfig));
