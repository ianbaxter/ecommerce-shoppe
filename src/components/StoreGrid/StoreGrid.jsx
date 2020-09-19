import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container, Grid } from "@material-ui/core"
import ProductCard from "../ProductCard/ProductCard"

const StoreGrid = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allStripePrice {
          nodes {
            fields {
              slug
            }
            product {
              description
              id
              name
            }
            unit_amount_decimal
            currency
          }
        }
        allStripeProduct {
          nodes {
            localFiles {
              childImageSharp {
                fluid(maxWidth: 893) {
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
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {data.allStripePrice.nodes.map((node, i) => (
          <Grid key={node.product.id} item xs={12} sm={6} md={4} lg={3}>
            <ProductCard
              node={node}
              imgSrc={
                data.allStripeProduct.nodes[i].localFiles[0].childImageSharp
                  .fluid
              }
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default StoreGrid
