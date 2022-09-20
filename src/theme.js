import { createTheme } from "@mui/material";
import { pink } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    secondary: pink,
  },
  typography: {
    fontFamily: '"Quicksand", "Helvetica", "Arial", sans-serif',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

export default theme;
