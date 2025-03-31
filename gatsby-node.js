exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty',
    },
  });
};

// Increase timeout for HTML build
exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;
  // Increase timeout for this specific page if needed
  if (page.path === `/landing-page/`) {
    page.context.timeout = 30000; // 30 seconds
    createPage(page);
  }
};
