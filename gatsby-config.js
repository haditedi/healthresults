module.exports = {
  siteMetadata: {
    title: `Health Results`,
    description: `Great health products and business opportunity. Our products made from 100% safe natural remedies that have no harmful side effects.`,
    author: `Health Results`,
    siteUrl: `https://www.healthresults.online`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-sharp`,
  ],
}
