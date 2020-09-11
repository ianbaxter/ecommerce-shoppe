import { Typography } from "@material-ui/core"
import React from "react"
import "./nav.module.css"

const Nav = () => {
  return (
    <header>
      <Typography variant="h1">Silver</Typography>
      <nav>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
