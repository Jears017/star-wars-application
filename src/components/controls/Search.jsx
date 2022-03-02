import React from "react";
import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export function Search() {
  return (
    <Box>
      <TextField
        size="small"
        id="outlined-start-adornment"
        sx={{ m: 1, bgcolor: "#FFF", width: 500 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      >
        Enter something
      </TextField>
    </Box>
  );
}
