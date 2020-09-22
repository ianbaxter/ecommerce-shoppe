import React, { useState } from "react"
import { graphql } from "gatsby"
import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core"
import Img from "gatsby-image"
import { useShoppingCart } from "use-shopping-cart"
import Button from "@material-ui/core/Button"
import Layout from "../components/Layout/Layout"
import formatPrice from "../utils/priceFormat"
import Head from "../components/Head/Head"
import CheckRoundedIcon from "@material-ui/icons/CheckRounded"

export default function Product({ data }) {
  const useStyles = makeStyles({
    curved: {
      borderRadius: "5px",
    },
    centerText: {
      textAlign: "center",
    },
    fullWidth: {
      width: "100%",
    },
  })
  const classes = useStyles()

  const [added, setAdded] = useState(false)

  const { addItem } = useShoppingCart()

  const productData = {
    name: data.stripePrice.product.name,
    sku: data.stripePrice.id,
    price: data.stripePrice.unit_amount_decimal,
    image: data.stripeProduct.localFiles[0].childImageSharp.fluid,
    currency: data.stripePrice.currency,
    description: data.stripePrice.product.description,
  }

  const addToCart = () => {
    addItem(productData)
    setAdded(true)
    setTimeout(() => {
      setAdded(false)
    }, 1500)
  }

  return (
    <Layout>
      <Head title={data.stripePrice.product.name} />
      <Container maxWidth="lg">
        <Grid container justify="center" spacing={3}>
          <Grid item xs={12} sm={6}>
            <Img
              className={classes.curved}
              fluid={data.stripeProduct.localFiles[0].childImageSharp.fluid}
            />
          </Grid>
          <Grid container item direction="column" spacing={2} xs={12} sm={6}>
            <Grid container item spacing={1}>
              <Grid container item justify="center">
                <Typography className={classes.centerText} variant="h4">
                  {data.stripePrice.product.name}
                </Typography>
              </Grid>
              <Grid container item justify="center">
                <Typography variant="h6">
                  {formatPrice(
                    data.stripePrice.unit_amount_decimal,
                    data.stripePrice.currency
                  )}
                </Typography>
              </Grid>
            </Grid>
            <Grid container item justify="center">
              <Box pt={1} pb={1} className={classes.fullWidth}>
                <Button
                  variant="outlined"
                  size="large"
                  fullWidth
                  onClick={addToCart}
                  aria-label={`Add ${data.stripePrice.product.name} to your cart`}
                >
                  {added ? (
                    <React.Fragment>
                      Added to Basket
                      <Box display="flex" alignItems="center" pl={1}>
                        <CheckRoundedIcon />
                      </Box>
                    </React.Fragment>
                  ) : (
                    "Add to Basket"
                  )}
                </Button>
              </Box>
            </Grid>
            <Grid container item>
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
