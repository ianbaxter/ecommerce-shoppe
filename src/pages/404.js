import React from "react"
import { Link } from "gatsby"
import { Container, Button, Grid, Typography } from "@material-ui/core"
import Nav from "../components/Nav/Nav"
import Head from "../components/Head/Head"

export default function NotFound() {
  return (
    <Container>
      <Head title="Page not found" />
      <Nav />
      <main>
        <Grid container justify="center" direction="column" spacing="4">
          <Grid item container justify="center">
            <Typography variant="h1">404</Typography>
          </Grid>
          <Grid item container justify="center">
            <Typography variant="h4" gutterBottom>
              Page not found
            </Typography>
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
