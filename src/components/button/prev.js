import { useContext } from "react";
import { DateContext } from "../../DateContext";

const prevTime = {
  timeGridDay: (value) => new Date(value?.getTime() - 24 * 60 * 60 * 1000),
  timeGridWeek: (value) => new Date(value?.getTime() - 7 * 24 * 60 * 60 * 1000),
  dayGridMonth: (value) => {
    const prevMonth = new Date(value);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    return prevMonth;
  },
};

export default function ButtonPrev({ calendarRef, mode }) {
  const { currentDate, updateDate } = useContext(DateContext);

  function handleChange() {
    const prevDate = new Date(prevTime?.[mode](currentDate));
    updateDate(prevDate);
    const calendarApi = calendarRef.current.getApi();
    calendarApi.prev();
  }

  return <button onClick={handleChange}>{"<"}</button>;
}
