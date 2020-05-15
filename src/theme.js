import { createMuiTheme } from '@material-ui/core/styles';
import indigo from "@material-ui/core/colors/indigo";
import orange from "@material-ui/core/colors/orange";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import { red } from '@material-ui/core/colors';

// // A custom theme for this app
// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: '#556cd6',
//     },
//     secondary: {
//       main: '#19857b',
//     },
//     error: {
//       main: red.A400,
//     },
//     background: {
//       default: '#fff',
//     },
//   },
// });

const theme = createMuiTheme({
    palette: {
      primary: {
        light: indigo[500],
        main: indigo[700],
        dark: indigo[900]
      },
      secondary: {
        light: orange[300],
        main: orange[500],
        dark: orange[700]
      }
    },
    typography: {
      useNextVariants: true
    }
  });

export default theme;