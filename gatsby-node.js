const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require('lodash');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const tagTemplate = path.resolve(`./src/templates/tags.js`)

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
        allDatoCmsVendor {
          edges {
            node {
              position
              hashtags
              name
              slug
            }
          }
        }
      }      
    `).then(result => {

      if (result.errors) {
        throw result.errors
      }

      result.data.allDatoCmsCategory.edges.map(({ node: category }) => {
        createPage({
          path: `/${category.slug}`,
          component: path.resolve(`./src/templates/category.js`),
          context: {
            slug: category.slug,
          },
        })
      });


      // Tag pages:
      const vendors = result.data.allDatoCmsVendor.edges;
      let tags = []
      // Iterate through each post, putting all found tags into `tags`
      _.each(vendors, edge => {
        if (_.get(edge, 'node.hashtags')) {
          tags = tags.concat(edge.node.hashtags)
        }
      })
      // Eliminate duplicate tags
      tags = _.uniq(tags)

      // Make tag pages
      tags.forEach(tag => {
        createPage({
          path: `/tags/${_.kebabCase(tag)}/`,
          component: tagTemplate,
          context: {
            tag,
          },
        })
      });

      resolve()
    })
  })
}
