import React, { useRef, useState } from "react";
import MainCalendar from "./components/mainCalendar";
import MenuLeft, { optionsDropdown } from "./components/menu-left";
import MenuRight from "./components/menu-right";

import styles from "./demoApp.module.css";

export default function DemoApp() {
  const calendarRef = useRef(null);
  const [optionDropdown, setOptionDropdown] = useState(optionsDropdown[0]);

  return (
    <div className={styles.demoApp}>
      <div className={styles.headerDemoApp}>
        <MenuLeft
          calendarRef={calendarRef}
          optionDropdown={optionDropdown}
          setOptionDropdown={setOptionDropdown}
        />
        <MenuRight calendarRef={calendarRef} mode={optionDropdown.value} />
      </div>
      <div className={styles.bodyDemoApp}>
        <MainCalendar calendarRef={calendarRef} />
      </div>
    </div>
  );
}
