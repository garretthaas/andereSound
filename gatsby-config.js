var dotenv = require("dotenv");
dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const { spaceId, accessToken, snipcart } = process.env;

module.exports = {
  siteMetadata: {
    title: `Andere Sound`,
    description: `Easy to use audio tools`,
    author: `garretthaas.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `OneShopper`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/icon.png`,
    //   },
    // },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId,
        accessToken
      }
    },
    {
      resolve: "gatsby-plugin-snipcartv3",
      options: {
        apiKey: snipcart,
        autopop: true,
      },
    },
  ],
}
