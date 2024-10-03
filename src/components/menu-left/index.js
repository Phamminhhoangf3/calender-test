import { dateEnum } from "../../enum";
import DropdownComponent from "../dropdown";

const optionDropdown = [
  {
    label: "day",
    value: dateEnum.day,
  },
  {
    label: "week",
    value: dateEnum.week,
  },
  {
    label: "month",
    value: dateEnum.month,
  },
];

export default function MenuLeft({ calendarRef, setValue, value }) {
  function handleChangeDropdown(event) {
    const selectedView = event.target.value;
    setValue(selectedView);
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView(selectedView);
  }

  return (
    <DropdownComponent
      handleChange={handleChangeDropdown}
      options={optionDropdown}
      value={value}
    />
  );
}
