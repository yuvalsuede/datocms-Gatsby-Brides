const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsWork {
          edges {
            node {
              slug
            }
          }
        }
        allDatoCmsCategory {
          edges {
            node {
              slug
              name
            }
          }
        }
      }      
    `).then(result => {


      result.data.allDatoCmsWork.edges.map(({ node: work }) => {
        createPage({
          path: `works/${work.slug}`,
          component: path.resolve(`./src/templates/work.js`),
          context: {
            slug: work.slug,
          },
        })
      });

      result.data.allDatoCmsCategory.edges.map(({ node: category }) => {
        createPage({
          path: `/${category.slug}`,
          component: path.resolve(`./src/templates/category.js`),
          context: {
            slug: category.slug,
          },
        })
      });

      resolve()
    })
  })
}
