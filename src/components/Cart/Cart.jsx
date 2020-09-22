import {
  Box,
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
  centerQuantity: {
    display: "flex",
    alignItems: "center",
  },
})

const Cart = () => {
  const classes = useStyles()
  const {
    redirectToCheckout,
    cartDetails,
    cartCount,
    totalPrice,
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
          <Grid item xs={12} sm={3}>
            <Img fluid={cartEntry.image} />
          </Grid>
          <Grid container item justify="center" sm={3}>
            <Box ml={2}>
              <Typography>{cartEntry.name}</Typography>
            </Box>
          </Grid>
          <Grid container item justify="center" sm={2}>
            <Typography>
              {formatPrice(cartEntry.price, cartEntry.currency)}
            </Typography>
          </Grid>
          <Grid container item justify="center" sm={3}>
            <Button
              onClick={() => incrementItem(cartEntry.sku)}
              aria-label={`Add one ${cartEntry.name} to your cart`}
            >
              <Typography>
                <strong>+</strong>
              </Typography>
            </Button>
            <Typography className={classes.centerQuantity}>
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
          <Grid container item justify="center" sm={1}>
            <Button
              onClick={() => removeItem(cartEntry.sku)}
              aria-label={`Remove ${cartEntry.name} from your cart`}
            >
              <Typography>x</Typography>
            </Button>
          </Grid>
        </Grid>
        <Box mt={2} mb={3}>
          <Divider variant="middle" />
        </Box>
      </Container>
    )
  }

  return (
    <Container xs={10} sm={8}>
      {cartCount ? (
        <Container>
          <Grid container justify="center">
            <Box mb={5}>
              <Typography variant="h4">Your Basket</Typography>
            </Box>
          </Grid>
          {window.innerWidth > 599 && (
            <Grid container>
              <Grid container item justify="center" xs={6}>
                <Typography variant="body1" gutterBottom>
                  Product
                </Typography>
              </Grid>
              <Grid container item justify="center" xs={2}>
                <Typography variant="body1" gutterBottom>
                  Price
                </Typography>
              </Grid>
              <Grid container item justify="center" xs={3}>
                <Typography variant="body1" gutterBottom>
                  Quantity
                </Typography>
              </Grid>
            </Grid>
          )}
          <Box mb={3}>
            <Divider variant="middle" />
          </Box>
          {cart}
          <Box mt={5} maxWidth={400}>
            <Container>
              <Grid container spacing={1}>
                <Grid item xs={6} sm={5}>
                  <Typography variant="subtitle1">Subtotal:</Typography>
                </Grid>
                <Grid item xs={6} sm={5}>
                  <Typography variant="subtitle1">
                    {formatPrice(totalPrice)}
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={5}>
                  <Typography variant="subtitle1">Shipping:</Typography>
                </Grid>
                <Grid item xs={6} sm={5}>
                  <Typography variant="subtitle1">Free Shipping</Typography>
                </Grid>
                <Grid item xs={6} sm={5}>
                  <Typography variant="subtitle1">Total:</Typography>
                </Grid>
                <Grid item xs={6} sm={5}>
                  <Typography variant="subtitle1">
                    {formatPrice(totalPrice)}
                  </Typography>
                </Grid>
              </Grid>
            </Container>
            <Container>
              <Box mt={5}>
                <Button
                  variant="outlined"
                  disabled={cartCount === 0}
                  onClick={() => redirectToCheckout()}
                >
                  Checkout
                </Button>
              </Box>
            </Container>
          </Box>
        </Container>
      ) : (
        <Grid container direction={"column"} spacing={4}>
          <Grid container item justify="center">
            <Typography variant="h4" gutterBottom>
              Your Basket Is Empty
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
