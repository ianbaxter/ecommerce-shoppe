import React from "react"
import { useShoppingCart } from "use-shopping-cart"
import { Badge, Box, Divider, makeStyles, Typography } from "@material-ui/core"
import { ShoppingBasketOutlined } from "@material-ui/icons"
import { Link } from "gatsby"

const useStyles = makeStyles({
  header: {
    margin: "20px 0 40px 0",
  },
  ul: {
    display: "flex",
    justifyContent: "center",
    padding: "0",
    margin: "8px auto",
    "& > li": {
      listStyle: "none",
      margin: "0 16px",
      padding: "5px",
      borderRadius: "5px",
      transition: "0.12s",
      "&:hover": {
        backgroundColor: "rgb(239, 239, 239)",
      },
    },
  },
})

const Nav = () => {
  const classes = useStyles()
  const { cartCount } = useShoppingCart()
  return (
    <header className={classes.header}>
      <Box textAlign="center">
        <Link to="/">
          <Typography variant="h2" gutterBottom>
            SHOPPE
          </Typography>
        </Link>
      </Box>
      <Divider variant="middle" />
      <nav>
        <ul className={classes.ul}>
          <li>
            <Link to="/">
              <Typography>Shop</Typography>
            </Link>
          </li>
          <li>
            <Link to="/basket">
              <Badge badgeContent={cartCount} color="primary" fullWidth>
                <ShoppingBasketOutlined />
              </Badge>
            </Link>
          </li>
        </ul>
      </nav>
      <Divider variant="middle" />
    </header>
  )
}

export default Nav
