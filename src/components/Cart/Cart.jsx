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
import formatPrice from "../../utils/priceFormat"

const useStyles = makeStyles({
  quantity: {
    display: "flex",
    alignItems: "center",
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
      <Container key={cartEntry.sku}>
        <Grid container alignItems="center">
          <Grid item xs={2}>
            <Img fluid={cartEntry.image} />
          </Grid>
          <Grid container item justify="center" xs={2}>
            <Typography>{cartEntry.name}</Typography>
          </Grid>
          <Grid container item justify="center" xs={2}>
            <Typography>
              {formatPrice(cartEntry.price, cartEntry.currency)}
            </Typography>
          </Grid>
          <Grid container item justify="center" xs={2}>
            <Typography>{cartEntry.formattedValue}</Typography>
          </Grid>

          <Grid container item justify="center" xs={3}>
            <Button
              onClick={() => incrementItem(cartEntry.sku)}
              aria-label={`Add one ${cartEntry.name} to your cart`}
            >
              <Typography>
                <strong>+</strong>
              </Typography>
            </Button>
            <Typography className={classes.quantity}>
              {cartEntry.quantity}
            </Typography>
            <Button
              onClick={() => decrementItem(cartEntry.sku)}
              aria-label={`Remove one ${cartEntry.name} from your cart`}
            >
              <Typography>
                <strong>-</strong>
              </Typography>
            </Button>
          </Grid>
          <Grid container item justify="center" xs={1}>
            <Button
              onClick={() => removeItem(cartEntry.sku)}
              aria-label={`Remove ${cartEntry.name} from your cart`}
            >
              <Typography>
                <strong>x</strong>
              </Typography>
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
          spacing={10}
        >
          <Grid container item justify="center">
            <Typography variant="h4" gutterBottom>
              Your Cart Is Empty
            </Typography>
          </Grid>
          <Grid container item justify="center">
            <StoreOutlinedIcon fontSize="large" />
          </Grid>
          <Grid container item justify="center">
            <Link to="/">
              <Button variant="outlined" size="large">
                Shop
              </Button>
            </Link>
          </Grid>
        </Grid>
      )}
    </Container>
  )
}

export default Cart
