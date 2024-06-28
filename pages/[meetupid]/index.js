import React from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";

const index = () => {
  return (
    <div>
      <MeetupDetails image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg' title='A random Meetup' address='Some address 5, 12345 Some City' description='This is a random meetup'></MeetupDetails>
    </div>
  );
};

export default index;
