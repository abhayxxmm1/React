import React from 'react'
import EventTask1 from './Tasks/EventTask1'
import EventTask2 from './Tasks/EventTask2'
import EventTask3 from './Tasks/EventTask3'
import EventTask4 from './Tasks/EventTask4'

const EventHandleIntro = () => {
    return (
        <div>
            <h1>EventHandleIntro</h1>
            <EventTask1></EventTask1>
            <br />
            <h1>EventTask2</h1>
            <EventTask2></EventTask2>
            <br />
            <h1>EventTask3</h1>
            <EventTask3></EventTask3>
            <br />
            <h1>EventTask4</h1>
            <EventTask4></EventTask4>
        </div>
    )
}

export default EventHandleIntro