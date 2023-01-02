import React from "react";

import classes from "./Square.module.css";

const Square = (props) => {
  return (
    <div className={classes.square} onClick={props.onClick}>
      <h5 className={classes.text} >{props.value}</h5>
    </div>
  );
};
export default Square;
