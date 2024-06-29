import React from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";
import { MongoClient,ObjectId } from "mongodb";

const index = (props) => {
  return (
    <div>
      <MeetupDetails
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      ></MeetupDetails>
    </div>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://ftshekhar:ftshekhar@cluster0.2texfgb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    paths: meetups.map((meetup) => ({
      params: { meetupid: meetup._id.toString() },
    })),
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const meetupid = context.params.meetupid;
  const client = await MongoClient.connect(
    "mongodb+srv://ftshekhar:ftshekhar@cluster0.2texfgb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupid),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default index;
