import { createMuiTheme } from "@material-ui/core"

export default createMuiTheme({
  body: {
    margin: "0",
    overflowX: "hidden",
  },
  typography: {
    fontFamily: [
      "Work Sans",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(","),
  },
})
