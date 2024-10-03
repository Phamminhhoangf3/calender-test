import newJob from "../../assets/new-job.svg";
import addTimeOff from "../../assets/add-time-off.svg";
import addCustomerEvent from "../../assets/add-customer-event.svg";

import styles from "./tooltipJob.module.css";

const data = [
  {
    image: newJob,
    alt: "new-job-icon",
    text: "New Job",
  },
  {
    image: addTimeOff,
    alt: "add-time-off",
    text: "Add Time Off",
  },
  {
    image: addCustomerEvent,
    alt: "add-customer-event",
    text: "Add Custom Event",
  },
];

export default function TooltipJob({ positionParent, visible }) {
  return (
    visible && (
      <div
        className={styles.menu}
        style={{
          position: "absolute",
          top: positionParent.y,
          left: positionParent.x,
        }}
      >
        {data.map(({ image, alt, text }) => (
          <div className={styles.menuItem}>
            <img src={image} alt={alt} />
            <span>{text}</span>
          </div>
        ))}
      </div>
    )
  );
}
