import { React, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const TimeToggle = ({ setTimeperiod }) => {
  const [alignment, setAlignment] = useState("1D");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    setTimeperiod(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="1D">1 DAY</ToggleButton>
      <ToggleButton value="7D">7 DAYS</ToggleButton>
      <ToggleButton value="1M">1 Month</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default TimeToggle;
