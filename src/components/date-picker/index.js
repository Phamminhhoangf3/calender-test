import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerCustom.css";

const formatDate = (value) => {
  if (!value) return "";
  const date = new Date(value);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}/${month}/${day}`;
};

export default function DatePickerComponent({ calendarRef }) {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  function handleChange(values) {
    setDateRange(values);
    const calendarApi = calendarRef.current.getApi();
    if (values.every((value) => !!value)) {
      calendarApi.changeView("timeGrid", {
        start: formatDate(values[0]),
        end: formatDate(values[1]),
      });
    }
  }

  return (
    <div>
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={handleChange}
        isClearable={true}
      />
    </div>
  );
}
