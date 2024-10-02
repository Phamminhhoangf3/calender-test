import { useContext } from "react";
import { DateContext } from "../../DateContext";

export default function ButtonNext({ calendarRef, mode }) {
  const { currentDate, updateDate } = useContext(DateContext);

  const prevTime = {
    timeGridDay: () => new Date(currentDate?.getTime() + 24 * 60 * 60 * 1000),
    timeGridWeek: () =>
      new Date(currentDate?.getTime() + 7 * 24 * 60 * 60 * 1000),
    dayGridMonth: () => {
      const prevMonth = new Date(currentDate);
      prevMonth.setMonth(prevMonth.getMonth() + 1);
      return prevMonth;
    },
  };

  function handleChange() {
    const prevDate = new Date(prevTime?.[mode]());
    updateDate(prevDate);
    const calendarApi = calendarRef.current.getApi();
    calendarApi.prev();
  }

  return <button onClick={handleChange}>{">"}</button>;
}
