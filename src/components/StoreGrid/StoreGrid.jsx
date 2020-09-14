import { Grid } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ProductCard from "../ProductCard/ProductCard"

const StoreGrid = () => {
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       allContentfulProduct {
  //         edges {
  //           node {
  //             id
  //             price
  //             quantity
  //             slug
  //             tags
  //             productDescription {
  //               productDescription
  //             }
  //             productName {
  //               productName
  //             }
  //             website
  //             featuredImage {
  //               file {
  //                 url
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // )
  const data = useStaticQuery(
    graphql`
      query {
        allStripePrice {
          nodes {
            product {
              description
              id
              images
              name
            }
            unit_amount_decimal
            id
            currency
          }
        }
      }
    `
  )
  return (
    <Grid item container spacing={2} xs={12} sm={10} md={8}>
      {data.allStripePrice.nodes.map(node => (
        <Grid key={node.product.id} item xs={12} sm={6} md={4}>
          {/* <a href={nodes.product.website}> */}
          <a>
            <ProductCard node={node} />
          </a>
        </Grid>
      ))}
    </Grid>
  )
}

export default StoreGrid
