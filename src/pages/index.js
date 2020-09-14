import React from "react"
import "normalize.css"
import "./index.css"
import StoreGrid from "../components/StoreGrid/StoreGrid"
import Nav from "../components/Nav/Nav"
import Footer from "../components/Footer/Footer"

export default function Home() {
  return (
    <div className="app">
      <Nav />
      <StoreGrid />
      <Footer />
    </div>
  )
}
