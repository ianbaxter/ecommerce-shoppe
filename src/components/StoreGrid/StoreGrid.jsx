import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Grid } from "@material-ui/core"
import ProductCard from "../ProductCard/ProductCard"

const StoreGrid = () => {
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
        allStripeProduct {
          nodes {
            localFiles {
              childImageSharp {
                fluid(maxWidth: 780) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <Grid item container spacing={3} xs={12} sm={10} md={8}>
      {data.allStripePrice.nodes.map((node, i) => (
        <Grid key={node.product.id} item xs={12} sm={6} md={4} lg={3}>
          {/* <a> */}
          <ProductCard
            node={node}
            imgSrc={
              data.allStripeProduct.nodes[i].localFiles[0].childImageSharp.fluid
            }
          />
          {/* </a> */}
        </Grid>
      ))}
    </Grid>
  )
}

export default StoreGrid
