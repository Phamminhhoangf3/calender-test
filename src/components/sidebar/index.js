import { useEffect } from "react";
import styles from "./sidebar.module.css";
import { Draggable } from "@fullcalendar/interaction/index.js";

export default function SideBar({
  handleAddEvent,
  externalEvents,
  externalEventsRef,
}) {
  useEffect(() => {
    let draggable = new Draggable(externalEventsRef.current, {
      itemSelector: "#fc-event",
      eventData: function (eventEl) {
        const {
          dataset: { id, color },
        } = eventEl;
        return {
          id,
          color,
          title: eventEl.getAttribute("title"),
          create: true,
        };
      },
    });
    return () => draggable.destroy();
  });

  return (
    <>
      <button onClick={handleAddEvent}>add event</button>
      <div className={styles.externalEvent} ref={externalEventsRef}>
        {externalEvents.map(({ title, id, color }) => (
          <div
            key={id}
            id="fc-event"
            className={styles.externalEventItem}
            title={title}
            data-id={id}
            data-color={color}
            style={{
              backgroundColor: color,
              borderColor: color,
            }}
          >
            {title}
          </div>
        ))}
      </div>
    </>
  );
}
