import React from "react"
import getStripe from "../../utils/stripejs"
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"
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

const ProductCard = ({ node }) => {
  const classes = useStyles()

  const { addItem } = useShoppingCart()

  const buyClicked = async () => {
    const price = node.id
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price, quantity: 1 }],
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}`,
    })
    if (error) {
      console.warn("Error:", error)
    }
  }

  const productData = {
    name: node.product.name,
    sku: node.id,
    price: node.unit_amount_decimal,
    image: node.product.images[0],
    currency: node.currency,
  }

  return (
    <Card variant="outlined">
      <CardContent>
        <CardMedia style={{ height: "165px" }} image={node.product.images[0]} />
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {node.product.name}
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          {`£${node.unit_amount_decimal / 100}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Item</Button>
      </CardActions>
      <CardActions>
        <Button
          onClick={() => addItem(productData)}
          aria-label={`Add ${node.product.name} to your cart`}
        >
          BUY ME
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
