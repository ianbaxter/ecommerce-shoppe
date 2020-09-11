import { Grid } from "@material-ui/core"
import React from "react"
import ProductCard from "../ProductCard/ProductCard"

const StoreGrid = () => {
  return (
    <Grid container spacing={2} xs={12} sm={10} md={8}>
      <Grid item xs={12} sm={6} md={4}>
        <ProductCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ProductCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ProductCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ProductCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ProductCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ProductCard />
      </Grid>
    </Grid>
  )
}

export default StoreGrid
