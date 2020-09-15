import React from "react"
import { CartProvider } from "use-shopping-cart"
import getStripe from "./src/utils/stripejs"

export const wrapRootElement = ({ element }) => {
  return (
    <CartProvider
      mode="client-only"
      successUrl="http://localhost:8000/success"
      cancelUrl="http://localhost:8000"
      stripe={getStripe()}
      currency="GBP"
      allowedCountries={["US", "GB", "CA"]}
      billingAddressCollection={true}
    >
      {element}
    </CartProvider>
  )
}
