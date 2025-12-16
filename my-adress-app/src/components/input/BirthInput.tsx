import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function BirthInput() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker format="DD.MM.YYYY" />
    </LocalizationProvider>
  );
}

export default BirthInput;
