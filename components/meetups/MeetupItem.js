import React, { Fragment } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { withRouter, useRouter } from "next/router";
import Image from "next/image";

function MeetupItem(props) {
  const router = useRouter();
  const showDetailsHandler = () => {
    console.log(props.id);
    router.push("/" + props.id);
  };

  return (
    <Fragment>
      <li className={classes.item}>
        <Card>
          <div className={classes.image}>
            <img
              // Controls how the image is resized and cropped
              height="200" // Sets the height of the image
              width="200" // Sets the width of the image
              src={props.image} // Specifies the image source dynamically from props
              alt={props.title} // Provides alternative text for accessibility
            />
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
