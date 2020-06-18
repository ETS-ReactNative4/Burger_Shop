import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  {
    label: "Salad",
    type: "salad",
  },
  {
    label: "Bacon",
    type: "bacon",
  },
  {
    label: "Cheese",
    type: "cheese",
  },
  {
    label: "Meat",
    type: "meat",
  },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      <em>Current Price:</em> <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((el) => (
      <BuildControl
        disabled={props.disabled[el.type]}
        key={el.label}
        label={el.label}
        added={() => props.ingredientAdded(el.type)}
        removed={() => props.ingredientRemoved(el.type)}
      />
    ))}
    <button
      disabled={props.price === 4}
      className={classes.OrderButton}
      onClick={() => props.ordered()}
    >
      ORDER NOW
    </button>
  </div>
);
export default buildControls;
