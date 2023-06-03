import React from "react";
import Card from "../Card/Card";
import classes from "./Modal.module.css";

function Modal(props) {
  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2 className={classes.title}>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <button className={classes["action-button"]} onClick={props.onConfirm}>
            Proceed
          </button>
        </footer>
      </Card>
    </React.Fragment>
  );
}

export default Modal;
