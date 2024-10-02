import newJob from "../../assets/new-job.svg";
import addTimeOff from "../../assets/add-time-off.svg";
import addCustomerEvent from "../../assets/add-customer-event.svg";

import "./tooltipJob.css";

export default function TooltipJob({ positionParent, visible }) {
  return (
    visible && (
      <div
        className="wrap-addjob-menu"
        style={{
          position: "absolute",
          top: positionParent.y,
          left: positionParent.x,
        }}
      >
        <div className="wrap-addjob-menu__items">
          <img src={newJob} alt="new-job-icon" />
          <span className="txt-ellipsis">New Job</span>
        </div>
        <div className="wrap-addjob-menu__items">
          <img src={addTimeOff} alt="add-time-off" />
          <span className="txt-ellipsis">Add Time Off</span>
        </div>
        <div className="wrap-addjob-menu__items">
          <img src={addCustomerEvent} alt="new-job-icon" />
          <span className="txt-ellipsis">Add Custom Event</span>
        </div>
      </div>
    )
  );
}
