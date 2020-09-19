import React from "react"
import { Link } from "gatsby"
import { Container, Button, Grid, Typography } from "@material-ui/core"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import Nav from "../components/Nav/Nav"
import { useShoppingCart } from "use-shopping-cart"
import Head from "../components/Head/Head"

export default function Success() {
  const { clearCart } = useShoppingCart()
  clearCart()

  return (
    <Container>
      <Head title="Purchase successful" />
      <Nav />
      <main>
        <Grid container justify="center" direction="column" spacing="4">
          <Grid item container justify="center">
            <Typography variant="h4">Payment Successful</Typography>
          </Grid>
          <Grid item container justify="center">
            <CheckCircleIcon fontSize="large" />
          </Grid>
          <Grid item container justify="center">
            <Button variant="outlined" size="large">
              <Link to="/">Home</Link>
            </Button>
          </Grid>
        </Grid>
      </main>
    </Container>
  )
}
