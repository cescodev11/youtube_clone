import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { Logo } from "../utils/constants";

const NavBar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  ></Stack>
);

export default NavBar;
