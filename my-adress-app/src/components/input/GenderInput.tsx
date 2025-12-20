import { useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  type SelectChangeEvent,
} from "@mui/material";

type GenderInputProps = {
  className?: string;
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
};

function GenderInput({ className, value, onChange }: GenderInputProps) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth className={className}>
        <InputLabel id="geschlecht-label"></InputLabel>
        <Select
          labelId="geschlecht-label"
          id="geschlecht-select"
          value={value}
          label="Geschlecht"
          onChange={onChange}
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
