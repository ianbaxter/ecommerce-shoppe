import { createMuiTheme } from "@material-ui/core"

export default createMuiTheme({
  typography: {
    fontFamily: [
      "Work Sans",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(","),
  },
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
})
