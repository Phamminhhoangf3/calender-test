import React, { useRef, useState } from "react";
import MenuLeft, { optionDropdown } from "./components/menu-left";
import MenuRight from "./components/menu-right";
import Calendar from "./components/calendar";

import "./demoApp.css";

export default function DemoApp() {
  const calendarRef = useRef(null);
  const [valueDropdown, setValueDropdown] = useState(optionDropdown.day);

  return (
    <div className="demo-app">
      <div className="header-calendar">
        <MenuLeft
          calendarRef={calendarRef}
          value={valueDropdown}
          setValue={setValueDropdown}
        />
        <MenuRight calendarRef={calendarRef} mode={valueDropdown} />
      </div>
      <Calendar calendarRef={calendarRef} />
    </div>
  );
}
