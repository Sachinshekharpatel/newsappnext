"use client";
import React, { Fragment } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { withRouter, useRouter } from "next/router";

function MeetupItem(props) {

  // const router = withRouter();
  const showDetailsHandler = () => {
    console.log(props.id);
    router.push("/" + props.id);
  };

  return (
    <Fragment>
      <li className={classes.item}>
        <Card>
          <div className={classes.image}>
            <img src={props.image} alt={props.title} />
          </div>
          <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
          </div>
          <div className={classes.actions}>
            <button onClick={showDetailsHandler}>Show Details</button>
          </div>
        </Card>
      </li>
    </Fragment>
  );
}

export default MeetupItem;
