import { Container, Grid, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import Img from "gatsby-image"
import { useShoppingCart } from "use-shopping-cart"
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"
import Layout from "../components/Layout/Layout"
import formatPrice from "../utils/priceFormat"

export default function Product({ location: { state } }) {
  const useStyles = makeStyles({})

  const { addItem } = useShoppingCart()
  const classes = useStyles()
  return (
    <Layout>
      <Container maxWidth="lg">
        <Grid container justify="center" spacing={8}>
          <Grid item xs={12} sm={6}>
            <Img fluid={state.image} />
          </Grid>
          <Grid container item direction="column" spacing={1} xs={12} sm={6}>
            <Grid container item justify="center">
              <Typography variant="h4">{state.name}</Typography>
            </Grid>
            <Grid container item justify="center">
              <Typography variant="body1">
                {formatPrice(state.price, state.currency)}
              </Typography>
            </Grid>
            <Grid container item justify="center">
              <CardActions>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => addItem(state)}
                  aria-label={`Add ${state.name} to your cart`}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Grid>
            <Grid container item justify="center">
              <Typography variant="body2">{state.description}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}
