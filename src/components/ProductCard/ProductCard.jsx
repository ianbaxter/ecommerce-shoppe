import React from "react"
import Img from "gatsby-image"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"
import formatPrice from "../../utils/priceFormat"
import { Box, CardActionArea, makeStyles } from "@material-ui/core"

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

  return (
    <Card className={classes.noShadow}>
      <Link to={`/product/${node.fields.slug}`}>
        <CardActionArea>
          <CardContent>
            <Img className={classes.curved} fluid={imgSrc} />
            <Box pt={1}>
              <Typography variant="h6">{node.product.name}</Typography>
              <Typography variant="body1">
                {formatPrice(node.unit_amount_decimal, node.currency)}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}

export default ProductCard
