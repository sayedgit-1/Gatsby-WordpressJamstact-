exports.createPages = async ({ actions, graphql }) => {
  // query for WordPress page data
  const result = await graphql(`
    {
      wpcontent {
        pages {
          nodes {
            id
            uri
          }
        }
        posts {
          nodes {
            id
            uri
          }
        }
      }
    }
  `);

  // pull the page data out of the query response
  const pages = result.data.wpcontent.pages.nodes;

  // loop through WordPress pages and create a Gatsby page for each one
  pages.forEach((page) => {
    actions.createPage({
      path: page.uri,
      component: require.resolve("./src/templates/page-template.js"),
      context: {
        id: page.id,
      },
    });
  });

  // pull the post data out of the query response
  const posts = result.data.wpcontent.posts.nodes;

  // loop through WordPress posts and create a Gatsby page for each one
  posts.forEach((post) => {
    actions.createPage({
      path: `blog${post.uri}`,
      component: require.resolve("./src/templates/post-template.js"),
      context: {
        id: post.id,
      },
    });
  });
};
