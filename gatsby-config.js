require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Brides.il | אתר הכלות של ישראל`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-60242514-2",
        head: true
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        previewMode: true,
        disableLiveReload: false,
      },

    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `brides.il`,
      },
    },
    {
      resolve: "@horacioh/gatsby-theme-instagram",
      options: {
        type: `account`,
        username: "brides.il",
      },
    },

  ],
}
