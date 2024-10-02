import DatePickerDay from "../datepicker/datepickerDay.js";
import DatePickerWeek from "../datepicker/datepickerWeek.js";
import DatePickerMonth from "../datepicker/datepickerMonth.js";

import "react-datepicker/dist/react-datepicker.css";
import "../datepicker/DatePickerCustom.css";
import ButtonToday from "../button-today/index.js";

export default function MenuRight({ calendarRef, mode }) {
  const listDatepicker = {
    timeGridDay: <DatePickerDay calendarRef={calendarRef} />,
    timeGridWeek: <DatePickerWeek calendarRef={calendarRef} />,
    dayGridMonth: <DatePickerMonth calendarRef={calendarRef} />,
  };

  return (
    <div>
      <ButtonToday calendarRef={calendarRef} />
      {listDatepicker?.[mode]}
    </div>
  );
}
