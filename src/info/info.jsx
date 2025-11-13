import React from 'react';
import './info.css';
import { Route } from 'react-router-dom';
import { useParams, Navigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export function Info({ name }) {
    const [event, setEvent] = React.useState([]);
    // const [week, setWeek] = React.useState([]);
    const { id } = useParams();

    React.useEffect(() => {
        let details = [];
        fetch('/api/details')
            .then((response) => response.json())
            .then((given) => {
                console.log(given);
                details = given;
                // for (const detail of details) { 
                details.forEach(detail => {
                    console.log(detail);
                    console.log(id);
                    console.log(detail.id);
                    // for (const [key, value] of Object.entries(detail)) {
                    if (detail.id === id) {
                        console.log("setting...");
                        setEvent(detail);
                    }
                    // }

                    if (!event) {
                        return <Navigate to="../not-found" />;
                    }
                });
        });
    }, []);

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