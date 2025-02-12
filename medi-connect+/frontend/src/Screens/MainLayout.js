import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function MainLayout() {
    return (  
        <Box>
          <Header/>
            <Outlet/>
        </Box>
    );
}

export default MainLayout;