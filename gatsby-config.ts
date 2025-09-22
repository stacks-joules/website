import type { GatsbyConfig } from 'gatsby';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Stacks+Joules`,
    description: `Stacks+Joules is a nonprofit project-based learning program`,
    siteUrl: `https://stacksandjoules.org`, // Required for sitemap
    author: `Stacks+Joules`,
    ogImage: `/og-image.png`,
    ogType: `website`,
    ogTitle: `Stacks+Joules`,
    ogDescription: `Welcome to Stacks + Joules. Bridging the tech opportunity gap with a specialized curriculum in computer programming for building automation controls.`,
    twitterUsername: `@StacksAndJoules`,
  },
  plugins: [
    `gatsby-plugin-pnpm`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap`,
        createLinkInHead: true,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://stacksandjoules.org`,
        sitemap: `https://stacksandjoules.org/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
  ],
  jsxRuntime: `automatic`,
};

export default config;
