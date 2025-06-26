import { createTheme } from '@mui/material/styles';
export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#121212',
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