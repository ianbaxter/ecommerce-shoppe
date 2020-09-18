import React from "react"
import { useShoppingCart } from "use-shopping-cart"
import { Box, Divider, makeStyles, Typography } from "@material-ui/core"
import { ShoppingBasketOutlined } from "@material-ui/icons"
import { Link } from "gatsby"

const useStyles = makeStyles({
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "20px 0 40px 0",
  },
  ul: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "0",
    margin: "8px auto",
    "& > li": {
      position: "relative",
      display: "flex",
      alignItems: "center",
      listStyle: "none",
      margin: "0 16px",
      padding: "5px",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "0.08s",
      "&:hover": {
        backgroundColor: "lightpink",
      },
    },
  },
  carttotal: {
    position: "absolute",
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    padding: "6px",
    background: "black",
    color: "white",
    fontSize: "10px",
    fontWeight: "bold",
    top: "-12px",
    right: "-8px",
    textAlign: "center",
  },
})

const Nav = () => {
  const classes = useStyles()
  const { cartCount } = useShoppingCart()
  return (
    <header className={classes.header}>
      <Box mx={"auto"}>
        <Typography variant="h2" gutterBottom>
          Shop
        </Typography>
      </Box>
      <Divider variant="middle" />
      <nav>
        <ul className={classes.ul}>
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>About</li>
          <li>
            <Link to="/cart">
              <ShoppingBasketOutlined />
              {cartCount > 0 && (
                <div className={classes.carttotal}>{cartCount}</div>
              )}
            </Link>
          </li>
        </ul>
      </nav>
      <Divider variant="middle" />
    </header>
  )
}

export default Nav
