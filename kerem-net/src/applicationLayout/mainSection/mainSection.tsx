import { Box } from "@mui/material";
import "./mainSection.css";
const mainSection = ({ children }: { children?: React.ReactNode }) => {
    return (
        <Box className="mainSection">
            {children}
        </Box>
    )
}

export default mainSection