import React, { useRef, useState } from "react";
import MainCalendar from "./components/mainCalendar";

import styles from "./demoApp.module.css";
import { dateEnum } from "./enum";
import MenuLeft from "./components/menu-left";
import MenuRight from "./components/menu-right";

export default function DemoApp() {
  const calendarRef = useRef(null);
  const [valueDropdown, setValueDropdown] = useState(dateEnum.day);

  return (
    <div className={styles.demoApp}>
      <div className={styles.headerDemoApp}>
        <MenuLeft
          calendarRef={calendarRef}
          value={valueDropdown}
          setValue={setValueDropdown}
        />
        <MenuRight calendarRef={calendarRef} mode={valueDropdown} />
      </div>
      <div className={styles.bodyDemoApp}>
        <MainCalendar calendarRef={calendarRef} />
      </div>
    </div>
  );
}
