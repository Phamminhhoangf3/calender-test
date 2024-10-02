import DatePickerDay from "../datepicker/datepickerDay.js";
import DatePickerWeek from "../datepicker/datepickerWeek.js";
import DatePickerMonth from "../datepicker/datepickerMonth.js";
import ButtonToday from "../button/today.js";
import ButtonNext from "../button/next.js";
import ButtonPrev from "../button/prev.js";
import DropdownNext from "../dropdown/dropdownNext.js";
import DropdownPrev from "../dropdown/dropdownPrev.js";

export default function MenuRight({ calendarRef, mode }) {
  const listDatepicker = {
    timeGridDay: <DatePickerDay calendarRef={calendarRef} />,
    timeGridWeek: <DatePickerWeek calendarRef={calendarRef} />,
    dayGridMonth: <DatePickerMonth calendarRef={calendarRef} />,
  };

  return (
    <div className="menu-right">
      <ButtonPrev calendarRef={calendarRef} mode={mode} />
      <DropdownPrev calendarRef={calendarRef} />
      <ButtonToday calendarRef={calendarRef} />
      <div>{listDatepicker?.[mode]}</div>
      <DropdownNext calendarRef={calendarRef} />
      <ButtonNext calendarRef={calendarRef} mode={mode} />
    </div>
  );
}
