import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import TooltipJob from "../tooltip/job";
import { optionDropdown } from "../menu-left";

const halfWidthTooltip = 82;
const halfHeightTooltip = 130;

export default function Calendar({ calendarRef }) {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  function handleDateSelect(info) {
    const targetRect = info.jsEvent.target.getBoundingClientRect();

    setTooltipPosition({
      x: targetRect.left - halfWidthTooltip + targetRect.width / 2,
      y: targetRect.top - halfHeightTooltip,
    });
    setTooltipVisible(true);
  }

  return (
    <>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={false}
        initialView={optionDropdown.day}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        select={handleDateSelect}
        unselect={() => setTooltipVisible(false)}
        eventContent={() => <></>}
      />
      <TooltipJob positionParent={tooltipPosition} visible={tooltipVisible} />
    </>
  );
}
