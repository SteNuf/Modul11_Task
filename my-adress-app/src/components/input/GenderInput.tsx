import { useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  type SelectChangeEvent,
} from "@mui/material";

function GenderInput() {
  const [geschlecht, setGeschlecht] = useState("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setGeschlecht(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="geschlecht-label"></InputLabel>
        <Select
          labelId="geschlecht-label"
          id="geschlecht-select"
          value={geschlecht}
          label="Geschlecht"
          onChange={handleChange}
        >
          <MenuItem value="">Bitte wählen</MenuItem>
          <MenuItem value="männlich">Männlich</MenuItem>
          <MenuItem value="weiblich">Weiblich</MenuItem>
          <MenuItem value="divers">Divers</MenuItem>
          <MenuItem value="nicht-angeben">Möchte ich nicht angeben</MenuItem>
        </Select>
      </FormControl>
      {/* {geschlecht && <p>Ausgewählt:  {geschlecht}</p>} */}
    </Box>
  );
}

export default GenderInput;
