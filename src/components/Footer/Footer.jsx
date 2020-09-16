import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography } from "@material-ui/core"
import InstagramIcon from "@material-ui/icons/Instagram"
import { Facebook } from "@material-ui/icons"

const useStyles = makeStyles({
  footer: {
    width: "100%",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "80px",
    backgroundColor: "#333",
  },
  social: {
    margin: "0 8px",
    cursor: "pointer",
    color: "white",
  },
})

const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Grid container justify="center">
        <Grid item>
          <InstagramIcon className={classes.social} fontSize="large" />
        </Grid>
        <Grid item>
          <Facebook className={classes.social} fontSize="large" />
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
