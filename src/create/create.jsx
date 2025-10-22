import React from 'react';
import './create.css';

import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export function Create() {
    const navigate = useNavigate();

    let eventID = localStorage.getItem('eventID');
    let eventName = '';
    let eventDate = '';
    let eventTime = '';
    let calendarTime = '';
    let eventDay = '';
    let eventDetails = '';
    let eventCalendar = '';

    function getDateTimeDay(e) {
        const value = e.target.value;
        
        if (value) {
            const dateOBJ = new Date(value);

            eventDate = dateOBJ.toLocaleDateString();
            eventTime = dateOBJ.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const hour = eventTime.split(':')[0];
            const period = eventTime.split(' ')[1];
            calendarTime = hour + ':00 ' + period;
            eventDay = dateOBJ.toLocaleDateString('en-US', { weekday: 'long' });
        }
    } 

    async function createEvent() {
        localStorage.getItem(calendarTime);
        
    }

    return (
        <main className="container-fluid bg-secondary text-center">
            <h1>Create An Event</h1>
            <div>
            {/* <form method="get" action="calendars"> */}
                <div className="input-group mb-3">
                    <span className="input-group-text">Event Name: </span>
                    <input className="form-control" type="text" onChange={(e) => eventName = e} placeholder="Name" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Event Date and Time: </span>
                    <input className="form-control" type="datetime-local" onChange={(e) => getDateTimeDay(e)} name="varDatetime" id="datetime" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Event Details: </span>
                    <textarea className="form-control" id="textarea" onChange={(e) => eventDetails = e} name="varTextarea"></textarea>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Event Calendar: </span>
                    <select className="form-control" id="select" onChange={(e) => eventCalendar = e} name="varSelect">
                        <option>Animation</option>
                        <option>CS260</option>
                        <option>LISRites</option>
                    </select>
                </div>
                <Button variant='primary' onClick={() => createEvent()}>Create</Button>
            </div>
            {/* </form> */}
        </main>
  );
}