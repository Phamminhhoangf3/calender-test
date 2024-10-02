import { useState } from "react";
import DatePicker from "react-datepicker";
import { formatDate } from "../../utils";

export default function DatePickerMonth({ calendarRef }) {
  const [startDate, setStartDate] = useState(new Date());

  function handleChange(value) {
    setStartDate(value);
    const calendarApi = calendarRef.current.getApi();
    calendarApi.gotoDate(formatDate(value));
  }

  return (
    <DatePicker
      selected={startDate}
      onChange={handleChange}
      dateFormat="MM/yyyy"
      showMonthYearPicker
    />
  );
}
