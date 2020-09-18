import React from "react"
import Img from "gatsby-image"
import { useShoppingCart } from "use-shopping-cart"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"
import formatPrice from "../../utils/priceFormat"
import { Box, makeStyles } from "@material-ui/core"

const ProductCard = ({ node, imgSrc }) => {
  const useStyles = makeStyles({
    noShadow: {
      boxShadow: "none",
    },
    curved: {
      borderRadius: "5px",
    },
  })
  const classes = useStyles()

  const { addItem } = useShoppingCart()

  const productData = {
    name: node.product.name,
    sku: node.id,
    price: node.unit_amount_decimal,
    image: imgSrc,
    currency: node.currency,
    description: node.product.description,
  }

  return (
    <Card className={classes.noShadow}>
      <Link to={`/product/${node.product.id.slice(5)}`} state={productData}>
        <CardContent>
          <Img className={classes.curved} fluid={imgSrc} />
          <Box pt={1}>
            <Typography variant="h6">{node.product.name}</Typography>
            <Typography variant="body1">
              {formatPrice(node.unit_amount_decimal, node.currency)}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            size="small"
            onClick={e => {
              e.preventDefault()
              addItem(productData)
            }}
            aria-label={`Add ${node.product.name} to your cart`}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Link>
    </Card>
  )
}

export default ProductCard
