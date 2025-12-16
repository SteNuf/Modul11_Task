import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function BirthInput({ className }: { className?: string }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        format="DD.MM.YYYY"
        slotProps={{ textField: { className: className } }}
      />
    </LocalizationProvider>
  );
}

export default BirthInput;
