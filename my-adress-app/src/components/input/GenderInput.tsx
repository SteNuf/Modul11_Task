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
          sx={{
            "& .MuiSelect-select": {
              backgroundColor: "rgb(196, 185, 185)",
              borderRadius: "10px",
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: "rgb(196, 185, 185)",
              },
            },
          }}
        >
          <MenuItem value="">Bitte waehlen</MenuItem>
          <MenuItem value="maennlich">Maennlich</MenuItem>
          <MenuItem value="weiblich">Weiblich</MenuItem>
          <MenuItem value="divers">Divers</MenuItem>
          <MenuItem value="nicht-angeben">Moechte ich nicht angeben</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default GenderInput;
