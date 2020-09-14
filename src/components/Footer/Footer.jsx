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
    marginTop: "40px",
  },
  social: {
    height: "120px",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    cursor: "pointer",
  },
  bottom: {
    height: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
})

const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <section className={classes.social}>
        <Grid container justify="center" spacing={4}>
          <Grid item>
            <InstagramIcon className={classes.icon} fontSize="large" />
          </Grid>
          <Grid item>
            <Facebook className={classes.icon} fontSize="large" />
          </Grid>
        </Grid>
      </section>
      <section className={classes.bottom}>
        <Typography variant="body2" color="primary">
          © Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </section>
    </footer>
  )
}

export default Footer
