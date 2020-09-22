import React from "react"
import Cart from "../components/Cart/Cart"
import Head from "../components/Head/Head"
import Layout from "../components/Layout/Layout"

export default function CartPage() {
  return (
    <Layout>
      <Head title="Shopping Basket" />
      <Cart />
    </Layout>
  )
}
