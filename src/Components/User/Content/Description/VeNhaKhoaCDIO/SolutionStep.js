import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

function SolutionStep(props) {
  return (
    <div className="cdio-text-step">
      <p className="cdio-text-sTitle">
        <span>
          <FontAwesomeIcon className="fa-icon" icon={faCircleChevronDown} />{" "}
          {props.title}
        </span>
      </p>
      <p className="cdio-text-description">{props.description}</p>
    </div>
  );
}

export default SolutionStep;
