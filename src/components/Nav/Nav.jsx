import React from "react"
import { useShoppingCart } from "use-shopping-cart"
import { Typography } from "@material-ui/core"
import { ShoppingBasketOutlined } from "@material-ui/icons"
import "./nav.module.css"

const Nav = () => {
  const { cartCount } = useShoppingCart()
  return (
    <header>
      <Typography variant="h1">Silver</Typography>
      <nav>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>
            <ShoppingBasketOutlined />
            <span>{cartCount}</span>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
