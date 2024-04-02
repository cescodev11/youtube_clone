import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";

import { Search, SearchIcon } from "@mui/icons-material";

const SearchBar = () => {
  return (
    //Paper is just a div that has a background and floats
    <Paper
      component="form"
      onSubmit={() => {}}
      //sx is styles attribute
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3 ",
        pl: 2,
        boxShadow: "none",
        //below is a margin right for small devices set to 5
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value=""
        onChange={() => {}}
      />
      <IconButton type ="submit" sx={{p: '10px, color: "red'}}>
          <Search /> 
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
