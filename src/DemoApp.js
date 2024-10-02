import React, { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS } from "./utils";
import MenuLeft, { optionDropdown } from "./components/menu-left";
import MenuRight from "./components/menu-right";
import TooltipJob from "./components/tooltip/job";

import "./demoApp.css";

export default function DemoApp() {
  const calendarRef = useRef(null);
  const [valueDropdown, setValueDropdown] = useState(optionDropdown.day);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  function handleEventClick(clickInfo) {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  }

  function handleDateSelect(info) {
    const targetRect = info.jsEvent.target.getBoundingClientRect();

    setTooltipPosition({
      x: targetRect.left - 82 + targetRect.width / 2,
      y: targetRect.top - 130,
    });
    setTooltipVisible(true);
  }

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
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={false}
        initialView={optionDropdown.day}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        initialEvents={INITIAL_EVENTS}
        select={handleDateSelect}
        unselect={() => setTooltipVisible(false)}
        eventContent={() => <></>}
        eventClick={handleEventClick}
      />
      <TooltipJob positionParent={tooltipPosition} visible={tooltipVisible} />
    </div>
  );
}
