import { createTheme } from '@mui/material/styles';
export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        // primary: {
        //     // main: '#22817E',

        // },
        background: {
            default: '#1c1c1c',
        }
    },
});
export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: 'aliceblue',
        }
    },
});