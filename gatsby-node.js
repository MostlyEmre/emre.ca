exports.createPages = async function ({ graphql, actions }) {
  const { data } = await graphql(`
    query GetSandboxPosts {
      allMdx(filter: { frontmatter: { category: { eq: "Sandbox" } } }) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  // Create paginated pages for posts

  // const postPerPage = 4;

  // const numPages = Math.ceil(data.allMarkdownRemark.nodes.length / postPerPage);

  // Array.from({ length: numPages }).forEach((_, i) => {
  //   actions.createPage({
  //     path: i === 0 ? `/` : `/${i + 1}`,
  //     component: require.resolve("./src/templates/sandbox.js"),
  //     context: {
  //       limit: postPerPage,
  //       skip: i * postPerPage,
  //       numPages,
  //       currentPage: i + 1,
  //     },
  //   });
  // });

  // Create single blog posts

  data.allMdx.nodes.forEach((node) => {
    const slug = node.frontmatter.slug;
    const id = node.id;

    actions.createPage({
      path: `sandbox/${slug}`,
      component: require.resolve(`./src/templates/sandboxPost.js`),
      context: {
        id,
      },
    });
  });
};
