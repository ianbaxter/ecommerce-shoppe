import React from "react"
import { useShoppingCart } from "use-shopping-cart"
import { Divider, makeStyles, Typography } from "@material-ui/core"
import { ShoppingBasketOutlined } from "@material-ui/icons"
import "./nav.module.css"
import { Link } from "gatsby"

const useStyles = makeStyles({
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
    <header>
      <Typography variant="h1" gutterBottom>
        Shop
      </Typography>
      <Divider variant="middle" />
      <nav>
        <ul>
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
