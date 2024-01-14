import * as React from 'react';
import dayjs from 'dayjs';
import { Stack, Button } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function DateTimePickerComponent() {
  const [value, setValue] = React.useState(dayjs());

  const handleNowClick = () => {
    setValue(dayjs());
  };

  return (
    <Stack direction="row" spacing={2} sx={{ width: '370px', marginLeft: "15px", alignItems: "baseline" }}>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateTimePicker']}>
          <DateTimePicker
            value={value}
          />
        </DemoContainer>
      </LocalizationProvider>


      <Button
        size="small"
        sx={{
          ":hover":{
            backgroundColor:"#212B36"
          },
          height: 35,
          backgroundColor: "#212B36",
          borderRadius: "10px",
          // fontWeight: "bold",
          textTransform: "uppercase",
        }}
        disableFocusRipple
        disableRipple
        variant="contained"
        onClick={handleNowClick}
      >
        Now
      </Button>


    </Stack>

  );
}
