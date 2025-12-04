import React from 'react';
import './info.css';
import { Route } from 'react-router-dom';
import { useParams, Navigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export function Info({ name }) {
    const [event, setEvent] = React.useState([]);
    // const [week, setWeek] = React.useState([]);
    const { id } = useParams();

    // let event = [];

    React.useEffect(() => {
        let details = [];
        let done = false;

        fetch('/api/details')
            .then((response) => response.json())
            .then((given) => {
                console.log(given);
                details = given;
                // for (const detail of details) { 
                details.forEach(detaille => {
                    if (!done) {
                        console.log(detaille);
                        console.log(id);
                        console.log(detaille.id);
                        // for (const [key, value] of Object.entries(detail)) {
                        if (detaille.id === id) {
                            console.log("setting...");
                            setEvent(detaille);
                            // console.log(detaille);
                            setEvent({ name: detaille.detail.name, date: detaille.detail.date, time: detaille.detail.time, details: detaille.detail.details, poster: detaille.detail.poster });
                            // event = detail;
                            done = true;
                        }
                    }
                    // }

                    if (!event) {
                        return <Navigate to="../not-found" />;
                    }
                });
        });
    }, []);

    // console.log("event: " + typeof event);
    // console.log("event.detail: " + typeof event.detail);
    // let details = event.detail;
    // console.log("details: " + typeof details);
    // console.log("details.name: " + typeof details.name);
    // console.log("event.detail.name: " + typeof event.detail.name);
    // console.log(details);
    // console.log("Got here");

    // for (const [i, detail] of event.entries()) {
    //     console.log(detail);
    // }

    // console.log(event.name);

    return (
        <main className="container-fluid bg-secondary text-center">
            <div>
                <h1>{event.name}</h1>
            </div>
            <div>
                <p>
                    Event Date and Time: {event.date} {event.time}
                </p>

                <p>
                    Event Details: {event.details}
                </p>

                <p>
                    Event Poster: {event.poster}
                </p>
            </div>
        </main>
    )};