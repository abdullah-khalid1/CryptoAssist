import { React } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  titleColor: { color: "grey" },
  valueColor: { color: "lightBlack" },
});

const SearchBar = ({ searchTearm, setSearchTerm }) => {
  const classes = useStyles();

  return (
    <div>
      <TextField
        className={classes.titleColor}
        id="search-bar"
        placeholder="Search"
        margin="normal"
        value={searchTearm}
        onChange={(e) => setSearchTerm(e.target.value)}
        variant="outlined"
        InputProps={{
          startAdornment: (
            <IconButton>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;
