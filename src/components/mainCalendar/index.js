import React, { memo, useCallback, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SideBar from "../sidebar";
import { generateRandomColor, getLastCharacter } from "../../utils";
import Calendar from "../calendar";

import styles from "./mainCalendar.module.css";

const halfWidthTooltip = 82;
const halfHeightTooltip = 130;

const MainCalendar = ({ calendarRef }) => {
  const externalEventsRef = useRef(null);
  const idFisrtEvent = uuidv4();
  const [externalEventsState, setExternalEventsState] = useState([
    {
      id: idFisrtEvent,
      title: `event ${getLastCharacter(idFisrtEvent, 2)}`,
      color: generateRandomColor(),
    },
  ]);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  function handleSelectDate(info) {
    const targetRect = info.jsEvent.target.getBoundingClientRect();

    setTooltipPosition({
      x: targetRect.left - halfWidthTooltip + targetRect.width / 2,
      y: targetRect.top - halfHeightTooltip,
    });
    setTooltipVisible(true);
  }

  function handleUnselectDate() {
    setTooltipVisible(false);
  }

  function handleEventReceive(info) {
    const idEventReceive = info.draggedEl.getAttribute("data-id");
    const externalEventsNew = externalEventsState.filter(
      (item) => item?.id !== idEventReceive
    );
    setExternalEventsState(externalEventsNew);
  }

  const handleAddEvent = useCallback(() => {
    const idExternalEventNew = uuidv4();
    const externalEventNew = {
      id: idExternalEventNew,
      title: `event ${getLastCharacter(idExternalEventNew, 2)}`,
      color: generateRandomColor(),
    };
    setExternalEventsState((prev) => [...prev, externalEventNew]);
  }, []);

  return (
    <>
      <div className={styles.sidebar}>
        <SideBar
          externalEvents={externalEventsState}
          handleAddEvent={handleAddEvent}
          externalEventsRef={externalEventsRef}
        />
      </div>
      <div className={styles.container}>
        <Calendar
          calendarRef={calendarRef}
          handleEventReceive={handleEventReceive}
          handleSelect={handleSelectDate}
          handleUnselect={handleUnselectDate}
          tooltipPosition={tooltipPosition}
          tooltipVisible={tooltipVisible}
        />
      </div>
    </>
  );
};

export default memo(MainCalendar);
