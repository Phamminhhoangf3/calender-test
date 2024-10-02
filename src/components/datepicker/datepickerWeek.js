import { useContext } from "react";
import DatePicker from "react-datepicker";
import { formatDate } from "../../utils";
import { DateContext } from "../../DateContext";
import CustomInputToButton from "./customInputToButton";

import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerCustom.css";

export default function DatePickerWeek({ calendarRef }) {
  const { currentDate, updateDate } = useContext(DateContext);

  function handleChange(value) {
    if (!value) return;
    updateDate(value);
    const calendarApi = calendarRef.current.getApi();
    calendarApi.gotoDate(formatDate(value));
  }
  
  return (
    <DatePicker
      selected={currentDate}
      onChange={handleChange}
      dateFormat="I/R"
      locale="en-GB"
      customInput={<CustomInputToButton />}
    />
  );
}
