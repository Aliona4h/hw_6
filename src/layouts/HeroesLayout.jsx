import React from "react";
import { Box } from "@mui/material";

const HeroesLayout = ({ mainContent, sidebarContent }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ flex: 1 }}>{mainContent}</Box>
      <Box
        sx={{
          width: 500,
          padding: 2,
        }}
      >
        {sidebarContent}
      </Box>
    </Box>
  );
};
export default HeroesLayout;
