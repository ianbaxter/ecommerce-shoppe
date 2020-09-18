import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Grid } from "@material-ui/core"
import InstagramIcon from "@material-ui/icons/Instagram"
import { Facebook } from "@material-ui/icons"

const useStyles = makeStyles({
  footer: {
    height: "400px",
    display: "flex",
    flex: "flex-end",
    alignItems: "center",
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
    <Box component="footer" mt={10} className={classes.footer}>
      <Grid container justify="center">
        <Grid item>
          <InstagramIcon className={classes.social} fontSize="large" />
        </Grid>
        <Grid item>
          <Facebook className={classes.social} fontSize="large" />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
