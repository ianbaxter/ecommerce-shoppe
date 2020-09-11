import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import CardMedia from "@material-ui/core/CardMedia"

const useStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

const ProductCard = () => {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>

  return (
    <Card variant="outlined">
      <CardContent>
        <CardMedia
          style={{ height: "165px" }}
          image={
            "https://cdn.pixabay.com/photo/2017/08/02/01/34/pocket-watch-2569573_960_720.jpg"
          }
        />
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Silver Pocket Watch
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          £43.99
        </Typography>
        <Typography variant="body2" component="p">
          Free UK delivery
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Item</Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
