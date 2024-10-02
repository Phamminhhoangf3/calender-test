import { useContext } from "react";
import { DateContext } from "../../DateContext";

const nextTime = {
  timeGridDay: (value) => new Date(value?.getTime() + 24 * 60 * 60 * 1000),
  timeGridWeek: (value) =>
    new Date(value?.getTime() + 7 * 24 * 60 * 60 * 1000),
  dayGridMonth: (value) => {
    const nextMonth = new Date(value);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    return nextMonth;
  },
};

export default function ButtonNext({ calendarRef, mode }) {
  const { currentDate, updateDate } = useContext(DateContext);

  function handleChange() {
    const nextDate = new Date(nextTime?.[mode](currentDate));
    updateDate(nextDate);
    
    const calendarApi = calendarRef.current.getApi();
    calendarApi.next();
  }

  return <button onClick={handleChange}>{">"}</button>;
}
