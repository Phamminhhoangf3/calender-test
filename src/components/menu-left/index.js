import { dateEnum } from "../../enum";
import Select from "react-select";

export const optionsDropdown = [
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

const stylesDropdown = {
  control: () => ({
    borderRadius: "4px",
    display: "flex",
    border: "1px solid rgba(0,0,0,.3)",
    outlineColor: "none",
    cursor: "pointer",
    height: 32,
    minWidth: 110,
  }),
  option: (provided, state) => {
    return {
      ...provided,
      backgroundColor:
        state.isSelected || state.isFocused ? "#fff5d9" : "white",
      color: "black",
      ":hover": {
        ...provided[":hover"],
        backgroundColor: "#fff9e6",
      },
      ":active": null,
    };
  },
};

export default function MenuLeft({
  calendarRef,
  setOptionDropdown,
  optionDropdown,
}) {
  function handleChangeDropdown(option) {
    setOptionDropdown(option);
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView(option.value);
  }

  return (
    <Select
      options={optionsDropdown}
      onChange={handleChangeDropdown}
      value={optionDropdown}
      components={{ IndicatorSeparator: null }}
      styles={stylesDropdown}
      isSearchable={false}
    />
  );
}
