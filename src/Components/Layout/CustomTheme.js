import { createMuiTheme } from '@material-ui/core/styles';
import { blue, red, } from '@material-ui/core/colors'; 

const CustomTheme = createMuiTheme({
    // spacing: factor => `${0.25 * factor}rem`,
    palette: {
        primary: {
            main: "#eceff1"
        },
        secondary: blue,
        error: red,
        contrastThreshold: 3,
        tonalOffset: 0.2,
        type: 'light',
    },
    overrides: {
        MuiButton: {
            root: {
              fontWeight: "bold",
            //   backgroundColor: "yellow",
              margin: "10px",
              "&:hover": {
                backgroundColor: "rgb(28, 148, 210)"
              }
            }
          }
      },
    typography: {
        fontSize: 12,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        htmlFontSize: 10,
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    shape: {
        borderRadius: 4
    },
    zIndex: {
        mobileStepper: 1000,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500,
    },
});

export default CustomTheme;