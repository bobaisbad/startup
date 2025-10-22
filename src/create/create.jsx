import React from 'react';
import './create.css';

import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import { Calendars } from '../calendars/calendars';

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
            eventDay = dateOBJ.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
        }
    } 

    async function createEvent() {
        const eventsOBJ = localStorage.getItem('events');
        let events = JSON.parse(eventsOBJ);
        
        for (const [i, event] of events.entries()) {
            if (event.time === calendarTime) {
                switch (eventDay) {
                    case 'monday':
                        event.monday.id += eventID; // + '.';
                        event.monday.name += eventName; // + '\n';
                        break
                    case 'tuesday':
                        event.tuesday.id += eventID; // + '.';
                        event.tuesday.name += eventName; // + '\n';
                        break
                    case 'wednesday':
                        event.wednesday.id += eventID; // + '.';
                        event.wednesday.name += eventName; // + '\n';
                        break
                    case 'thursday':
                        event.thursday.id += eventID; // + '.';
                        event.thursday.name += eventName; // + '\n';
                        break
                    case 'friday':
                        event.friday.id += eventID; // + '.';
                        event.friday.name += eventName; // + '\n';
                        break
                    case 'saturday':
                        event.saturday.id += eventID; // + '.';
                        event.saturday.name += eventName; // + '\n';
                        break
                    case 'sunday':
                        event.sunday.id += eventID; // + '.';
                        event.sunday.name += eventName; // + '\n';
                        break
                }

                localStorage.setItem('events', JSON.stringify(events));
            }
        }

        let finalJSON = { id: eventID,
                        name: eventName,
                        date: eventDate,
                        time: eventTime,
                        details: eventDetails,
                        calendar: eventCalendar };

        console.log(finalJSON);

        localStorage.setItem(eventID, JSON.stringify(finalJSON));

        eventID += 1;
        localStorage.setItem('eventID', eventID);
    }

    return (
        <main className="container-fluid bg-secondary text-center">
            <h1>Create An Event</h1>
            <div>
            {/* <form method="get" action="calendars"> */}
                <div className="input-group mb-3">
                    <span className="input-group-text">Event Name: </span>
                    <input className="form-control" type="text" onChange={(e) => eventName = e.target.value} placeholder="Name" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Event Date and Time: </span>
                    <input className="form-control" type="datetime-local" onChange={(e) => getDateTimeDay(e)} name="varDatetime" id="datetime" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Event Details: </span>
                    <textarea className="form-control" id="textarea" onChange={(e) => eventDetails= e.target.value} name="varTextarea"></textarea>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Event Calendar: </span>
                    <select className="form-control" id="select" onChange={(e) => eventCalendar = e.target.value} name="varSelect">
                        <option>Animation</option>
                        <option>CS260</option>
                        <option>LISRites</option>
                    </select>
                </div>
                <Button variant='primary' onClick={() => {createEvent(); navigate('/calendars')}}>Create</Button>
            </div>
            {/* </form> */}
        </main>
  );
}