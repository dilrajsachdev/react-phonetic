import { createMuiTheme } from '@material-ui/core/styles';
import { deepOrange, purple } from '@material-ui/core/colors';
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
        light: deepOrange[500],
        main: deepOrange[700],
        dark: deepOrange[900]
      },
      secondary: {
        light: purple[300],
        main: purple[500],
        dark: purple[700]
      }
    },
    typography: {
      useNextVariants: true
    }
  });

export default theme;