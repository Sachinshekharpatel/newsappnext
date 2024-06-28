'use client'
import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
const index = () => {
    function addMeetupHandler(meetupData){
        console.log(meetupData)
    }
  return (
    <div>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} ></NewMeetupForm>
    </div>
  )
}

export default index
