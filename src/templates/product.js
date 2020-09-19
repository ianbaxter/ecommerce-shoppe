import React from "react"
import { graphql } from "gatsby"
import { Container, Grid, makeStyles, Typography } from "@material-ui/core"
import Img from "gatsby-image"
import { useShoppingCart } from "use-shopping-cart"
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"
import Layout from "../components/Layout/Layout"
import formatPrice from "../utils/priceFormat"

export default function Product({ data }) {
  const useStyles = makeStyles({
    curved: {
      borderRadius: "5px",
    },
  })
  const classes = useStyles()

  const productData = {
    name: data.stripePrice.product.name,
    sku: data.stripePrice.id,
    price: data.stripePrice.unit_amount_decimal,
    image: data.stripeProduct.localFiles[0].childImageSharp.fluid,
    currency: data.stripePrice.currency,
    description: data.stripePrice.product.description,
  }

  const { addItem } = useShoppingCart()
  return (
    <Layout>
      <Container maxWidth="lg">
        <Grid container justify="center" spacing={4}>
          <Grid item xs={12} sm={6}>
            <Img
              className={classes.curved}
              fluid={data.stripeProduct.localFiles[0].childImageSharp.fluid}
            />
          </Grid>
          <Grid container item direction="column" spacing={2} xs={12} sm={6}>
            <Grid container item justify="center">
              <Typography variant="h4">
                {data.stripePrice.product.name}
              </Typography>
            </Grid>
            <Grid container item justify="center">
              <Typography variant="body1">
                {formatPrice(
                  data.stripePrice.unit_amount_decimal,
                  data.stripePrice.currency
                )}
              </Typography>
            </Grid>
            <Grid container item justify="center">
              <CardActions>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => addItem(productData)}
                  aria-label={`Add ${data.stripePrice.product.name} to your cart`}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Grid>
            <Grid container item justify="center">
              <Typography variant="body1">
                {data.stripePrice.product.description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    stripePrice(fields: { slug: { eq: $slug } }) {
      product {
        images
        name
        description
        id
      }
      id
      unit_amount_decimal
      currency
    }
    stripeProduct(fields: { slug: { eq: $slug } }) {
      localFiles {
        childImageSharp {
          fluid(maxWidth: 893) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
