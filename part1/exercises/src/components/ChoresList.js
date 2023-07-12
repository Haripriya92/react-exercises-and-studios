import React from "react";
import classes from "./ChoresList.module.css";
export default function ChoresList() {
  return (
    <div>
      <h2 className={classes.choresHeading}>Chores List</h2>
      <ol className={classes.choresText}>
        <li>chorest list 1</li>
        <li>chores list 2</li>
      </ol>
    </div>
  );
}
