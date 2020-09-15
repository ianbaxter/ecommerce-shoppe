import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography } from "@material-ui/core"
import InstagramIcon from "@material-ui/icons/Instagram"
import { Facebook } from "@material-ui/icons"

const useStyles = makeStyles({
  footer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "80px",
  },
  social: {
    height: "120px",
    display: "flex",
    alignItems: "center",
    borderTop: "solid lightGrey 1px",
  },
  icon: {
    cursor: "pointer",
  },
  bottom: {
    height: "240px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightGrey",
  },
})

const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Grid container justify="center" className={classes.social}>
        <Grid item>
          <InstagramIcon className={classes.icon} fontSize="large" />
        </Grid>
        <Grid item>
          <Facebook className={classes.icon} fontSize="large" />
        </Grid>
      </Grid>
      <section className={classes.bottom}>
        <Typography variant="body2" color="primary">
          © Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </section>
    </footer>
  )
}

export default Footer
