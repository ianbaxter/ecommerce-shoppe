import React from "react"
import "normalize.css"
import "./index.css"
import Nav from "../components/Nav/Nav"
import Footer from "../components/Footer/Footer"
import Cart from "../components/Cart/Cart"

export default function Home() {
  return (
    <div className="app">
      <Nav />
      <Cart />
      <Footer />
    </div>
  )
}
