import {
  Button,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core"
import React from "react"
import { useShoppingCart } from "use-shopping-cart"

const Cart = () => {
  const {
    redirectToCheckout,
    cartDetails,
    decrementItem,
    incrementItem,
  } = useShoppingCart()

  //   const buyClicked = async () => {
  //     const price = node.id
  //     const stripe = await getStripe()
  //     const { error } = await stripe.redirectToCheckout({
  //       mode: "payment",
  //       lineItems: [{ price, quantity: 1 }],
  //       successUrl: `${window.location.origin}/success`,
  //       cancelUrl: `${window.location.origin}`,
  //     })
  //     if (error) {
  //       console.warn("Error:", error)
  //     }
  //   }

  const cart = []

  for (const sku in cartDetails) {
    const cartEntry = cartDetails[sku]

    cart.push(
      <Grid container item spacing={3} xs={12}>
        <Grid item xs={2}>
          <CardMedia style={{ height: "80px" }} image={cartEntry.image} />
        </Grid>
        <Grid container item justify="center" xs={2}>
          <p>{cartEntry.name}</p>
        </Grid>
        <Grid container item justify="center" xs={3}>
          <p>{`£${cartEntry.price / 100}`}</p>
        </Grid>
        <Grid container item justify="center" xs={2}>
          <p>{cartEntry.formattedValue}</p>
        </Grid>

        <Grid container item justify="center" xs={3}>
          <div className="quantity">
            <Button
              onClick={() => incrementItem(cartEntry.sku)}
              aria-label={`Add one ${cartEntry.name} to your cart`}
            >
              <strong>+</strong>
            </Button>
            <span>
              <strong>{cartEntry.quantity}</strong>
            </span>
            <Button
              onClick={() => decrementItem(cartEntry.sku)}
              aria-label={`Remove one ${cartEntry.name} from your cart`}
            >
              <strong>-</strong>
            </Button>
          </div>
        </Grid>
      </Grid>
    )
  }

  return (
    <Container xs={10} sm={8}>
      <Grid container spacing={4} justify="center">
        <Grid item>
          <Typography variant="h4">Your Cart</Typography>
        </Grid>
        <Grid container item spacing={3} xs={12}>
          <Grid container item justify="center" xs={4}>
            <Typography variant="h6">Product</Typography>
          </Grid>
          <Grid container item justify="center" xs={3}>
            <Typography variant="h6">Price</Typography>
          </Grid>
          <Grid container item justify="center" xs={2}>
            <Typography variant="h6">Total</Typography>
          </Grid>
          <Grid container item justify="center" xs={3}>
            <Typography variant="h6">Quantity</Typography>
          </Grid>
        </Grid>
        {cart}
        <Grid item>
          <Button variant="outlined" onClick={() => redirectToCheckout()}>
            Checkout
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Cart
