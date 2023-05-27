import { LocalizationProvider } from '@mui/x-date-pickers';
import { Controller } from 'react-hook-form';
import moment from 'moment';
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
const DatePick = ({ AdapterMoment, control, isSendingData }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Controller
        name='date'
        control={control}
        render={({
          field: { onChange, value },
          fieldState: { error, invalid },
        }) => (
          <DatePicker
            label='Pilih Tanggalnya Dong'
            minDate={moment(new Date(2022, 9, 1))}
            maxDate={moment(new Date())}
            onChange={(value) => onChange(moment(value).format('DD-MM-YYYY'))}
            disabled={isSendingData}
            renderInput={(params) => (
              <TextField
                error={invalid}
                helperText={invalid ? error.message : null}
                id='pilih tanggal'
                variant='standard'
                margin='dense'
                fullWidth
                color='primary'
                autoComplete='bday'
                {...params}
              />
            )}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePick;
