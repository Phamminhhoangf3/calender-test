export const optionDropdown = {
  day: "timeGridDay",
  week: "timeGridWeek",
  month: "dayGridMonth",
};

export default function MenuLeft({ calendarRef, setValue, value }) {
  function handleChange(event) {
    const selectedView = event.target.value;
    setValue(selectedView);
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView(selectedView);
  }

  return (
    <select onChange={handleChange} value={value}>
      <option value={optionDropdown.day}>Day</option>
      <option value={optionDropdown.week}>Week</option>
      <option value={optionDropdown.month}>Month</option>
    </select>
  );
}
