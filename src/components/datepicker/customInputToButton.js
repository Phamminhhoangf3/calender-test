import { forwardRef } from "react";

const CustomInputToButton = forwardRef(({ value, onClick, className }, ref) => (
  <button className={className} onClick={onClick} ref={ref}>
    {value}
  </button>
));

export default CustomInputToButton;
