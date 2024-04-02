import React from "react";

import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = () => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "92%" },
      flexDirection: { md: "column" },
    }}
  ></Stack>
);

export default Sidebar;
