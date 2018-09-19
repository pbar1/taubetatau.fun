module.exports = {
  siteMetadata: {
    title: "Tau Beta Tau",
    author: "Pierce Bartine",
    description: "Official website of the Tau Beta Tau Chalupa Chapter"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/tacobell-icon.svg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    // 'gatsby-plugin-offline',
  ],
}
