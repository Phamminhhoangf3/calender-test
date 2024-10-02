import DatePickerDay from "../datepicker/datepickerDay.js";
import DatePickerWeek from "../datepicker/datepickerWeek.js";
import DatePickerMonth from "../datepicker/datepickerMonth.js";
import ButtonToday from "../button/today.js";

import "react-datepicker/dist/react-datepicker.css";
import "../datepicker/DatePickerCustom.css";
import ButtonNext from "../button/next.js";
import ButtonPrev from "../button/prev.js";

export default function MenuRight({ calendarRef, mode }) {
  const listDatepicker = {
    timeGridDay: <DatePickerDay calendarRef={calendarRef} />,
    timeGridWeek: <DatePickerWeek calendarRef={calendarRef} />,
    dayGridMonth: <DatePickerMonth calendarRef={calendarRef} />,
  };

  return (
    <div>
      <ButtonPrev calendarRef={calendarRef} mode={mode}/>
      <ButtonToday calendarRef={calendarRef} />
      {listDatepicker?.[mode]}
      <ButtonNext calendarRef={calendarRef} mode={mode} />
    </div>
  );
}
