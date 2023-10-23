const nextTranslate = require('next-translate-plugin')
const webpack = require('webpack');
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'flagicons.lipis.dev']
  },
  reactStrictMode: true,
  swcMinify: true,
  ...nextTranslate()
};

module.exports = nextConfig
