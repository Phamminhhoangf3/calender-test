import DatePickerDay from "./datepickerDay.js";
import DatePickerWeek from "./datepickerWeek.js";
import DatePickerMonth from "./datepickerMonth.js";

import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerCustom.css";

export default function DatePickerComponent({ calendarRef, mode }) {
  const listDatepicker = {
    timeGridDay: <DatePickerDay calendarRef={calendarRef} />,
    timeGridWeek: <DatePickerWeek calendarRef={calendarRef} />,
    dayGridMonth: <DatePickerMonth calendarRef={calendarRef} />,
  };
  
  return <div>{listDatepicker?.[mode]}</div>;
}