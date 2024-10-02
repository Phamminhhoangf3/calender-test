import { useContext } from "react";
import DatePicker from "react-datepicker";
import { formatDate } from "../../utils";
import { DateContext } from "../../DateContext";
import CustomInputToButton from "./customInputToButton";

import "react-datepicker/dist/react-datepicker.css";
import './datePickerCustom.css'

export default function DatePickerMonth({ calendarRef }) {  
  const { currentDate, updateDate } = useContext(DateContext);

  function handleChange(value) {
    if (!value) return;
    updateDate(value)
    const calendarApi = calendarRef.current.getApi();
    calendarApi.gotoDate(formatDate(value));
  }

  return (
    <DatePicker
      selected={currentDate}
      onChange={handleChange}
      dateFormat="MM/yyyy"
      showMonthYearPicker
      customInput={<CustomInputToButton />}
    />
  );
}
