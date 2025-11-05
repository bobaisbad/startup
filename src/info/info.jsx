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
                details = given;
                for (const [key, value] of Object.entries(details)) {
                    if (key === id) {
                        setEvent(value);
                    }
                }

                if (!event) {
                    return <Navigate to="../not-found" />;
                }
        });
    });

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