import { forwardRef, useState } from "react";
import {
  subWeeks,
  subMonths,
  subYears,
  addWeeks,
  addMonths,
  addYears,
} from "date-fns";
import DatePicker from "react-datepicker";
import { convertDateToWeekLabel, formatDate } from "../../utils";
import { dateEnum, longDateEnum } from "../../enum/index.js";
import DropdownComponent from "../dropdown/index.js";
import iconPrev from "../../assets/icon-prev.svg";
import iconNext from "../../assets/icon-next.svg";

import styles from "./menuRight.module.css";

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
  const [reRender, setReRender] = useState(false);
  const today = new Date();
  const currentDate = calendarRef.current?.getApi()?.getDate() || today;

  function handleClickToday() {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.today();

    setReRender(!reRender);
  }

  function handleChangeDatepicker(value) {
    if (!value) return;
    const calendarApi = calendarRef.current.getApi();
    calendarApi.gotoDate(formatDate(value));

    setReRender(!reRender);
  }

  function handleChangeDropdownPrev(e) {
    const key = e.target.value;
    const prevDate = dropdownPrev?.[key](currentDate);
    const calendarApi = calendarRef.current.getApi();
    calendarApi.gotoDate(prevDate);

    setReRender(!reRender);
  }

  function handleChangeDropdownNext(e) {
    const key = e.target.value;
    const nextDate = dropdownNext?.[key](currentDate);
    const calendarApi = calendarRef.current.getApi();
    calendarApi.gotoDate(nextDate);

    setReRender(!reRender);
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
    const calendarApi = calendarRef.current.getApi();
    calendarApi.prev();

    setReRender(!reRender);
  }

  function handleClickNext() {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.next();

    setReRender(!reRender);
  }

  const CustomInputToButton = forwardRef(({ value, onClick }, ref) => (
    <button className={styles.btnDatepicker} onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  const CustomInputToButtonWeek = forwardRef(({ value, onClick }, ref) => (
    <button className={styles.btnDatepicker} onClick={onClick} ref={ref}>
      {convertDateToWeekLabel(value)}
    </button>
  ));

  const propsDatepicker = {
    [dateEnum.day]: {
      dateFormat: "EEEE, MMM d, yyyy",
      customInput: <CustomInputToButton />,
    },
    [dateEnum.week]: {
      showWeekPicker: true,
      customInput: <CustomInputToButtonWeek />,
    },
    [dateEnum.month]: {
      dateFormat: "MMM yyyy",
      showMonthYearPicker: true,
      customInput: <CustomInputToButton />,
    },
  };

  return (
    <div className={styles.container}>
      <button onClick={handleClickPrev} className={styles.btnPrev}>
        <img src={iconPrev} alt="icon-prev" />
      </button>
      <div className={styles.btnDropdownPrev}>
        <DropdownComponent
          value=""
          handleChange={handleChangeDropdownPrev}
          options={handleMapOptionPropsDown(longDateEnum)}
        />
      </div>
      <button onClick={handleClickToday} className={styles.btnToday}>
        Today
      </button>
      <div>
        <DatePicker
          onChange={handleChangeDatepicker}
          selected={currentDate}
          {...propsDatepicker[mode]}
        />
      </div>
      <div className={styles.btnDropdownNext}>
        <DropdownComponent
          value=""
          handleChange={handleChangeDropdownNext}
          options={handleMapOptionPropsDown(longDateEnum)}
        />
      </div>
      <button onClick={handleClickNext} className={styles.btnNext}>
        <img src={iconNext} alt="icon-next" />
      </button>
    </div>
  );
}
