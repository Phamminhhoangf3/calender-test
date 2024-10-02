import { useContext } from "react";
import { DateContext } from "../../DateContext";
import { optionsDateDropdown } from "../../utils";

const dateTimePrev = {
  "1 week": (value) => new Date(value?.getTime() - 1 * 7 * 24 * 60 * 60 * 1000),
  "2 week": (value) => new Date(value?.getTime() - 2 * 7 * 24 * 60 * 60 * 1000),
  "3 week": (value) => new Date(value?.getTime() - 3 * 7 * 24 * 60 * 60 * 1000),
  "4 week": (value) => new Date(value?.getTime() - 4 * 7 * 24 * 60 * 60 * 1000),
  "5 week": (value) => new Date(value?.getTime() - 5 * 7 * 24 * 60 * 60 * 1000),
  "6 week": (value) => new Date(value?.getTime() - 6 * 7 * 24 * 60 * 60 * 1000),
  "7 week": (value) => new Date(value?.getTime() - 7 * 7 * 24 * 60 * 60 * 1000),
  "3 month": (value) => new Date(new Date().setMonth(value.getMonth() - 3)),
  "6 month": (value) => new Date(new Date().setMonth(value.getMonth() - 6)),
  "1 year": (value) =>
    new Date(new Date().setFullYear(value.getFullYear() - 1)),
};

export default function DropdownPrev({ calendarRef }) {
  const { currentDate, updateDate } = useContext(DateContext);

  function handleChange(e) {
    const key = e.target.value;
    const prevDate = dateTimePrev?.[key](currentDate);
    updateDate(prevDate);
    const calendarApi = calendarRef.current.getApi();
    calendarApi.gotoDate(prevDate);
  }

  return (
    <select value={""} onChange={handleChange}>
      {optionsDateDropdown.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
