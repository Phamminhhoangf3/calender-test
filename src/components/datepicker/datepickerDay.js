import { forwardRef, useContext } from "react";
import DatePicker from "react-datepicker";
import { formatDate } from "../../utils";
import { DateContext } from "../../DateContext";

export default function DatePickerDay({ calendarRef }) {
  const { currentDate, updateDate } = useContext(DateContext);

  const ExampleCustomInput = forwardRef(
    ({ value, onClick, className }, ref) => (
      <button className={className} onClick={onClick} ref={ref}>
        {value}
      </button>
    )
  );

  function handleChange(value) {
    if (!value) return;
    updateDate(value);
    const calendarApi = calendarRef.current?.getApi();
    calendarApi?.gotoDate(formatDate(value));
  }

  return (
    <DatePicker
      selected={currentDate}
      onChange={handleChange}
      customInput={<ExampleCustomInput className="example-custom-input" />}
    />
  );
}
