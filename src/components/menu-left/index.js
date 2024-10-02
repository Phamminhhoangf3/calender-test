import DatePickerDay from "../datepicker/datepickerDay.js";
import DatePickerWeek from "../datepicker/datepickerWeek.js";
import DatePickerMonth from "../datepicker/datepickerMonth.js";

import "react-datepicker/dist/react-datepicker.css";
import "../datepicker/DatePickerCustom.css";

export default function MenuLeft({ calendarRef, mode }) {
  const listDatepicker = {
    timeGridDay: <DatePickerDay calendarRef={calendarRef} />,
    timeGridWeek: <DatePickerWeek calendarRef={calendarRef} />,
    dayGridMonth: <DatePickerMonth calendarRef={calendarRef} />,
  };

  return <div>{listDatepicker?.[mode]}</div>;
}
