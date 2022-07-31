const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Michele Fasciano | Portfolio`,
    description: `Frontend web developer based in London with passion for responsive websites.`,
    siteUrl: `http://m-fasciano.github.io/`,
    author: `@m-fasciano`,
    image: `./src/images/meta-image.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-149866002-1", "G-ZPKWRB0CPT"],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics-gdpr`,
      options: {
        // The property ID; the tracking code won't be generated without it.
        trackingId: "UA-149866002-1",
        // Optional parameter (default false) - Enable analytics in development mode.
        enableDevelopment: true, // default false
        // Optional parameter (default true) - Some countries (such as Germany) require you to use the _anonymizeIP function for Google Analytics. Otherwise you are not allowed to use it.
        anonymizeIP: true,
        // Optional parameter (default false) - Starts google analytics with cookies enabled. In some countries (such as Germany) this is not allowed.
        autoStartWithCookiesEnabled: false,
        // Optional parameter - Configuration for react-ga and google analytics
        reactGaOptions: {
          debug: true,
          gaOptions: {
            sampleRate: 10,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-cookiehub-banner`,
      options: {
        // The ID is part of the CookieHub URL: https://cookiehub.net/cc/YOUR_COOKIEHUB_ID.js
        cookieHubId: "229e7063",
        // Optional parameter (default false) - Use new v2 API.
        cookieHubV2Api: true,
        // Categories configured with CookieHub
        categories: [
          {
            categoryName: "analytics", // Unique id of the category which is set by Cookiehub.
            cookieName: "gatsby-plugin-google-analytics-gdpr_cookies-enabled", // Your custom cookie name
          },
          {
            categoryName: "marketing",
            cookieName: "marketing-enabled",
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
