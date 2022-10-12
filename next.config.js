/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: { disableStaticImages: false },
  sassOptions: {
    prependData: '@use "~@styles/variables.scss" as *;'
  }
};