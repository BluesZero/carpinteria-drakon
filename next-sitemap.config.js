// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://www.carpinteriadrakon.mx',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.carpinteriadrakon.mx/sitemap.xml',
    ],
  },
};
