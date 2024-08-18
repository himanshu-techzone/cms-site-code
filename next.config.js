// module.exports = {
//   reactStrictMode: false,
//   distDir: 'build',
// }
module.exports = {
  assetPrefix: process.env.BASE_PATH || '',
  // basePath: '/docs',
  experimental: {
    outputStandalone: true,
  },
  publicRuntimeConfig: {
    basePath: process.env.BASE_PATH || '',
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
    ) 
  {
    return {
      // '/': { page: '/' },
    }
  },
  redirects: async () => {
    return [
      {
        source: '/about-doctor',
        destination: '/plastic-surgeon-in-delhi',
        permanent: true,
      },
      // Add more redirects as needed
    ];
  },


    // customKey: 'my-value',
    // basePath: '/aestiva-new',
    // basePath: '/',
// when use on local system please comment basePath line & when use for going to domain you can set base path.

  images: {
    loader: 'imgix',
    // path: 'http://digilantern.co/aestiva-new/',
    path: '',
  },
// when use on local system please comment images & Path line & when use for going to domain you can set base path.
}