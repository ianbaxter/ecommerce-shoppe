import {
  Button,
  Container,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core"
import React from "react"
import Img from "gatsby-image"
import { useShoppingCart } from "use-shopping-cart"
import { Link } from "gatsby"
import StoreOutlinedIcon from "@material-ui/icons/StoreOutlined"

const useStyles = makeStyles({
  quantity: {
    display: "flex",
    alignItems: "center",
  },
  quantityBtn: {
    width: "16px",
  },
  cart: {
    marginBottom: "80px",
  },
  checkoutBtn: {
    marginTop: "40px",
  },
})

const Cart = () => {
  const classes = useStyles()
  const {
    redirectToCheckout,
    cartDetails,
    cartCount,
    decrementItem,
    incrementItem,
    removeItem,
  } = useShoppingCart()

  const cart = []

  for (const sku in cartDetails) {
    const cartEntry = cartDetails[sku]

    cart.push(
      <Container className={classes.marginVertical}>
        <Grid container alignItems="center" xs={12} key={cartEntry.sku}>
          <Grid item xs={2}>
            <Img fluid={cartEntry.image} />
          </Grid>
          <Grid container item justify="center" xs={2}>
            <p>{cartEntry.name}</p>
          </Grid>
          <Grid container item justify="center" xs={2}>
            <p>{`£${cartEntry.price / 100}`}</p>
          </Grid>
          <Grid container item justify="center" xs={2}>
            <p>{cartEntry.formattedValue}</p>
          </Grid>

          <Grid container item justify="center" xs={3}>
            <Button
              className={classes.quantityBtn}
              onClick={() => incrementItem(cartEntry.sku)}
              aria-label={`Add one ${cartEntry.name} to your cart`}
            >
              <strong>+</strong>
            </Button>
            <strong className={classes.quantity}>{cartEntry.quantity}</strong>

            <Button
              onClick={() => decrementItem(cartEntry.sku)}
              aria-label={`Remove one ${cartEntry.name} from your cart`}
            >
              <strong>-</strong>
            </Button>
          </Grid>
          <Grid container item justify="center" xs={1}>
            <Button
              onClick={() => removeItem(cartEntry.sku)}
              aria-label={`Remove ${cartEntry.name} from your cart`}
            >
              <strong>x</strong>
            </Button>
          </Grid>
        </Grid>
        <Divider variant="middle" />
      </Container>
    )
  }

  return (
    <Container xs={10} sm={8}>
      {cartCount ? (
        <Container>
          <Grid container justify="center">
            <Typography variant="h4" gutterBottom>
              Your Cart
            </Typography>
          </Grid>
          <Grid container>
            <Grid container item justify="center" xs={4}>
              <Typography variant="body1" gutterBottom>
                Product
              </Typography>
            </Grid>
            <Grid container item justify="center" xs={2}>
              <Typography variant="body1" gutterBottom>
                Price
              </Typography>
            </Grid>
            <Grid container item justify="center" xs={2}>
              <Typography variant="body1" gutterBottom>
                Total
              </Typography>
            </Grid>
            <Grid container item justify="center" xs={3}>
              <Typography variant="body1" gutterBottom>
                Quantity
              </Typography>
            </Grid>
          </Grid>
          <Divider variant="middle" />
          {cart}
          <Grid className={classes.checkoutBtn} container justify="center">
            <Button
              variant="outlined"
              disabled={cartCount === 0}
              onClick={() => redirectToCheckout()}
            >
              Checkout
            </Button>
          </Grid>
        </Container>
      ) : (
        <Grid
          className={classes.cart}
          container
          direction={"column"}
          spacing={4}
        >
          <Grid container item justify="center">
            <Typography variant="h4">Your Cart Is Empty</Typography>
          </Grid>
          <Grid container item justify="center">
            <StoreOutlinedIcon fontSize="large" />
          </Grid>
          <Grid container item justify="center">
            <Link to="/">
              <Button variant="outlined">Shop</Button>
            </Link>
          </Grid>
        </Grid>
      )}
    </Container>
  )
}

export default Cart
