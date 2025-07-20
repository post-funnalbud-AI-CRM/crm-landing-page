// next-i18next.config.js
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'sv'], // 'sv' is Swedish
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
