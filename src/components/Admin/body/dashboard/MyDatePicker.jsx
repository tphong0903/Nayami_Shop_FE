import { Box, Typography } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function MyDatePicker({ dateRange, setDateRange }) {
  const handleDateChange = (newDate, index) => {
    const updatedDateRange = [...dateRange];
    updatedDateRange[index] = newDate;
    setDateRange(updatedDateRange);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box display="flex" alignItems="center" gap={1}>
        <DatePicker
          value={dateRange[0]}
          onChange={(newValue) => handleDateChange(newValue, 0)}
          slotProps={{ textField: { size: 'small', label: 'Ngày bắt đầu', sx: { width: 150 } } }}
        />
        <Typography>-</Typography>
        <DatePicker
          value={dateRange[1]}
          onChange={(newValue) => handleDateChange(newValue, 1)}
          slotProps={{ textField: { size: 'small', label: 'Ngày kết thúc', sx: { width: 150 } } }}
        />
      </Box>
    </LocalizationProvider>
  );
}

export default MyDatePicker;
