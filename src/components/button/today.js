import { useContext } from "react";
import { DateContext } from "../../DateContext";

export default function ButtonToday({ calendarRef }) {
  const { updateDate } = useContext(DateContext);

  function handleChange() {
    updateDate(new Date());
    const calendarApi = calendarRef.current.getApi();
    calendarApi.today();
  }
  
  return <button onClick={handleChange}>Today</button>;
}
