import { Box } from "@mui/material";
import "./page.css";

const Page = ({ children }: { children?: React.ReactNode }) => {
    return (
        <Box className="Page">
            {children}
        </Box>
    )
}

export default Page