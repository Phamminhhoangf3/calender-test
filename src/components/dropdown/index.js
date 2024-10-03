export default function DropdownComponent({ options, handleChange, value }) {
  if (!options?.length) return null;
  return (
    <select value={value} onChange={handleChange}>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
