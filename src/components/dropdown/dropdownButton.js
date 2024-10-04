import Select, { components } from "react-select";

export default function DropdownButton({
  handleChange,
  options,
  value,
  children,
}) {
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <button
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          {children}
        </button>
      </components.DropdownIndicator>
    );
  };
  return (
    <Select
      options={options}
      onChange={handleChange}
      value={value}
      components={{
        DropdownIndicator,
        IndicatorSeparator: false,
        ValueContainer: () => null,
      }}
      isSearchable={false}
    />
  );
}
