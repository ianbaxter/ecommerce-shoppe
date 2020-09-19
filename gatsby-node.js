const path = require("path")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `StripePrice`) {
    const slug = node.product.name.replace(/\W+/g, "-").toLowerCase()
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  } else if (node.internal.type === `StripeProduct`) {
    const slug = node.name.replace(/\W+/g, "-").toLowerCase()
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allStripePrice {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)

  result.data.allStripePrice.nodes.forEach(({ fields }) => {
    createPage({
      path: `product/${fields.slug}`,
      component: path.resolve("./src/templates/product.js"),
      context: {
        slug: fields.slug,
      },
    })
  })
}
