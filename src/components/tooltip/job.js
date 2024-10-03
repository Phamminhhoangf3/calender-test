import { memo } from "react";
import newJob from "../../assets/new-job.svg";
import addTimeOff from "../../assets/add-time-off.svg";
import addCustomerEvent from "../../assets/add-customer-event.svg";

import styles from "./tooltipJob.module.css";

const data = [
  {
    key: 1,
    image: newJob,
    alt: "new-job-icon",
    text: "New Job",
  },
  {
    key: 2,
    image: addTimeOff,
    alt: "add-time-off",
    text: "Add Time Off",
  },
  {
    key: 3,
    image: addCustomerEvent,
    alt: "add-customer-event",
    text: "Add Custom Event",
  },
];

const TooltipJob = ({ positionParent, visible }) => {
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
        {data.map(({ key, image, alt, text }) => (
          <div key={key} className={styles.menuItem}>
            <img src={image} alt={alt} />
            <span>{text}</span>
          </div>
        ))}
      </div>
    )
  );
};

export default memo(TooltipJob);
