import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        text:{
            primary: "#FFFFFF",
            secondary: "#ffffff80",
        },
        primary: {
            main: '#f4511e',
            light: '#ff5722',
            back: '#121521',
        },
        secondary:{
            main: '#121521',
        },
        error: {
            main: "#bf360c",
        },
        background: {
            default: '#121521',
        },
    },
});

export default theme;
