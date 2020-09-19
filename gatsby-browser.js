import React from "react"
import { CartProvider } from "use-shopping-cart"
import getStripe from "./src/utils/stripejs"
import { responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles"
import theme from "./src/styles/theme"
import "./src/styles/styles.css"

export const wrapRootElement = ({ element }) => {
  const responsiveTheme = responsiveFontSizes(theme)
  return (
    <ThemeProvider theme={responsiveTheme}>
      <CartProvider
        mode="client-only"
        successUrl={process.env.GATSBY_SUCCESS_URL}
        cancelUrl={process.env.GATSBY_CANCEL_URL}
        stripe={getStripe()}
        currency="GBP"
        allowedCountries={["US", "GB", "CA"]}
        billingAddressCollection={true}
      >
        {element}
      </CartProvider>
    </ThemeProvider>
  )
}
