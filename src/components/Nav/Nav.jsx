import React from "react"
import { useShoppingCart } from "use-shopping-cart"
import { Typography } from "@material-ui/core"
import { ShoppingBasketOutlined } from "@material-ui/icons"
import "./nav.module.css"
import { Link } from "gatsby"

const Nav = () => {
  const { cartCount } = useShoppingCart()
  return (
    <header>
      <Typography variant="h1">Silver</Typography>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Shop</li>
          <li>
            <Link to="/cart">
              <ShoppingBasketOutlined />
              <span>{cartCount}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
