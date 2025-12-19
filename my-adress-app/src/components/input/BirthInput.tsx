import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import type { Dayjs } from "dayjs";

type BirthInputProps = {
  className?: string;
  value?: Dayjs | null;
  onChange?: (value: Dayjs | null) => void;
};

function BirthInput({ className, value, onChange }: BirthInputProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        onChange={onChange}
        format="DD.MM.YYYY"
        slotProps={{ textField: { className: className } }}
      />
    </LocalizationProvider>
  );
}

export default BirthInput;
