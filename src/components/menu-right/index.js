import { forwardRef, useState } from "react";
import {
  subWeeks,
  subMonths,
  subYears,
  addWeeks,
  addMonths,
  addYears,
} from "date-fns";
import { formatDate } from "../../utils";
import { dateEnum, longDateEnum } from "../../enum/index.js";
import DropdownComponent from "../dropdown/index.js";

import styles from "./menuRight.module.css";
import DatePicker from "react-datepicker";

const dropdownPrev = {
  [longDateEnum.week1]: (value) => subWeeks(value, 1),
  [longDateEnum.week2]: (value) => subWeeks(value, 2),
  [longDateEnum.week3]: (value) => subWeeks(value, 3),
  [longDateEnum.week4]: (value) => subWeeks(value, 4),
  [longDateEnum.week5]: (value) => subWeeks(value, 5),
  [longDateEnum.week6]: (value) => subWeeks(value, 6),
  [longDateEnum.week7]: (value) => subWeeks(value, 7),
  [longDateEnum.month3]: (value) => subMonths(value, 3),
  [longDateEnum.month6]: (value) => subMonths(value, 6),
  [longDateEnum.year1]: (value) => subYears(value, 1),
};

const dropdownNext = {
  [longDateEnum.week1]: (value) => addWeeks(value, 1),
  [longDateEnum.week2]: (value) => addWeeks(value, 2),
  [longDateEnum.week3]: (value) => addWeeks(value, 3),
  [longDateEnum.week4]: (value) => addWeeks(value, 4),
  [longDateEnum.week5]: (value) => addWeeks(value, 5),
  [longDateEnum.week6]: (value) => addWeeks(value, 6),
  [longDateEnum.week7]: (value) => addWeeks(value, 7),
  [longDateEnum.month3]: (value) => addMonths(value, 3),
  [longDateEnum.month6]: (value) => addMonths(value, 6),
  [longDateEnum.year1]: (value) => addYears(value, 1),
};

export default function MenuRight({ calendarRef, mode }) {
  const [rerender, setReRender] = useState(false);
  const currentDate = calendarRef.current?.getApi()?.getDate() || new Date();

  function handleClickToday() {
    setReRender(!rerender);
    const calendarApi = calendarRef.current.getApi();
    calendarApi.today();
  }

  function handleChangeDatepicker(value) {
    if (!value) return;
    setReRender(!rerender);

    const calendarApi = calendarRef.current.getApi();
    calendarApi.gotoDate(formatDate(value));
  }

  function handleChangeDropdownPrev(e) {
    const key = e.target.value;
    const prevDate = dropdownPrev?.[key](currentDate);
    setReRender(!rerender);

    const calendarApi = calendarRef.current.getApi();
    calendarApi.gotoDate(prevDate);
  }

  function handleChangeDropdownNext(e) {
    const key = e.target.value;
    const nextDate = dropdownNext?.[key](currentDate);
    setReRender(!rerender);

    const calendarApi = calendarRef.current.getApi();
    calendarApi.gotoDate(nextDate);
  }

  function handleMapOptionPropsDown(data) {
    return [
      {
        label: "",
        value: "",
      },
      ...Object.entries(data).map(([_, value]) => ({
        label: value,
        value,
      })),
    ];
  }

  function handleClickPrev() {
    setReRender(!rerender);

    const calendarApi = calendarRef.current.getApi();
    calendarApi.prev();
  }

  function handleClickNext() {
    setReRender(!rerender);

    const calendarApi = calendarRef.current.getApi();
    calendarApi.next();
  }

  const CustomInputToButton = forwardRef(
    ({ value, onClick, className }, ref) => (
      <button className={className} onClick={onClick} ref={ref}>
        {value}
      </button>
    )
  );

  const propsDatepicker = {
    onChange: handleChangeDatepicker,
    selected: currentDate,
    customInput: <CustomInputToButton />,
  };

  const listDatepicker = {
    [dateEnum.day]: <DatePicker {...propsDatepicker} />,
    [dateEnum.week]: (
      <DatePicker {...propsDatepicker} dateFormat="I/R" locale="en-GB" />
    ),
    [dateEnum.month]: (
      <DatePicker
        {...propsDatepicker}
        dateFormat="MM/yyyy"
        showMonthYearPicker
      />
    ),
  };

  return (
    <div className={styles.container}>
      <button onClick={handleClickPrev}>{"<"}</button>
      <DropdownComponent
        value=""
        handleChange={handleChangeDropdownPrev}
        options={handleMapOptionPropsDown(longDateEnum)}
      />
      <button onClick={handleClickToday}>Today</button>
      <div>{listDatepicker?.[mode]}</div>
      <DropdownComponent
        value=""
        handleChange={handleChangeDropdownNext}
        options={handleMapOptionPropsDown(longDateEnum)}
      />
      <button onClick={handleClickNext}>{">"}</button>
    </div>
  );
}
