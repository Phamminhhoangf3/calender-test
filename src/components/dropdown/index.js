import { useState } from "react";

export default function DropdownComponent({ calendarRef }) {
  const [value, setValue] = useState("timeGridDay");

  function handleChange(event) {
    const selectedView = event.target.value;
    setValue(selectedView);
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView(selectedView);
  }

  return (
    <select onChange={handleChange} value={value}>
      <option value="timeGridDay">Day</option>
      <option value="timeGridWeek">Week</option>
      <option value="dayGridMonth">Month</option>
    </select>
  );
}
