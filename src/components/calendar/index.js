import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import TooltipJob from "../tooltip/job";
import { dateEnum } from "../../enum";

export default function Calendar({
  calendarRef,
  handleSelect,
  handleUnselect,
  handleEventReceive,
  tooltipPosition,
  tooltipVisible,
}) {
  return (
    <>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={false}
        initialView={dateEnum.day}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        droppable={true}
        select={handleSelect}
        unselect={handleUnselect}
        eventContent={renderEventContent}
        eventReceive={handleEventReceive}
        height="calc(100vh - 54px)"
      />
      <TooltipJob positionParent={tooltipPosition} visible={tooltipVisible} />
    </>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
