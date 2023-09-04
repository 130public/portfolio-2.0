/*
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const projectTemplate = require.resolve(`./src/templates/project/project.js`);

  const { data } = await graphql(`
    query {
      allMarkdownRemark(
        filter: {frontmatter: {type: {in: "project"}}}
        limit: 100
      ) {
        edges {
          node {
            frontmatter {
              type
              slug
              title
              description
              role
              cover
              client
            }
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: '/projects/'+node.frontmatter.slug,
      component: projectTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
*/

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const projectTemplate = require.resolve(`./src/templates/project/project.js`);

  const { data } = await graphql(`
    query {
      allContentfulProject(
        limit:100
      ) {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
    }
  `)

  data.allContentfulProject.edges.forEach(({ node }) => {
    createPage({
      path: '/projects/'+node.slug,
      component: projectTemplate,
      context: {
        slug: node.slug,
      },
    })
  })
}