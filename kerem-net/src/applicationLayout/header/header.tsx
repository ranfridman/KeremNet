import { Box } from "@mui/material";
import "./header.css";
import logo from '../../logo192.png';

const header = ({ children }: { children?: React.ReactNode }) => {
    return (
        <Box className="header">
            <img src={logo} alt="logo image" className="logo" />
            {children}
        </Box>
    )
}
export default header