const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allStripePrice {
        nodes {
          product {
            id
          }
        }
      }
    }
  `)

  result.data.allStripePrice.nodes.forEach(({ product }) => {
    createPage({
      path: `product/${product.id.slice(5)}`,
      component: path.resolve("./src/templates/product.js"),
      context: {
        slug: product.id.slice(5),
      },
    })
  })
}
