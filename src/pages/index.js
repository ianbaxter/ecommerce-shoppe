import React from "react"
import StoreGrid from "../components/StoreGrid/StoreGrid"
import Layout from "../components/Layout/Layout"
import Head from "../components/Head/Head"

export default () => {
  return (
    <Layout>
      <Head title="All products" />
      <StoreGrid />
    </Layout>
  )
}
