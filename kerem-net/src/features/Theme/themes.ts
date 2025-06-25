import { createTheme } from '@mui/material/styles';
export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
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