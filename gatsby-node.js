exports.createPages = async function ({ graphql, actions }) {
  const SANDBOX_QUERY = await graphql(`
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

  const BLOG_QUERY = await graphql(`
    query GetBlogPosts {
      allMdx(filter: { frontmatter: { category: { eq: "Blog" } } }) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  const DESIGN_QUERY = await graphql(`
    query GetDesignPosts {
      allMdx(filter: { frontmatter: { category: { eq: "Design" } } }) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  const CODE_QUERY = await graphql(`
    query GetCodePosts {
      allMdx(filter: { frontmatter: { category: { eq: "Code" } } }) {
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

  const postPerPage = 4;

  const numPages = Math.ceil(SANDBOX_QUERY.data.allMdx.nodes.length / postPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/sandbox` : `/sandbox/${i + 1}`,
      component: require.resolve("./src/templates/sandbox.js"),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  // Create paginated pages for posts

  const designNumPages = Math.ceil(DESIGN_QUERY.data.allMdx.nodes.length / postPerPage);

  Array.from({ length: designNumPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/design` : `/design/${i + 1}`,
      component: require.resolve("./src/templates/design.js"),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        designNumPages,
        currentPage: i + 1,
      },
    });
  });

  // Create paginated pages for posts

  const blogNumPages = Math.ceil(BLOG_QUERY.data.allMdx.nodes.length / postPerPage);

  Array.from({ length: blogNumPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: require.resolve("./src/templates/blog.js"),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        blogNumPages,
        currentPage: i + 1,
      },
    });
  });

  // Create paginated pages for posts

  const codeNumPages = Math.ceil(CODE_QUERY.data.allMdx.nodes.length / postPerPage);

  Array.from({ length: codeNumPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/code` : `/code/${i + 1}`,
      component: require.resolve("./src/templates/code.js"),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        codeNumPages,
        currentPage: i + 1,
      },
    });
  });

  // Create Sandbox posts

  SANDBOX_QUERY.data.allMdx.nodes.forEach((node) => {
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

  // Create Blog posts

  BLOG_QUERY.data.allMdx.nodes.forEach((node) => {
    const slug = node.frontmatter.slug;
    const id = node.id;

    actions.createPage({
      path: `blog/${slug}`,
      component: require.resolve(`./src/templates/blogPost.js`),
      context: {
        id,
      },
    });
  });

  // Create Design Posts
  DESIGN_QUERY.data.allMdx.nodes.forEach((node) => {
    const slug = node.frontmatter.slug;
    const id = node.id;

    actions.createPage({
      path: `design/${slug}`,
      component: require.resolve(`./src/templates/designPost.js`),
      context: {
        id,
      },
    });
  });

  // Create Code Posts
  CODE_QUERY.data.allMdx.nodes.forEach((node) => {
    const slug = node.frontmatter.slug;
    const id = node.id;

    actions.createPage({
      path: `code/${slug}`,
      component: require.resolve(`./src/templates/codePost.js`),
      context: {
        id,
      },
    });
  });
};
