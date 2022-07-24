import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IconButton, ListItemIcon } from '@mui/material';
import { CalendarPickerView, DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Event as CalendarIcon } from '@mui/icons-material';
import plLocale from 'date-fns/locale/pl';
import { handleStopPropagation, stopPropagation } from 'utils/windowUtils';
import { CategoryOption } from 'types';

interface DateMenuItemContentProps {
  option: CategoryOption;
  baseRoute: string;
  handleClose: () => void;
}

const CategoryDatePicker = ({ option, baseRoute, handleClose }: DateMenuItemContentProps) => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSetDateParams = (newDate: Date | null, route: string, pick: CalendarPickerView[]) => {
    handleClose();
    navigate(
      `${route}${pick
        .map((calendar) => {
          if (calendar === 'year') return `/${newDate?.getFullYear()}`;
          if (calendar === 'month') return `/${newDate?.getMonth()}`;
          if (calendar === 'day') return `/${newDate?.getDate()}`;
          return '';
        })
        .reverse()
        .join('')}`
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={plLocale}>
      <DatePicker
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        views={option.datePick}
        minDate={new Date('2005-12-01')}
        maxDate={new Date()}
        value={date}
        onAccept={(newDate) =>
          handleSetDateParams(newDate, `${baseRoute}/${option.path}`, option.datePick!)
        }
        onChange={setDate}
        PaperProps={{
          onClick: handleStopPropagation,
          onMouseDown: handleStopPropagation,
        }}
        DialogProps={{
          onClick: handleStopPropagation,
          onMouseDown: handleStopPropagation,
        }}
        renderInput={({ inputRef }) => (
          <IconButton
            component={ListItemIcon}
            onMouseDown={handleStopPropagation}
            onClick={stopPropagation((e) => {
              e.preventDefault();
              setOpen((prev) => !prev);
            })}
            ref={inputRef}
            centerRipple
            style={{ marginLeft: 5 }}
          >
            <CalendarIcon />
          </IconButton>
        )}
      />
    </LocalizationProvider>
  );
};

export default CategoryDatePicker;