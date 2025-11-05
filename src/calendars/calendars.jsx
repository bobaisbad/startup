import React from 'react';
import './calendars.css';
import { NavLink } from 'react-router-dom';
import { Base } from './base';

export function Calendars() {
    const [events, setEvents] = React.useState([]);

    // Base(events, setEvents);

    React.useEffect(() => {
        // console.log("Is it here?");
        const eventsText = localStorage.getItem('events');
        if (eventsText) {
            setEvents(JSON.parse(eventsText));
        } else {
            console.log("Populating...")
            populate();
        }

        const eventIDText = localStorage.getItem('eventID');
        // console.log("Or is it here?");
        if (!eventIDText) {
            localStorage.setItem('eventID', 0);
        }

        const today = new Date();
        const day = today.getDay();
        const date = today.getDate();
        const month = today.getMonth();
        const year = today.getFullYear();
        var min = 0;
        // var minMonth = month
        var max = 0;
        var mod = 0;

        if ((month === '0' || month === '2' || month === '4' || month === '6' || month === '7' || month === '9' || month === '11') && date >= 7) {
            mod = 31;
        } else if ((month === '3'  || month === '5'  || month === '8'  || month === '10') && date >= 7) {
            mod = 30;
        } else if ((month === '0' || month === '1' || month === '3' || month === '5' || month === '7' || month === '8' || month === '10') && date < 7) {
            mod = 31;
        } else if ((month === '4'  || month === '6'  || month === '9'  || month === '11') && date < 7) {
            mod = 30;
        } else {
            mod = 28;
        } 

        if (day === 'Mon') {
            min = date;
            max = (date + 6) % mod;
        } else if (day === 'Tue') {
            min = (date - 1) % mod;
            max = (date + 5) % mod;
        } else if (day === 'Wed') {
            min = (date - 2) % mod;
            max = (date + 4) % mod;
        } else if (day === 'Wed') {
            min = (date - 3) % mod;
            max = (date + 3) % mod;
        } else if (day === 'Wed') {
            min = (date - 4) % mod;
            max = (date + 2) % mod;
        } else if (day === 'Wed') {
            min = (date - 5) % mod;
            max = (date + 1) % mod;
        } else {
            min = (date - 6) % mod;
            max = date;
        }

        if (min <= 0) {
            min = mod + min
        }

        fetch(`https://holidays.abstractapi.com/v1/?api_key=09c2ff7e9fc84272b6261b18ac24f98c&country=US&year=${year}&month=${month}&day=`)
            .then((response) => response.json())
            .then((data) => {
                data.forEach((item) => {
                    // ???
                });
            })
            .catch();
    }, []);

    const populate = () => {
        events.push({ time: 'All Day',
                        monday: { id: '', name: '' },
                        // tuesday: { id: '1', name: 'Holiday - Thanksgiving' },
                        tuesday: { id: '', name: '' },
                        wednesday: { id: '', name: '' },
                        thursday: { id: '', name: '' },
                        friday: { id: '', name: '' },
                        saturday: { id: '', name: '' },
                        sunday: { id: '', name: '' } })

        events.push({ time: '12:00 AM',
                        monday: { id: '', name: '' },
                        tuesday: { id: '', name: '' },
                        wednesday: { id: '', name: '' },
                        thursday: { id: '', name: '' },
                        friday: { id: '', name: '' },
                        saturday: { id: '', name: '' },
                        sunday: { id: '', name: '' } })
        
        events.push({ time: '01:00 AM',
                        monday: { id: '', name: '' },
                        tuesday: { id: '', name: '' },
                        wednesday: { id: '', name: '' },
                        thursday: { id: '', name: '' },
                        friday: { id: '', name: '' },
                        saturday: { id: '', name: '' },
                        sunday: { id: '', name: '' } })
        
        events.push({ time: '02:00 AM',
                        monday: { id: '', name: '' },
                        tuesday: { id: '', name: '' },
                        wednesday: { id: '', name: '' },
                        thursday: { id: '', name: '' },
                        friday: { id: '', name: '' },
                        saturday: { id: '', name: '' },
                        sunday: { id: '', name: '' } })

        events.push({ time: '03:00 AM',
                        monday: { id: '', name: '' },
                        tuesday: { id: '', name: '' },
                        wednesday: { id: '', name: '' },
                        thursday: { id: '', name: '' },
                        friday: { id: '', name: '' },
                        saturday: { id: '', name: '' },
                        sunday: { id: '', name: '' } })

        events.push({ time: '04:00 AM',
                        monday: { id: '', name: '' },
                        tuesday: { id: '', name: '' },
                        wednesday: { id: '', name: '' },
                        thursday: { id: '', name: '' },
                        friday: { id: '', name: '' },
                        saturday: { id: '', name: '' },
                        sunday: { id: '', name: '' } })
        
        events.push({ time: '05:00 AM',
                        monday: { id: '', name: '' },
                        tuesday: { id: '', name: '' },
                        wednesday: { id: '', name: '' },
                        thursday: { id: '', name: '' },
                        friday: { id: '', name: '' },
                        saturday: { id: '', name: '' },
                        sunday: { id: '', name: '' } })
        
        events.push({ time: '06:00 AM',
                        // monday: { id: '2', name: 'Running' },
                        monday: { id: '', name: '' },
                        tuesday: { id: '', name: '' },
                        wednesday: { id: '', name: '' },
                        thursday: { id: '', name: '' },
                        friday: { id: '', name: '' },
                        saturday: { id: '', name: '' },
                        sunday: { id: '', name: '' } })

        events.push({ time: '07:00 AM',
                        monday: { id: '', name: '' },
                        tuesday: { id: '', name: '' },
                        wednesday: { id: '', name: '' },
                        thursday: { id: '', name: '' },
                        friday: { id: '', name: '' },
                        saturday: { id: '', name: '' },
                        sunday: { id: '', name: '' } })
        events.push({ time: '08:00 AM',
                        monday: { id: '', name: '' },
                        tuesday: { id: '', name: '' },
                        wednesday: { id: '', name: '' },
                        thursday: { id: '', name: '' },
                        friday: { id: '', name: '' },
                        saturday: { id: '', name: '' },
                        sunday: { id: '', name: '' } })
        
        events.push({ time: '09:00 AM',
                        monday: { id: '', name: '' },
                        tuesday: { id: '', name: '' },
                        wednesday: { id: '', name: '' },
                        thursday: { id: '', name: '' },
                        friday: { id: '', name: '' },
                        saturday: { id: '', name: '' },
                        sunday: { id: '', name: '' } })
        
        events.push({ time: '10:00 AM',
                        monday: { id: '', name: '' },
                        tuesday: { id: '', name: '' },
                        wednesday: { id: '', name: '' },
                        thursday: { id: '', name: '' },
                        friday: { id: '', name: '' },
                        saturday: { id: '', name: '' },
                        sunday: { id: '', name: '' } })

        events.push({ time: '11:00 AM',
                        monday: { id: '', name: '' },
                        tuesday: { id: '', name: '' },
                        wednesday: { id: '', name: '' },
                        thursday: { id: '', name: '' },
                        friday: { id: '', name: '' },
                        saturday: { id: '', name: '' },
                        sunday: { id: '', name: '' } })
        
        events.push({ time: '12:00 PM',
                        monday: { id: '', name: '' },
                        tuesday: { id: '', name: '' },
                        wednesday: { id: '', name: '' },
                        thursday: { id: '', name: '' },
                        friday: { id: '', name: '' },
                        saturday: { id: '', name: '' },
                        sunday: { id: '', name: '' } })
        
        events.push({ time: '01:00 PM',
                        monday: { id: '', name: '' },
                        tuesday: { id: '', name: '' },
                        wednesday: { id: '', name: '' },
                        thursday: { id: '', name: '' },
                        friday: { id: '', name: '' },
                        saturday: { id: '', name: '' },
                        sunday: { id: '', name: '' } })
        
        events.push({ time: '02:00 PM',
                        monday: { id: '', name: '' },
                        tuesday: { id: '', name: '' },
                        wednesday: { id: '', name: '' },
                        thursday: { id: '', name: '' },
                        friday: { id: '', name: '' },
                        saturday: { id: '', name: '' },
                        sunday: { id: '', name: '' } })

        events.push({ time: '03:00 PM',
                        monday: { id: '', name: '' },
                        tuesday: { id: '', name: '' },
                        wednesday: { id: '', name: '' },
                        thursday: { id: '', name: '' },
                        friday: { id: '', name: '' },
                        saturday: { id: '', name: '' },
                        sunday: { id: '', name: '' } })

        events.push({ time: '04:00 PM',
                        monday: { id: '', name: '' },
                        tuesday: { id: '', name: '' },
                        wednesday: { id: '', name: '' },
                        thursday: { id: '', name: '' },
                        friday: { id: '', name: '' },
                        saturday: { id: '', name: '' },
                        sunday: { id: '', name: '' } })
        
        events.push({ time: '05:00 PM',
                        monday: { id: '', name: '' },
                        tuesday: { id: '', name: '' },
                        wednesday: { id: '', name: '' },
                        thursday: { id: '', name: '' },
                        friday: { id: '', name: '' },
                        saturday: { id: '', name: '' },
                        sunday: { id: '', name: '' } })
        
        events.push({ time: '06:00 PM',
                        monday: { id: '', name: '' },
                        tuesday: { id: '', name: '' },
                        wednesday: { id: '', name: '' },
                        thursday: { id: '', name: '' },
                        friday: { id: '', name: '' },
                        saturday: { id: '', name: '' },
                        sunday: { id: '', name: '' } })

        events.push({ time: '07:00 PM',
                        monday: { id: '', name: '' },
                        tuesday: { id: '', name: '' },
                        wednesday: { id: '', name: '' },
                        thursday: { id: '', name: '' },
                        friday: { id: '', name: '' },
                        saturday: { id: '', name: '' },
                        sunday: { id: '', name: '' } })

        events.push({ time: '08:00 PM',
                        monday: { id: '', name: '' },
                        tuesday: { id: '', name: '' },
                        wednesday: { id: '', name: '' },
                        thursday: { id: '', name: '' },
                        friday: { id: '', name: '' },
                        saturday: { id: '', name: '' },
                        sunday: { id: '', name: '' } })
        
        events.push({ time: '09:00 PM',
                        monday: { id: '', name: '' },
                        tuesday: { id: '', name: '' },
                        wednesday: { id: '', name: '' },
                        thursday: { id: '', name: '' },
                        friday: { id: '', name: '' },
                        saturday: { id: '', name: '' },
                        sunday: { id: '', name: '' } })
        
        events.push({ time: '10:00 PM',
                        monday: { id: '', name: '' },
                        tuesday: { id: '', name: '' },
                        wednesday: { id: '', name: '' },
                        thursday: { id: '', name: '' },
                        friday: { id: '', name: '' },
                        saturday: { id: '', name: '' },
                        sunday: { id: '', name: '' } })

        events.push({ time: '11:00 PM',
                        monday: { id: '', name: '' },
                        tuesday: { id: '', name: '' },
                        wednesday: { id: '', name: '' },
                        thursday: { id: '', name: '' },
                        friday: { id: '', name: '' },
                        saturday: { id: '', name: '' },
                        sunday: { id: '', name: '' } })

        // console.log(events);
        // setEvents(events);
        localStorage.setItem('events', JSON.stringify(events));
        // console.log("Got here");
    }

    // React.useEffect(() => {
    //     console.log("Is it here?");
    //     const eventsText = localStorage.getItem('events');
    //     if (eventsText) {
    //         setEvents(JSON.parse(eventsText));
    //     }
    //     console.log("Or is it here?");
    // }, []);
    // console.log("Hmmmm");
    // localStorage.setItem('12AM1', <NavLink to="../info">Holiday - All Day</NavLink>);

    const eventRows = [];
    if (events.length) {
        for (const [i, event] of events.entries()) {
            eventRows.push(
                <tr key={i}>
                    {/* <NavLink to="../info">Holiday - All Day</NavLink> */}
                    <td>{event.time}</td>
                    {/* <td><NavLink to={'../info/' + event.monday.id}>{event.monday.name}</NavLink></td>
                    <td><NavLink to={'../info/' + event.tuesday.id}>{event.tuesday.name}</NavLink></td>
                    <td><NavLink to={'../info/' + event.wednesday.id}>{event.wednesday.name}</NavLink></td>
                    <td><NavLink to={'../info/' + event.thursday.id}>{event.thursday.name}</NavLink></td>
                    <td><NavLink to={'../info/' + event.friday.id}>{event.friday.name}</NavLink></td>
                    <td><NavLink to={'../info/' + event.saturday.id}>{event.saturday.name}</NavLink></td>
                    <td><NavLink to={'../info/' + event.sunday.id}>{event.sunday.name}</NavLink></td> */}
                    <td><NavLink to={'../' + event.monday.id}>{event.monday.name}</NavLink></td>
                    <td><NavLink to={'../' + event.tuesday.id}>{event.tuesday.name}</NavLink></td>
                    <td><NavLink to={'../' + event.wednesday.id}>{event.wednesday.name}</NavLink></td>
                    <td><NavLink to={'../' + event.thursday.id}>{event.thursday.name}</NavLink></td>
                    <td><NavLink to={'../' + event.friday.id}>{event.friday.name}</NavLink></td>
                    <td><NavLink to={'../' + event.saturday.id}>{event.saturday.name}</NavLink></td>
                    <td><NavLink to={'../' + event.sunday.id}>{event.sunday.name}</NavLink></td>
                </tr>
            );
        }
    }

    return (
        <main className="container-fluid bg-secondary text-center">
            <hr />
                <h1>Animation</h1>
                <form method="get" action="">
                    <button type="submit" className="btn btn-primary" to="calendars">Prev</button>
                    <button type="submit" className="btn btn-primary" to="calendars">Next</button>
                </form>
            <hr />

            <table border="1" width="100%" cellPadding="10" cellSpacing="0" >
                <thead>
                    <tr>
                        <th>&nbsp;</th>                    
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                    </tr>
                    <tr>
                        <th>&nbsp;</th>
                        <th>09/22</th>
                        <th>09/23</th>
                        <th>09/24</th>
                        <th>09/25</th>
                        <th>09/26</th>
                        <th>09/27</th>
                        <th>09/28</th>
                    </tr>
                </thead>
                <tbody id='events'>
                    {eventRows}
                </tbody>

            </table>

            <hr />

            <form method="get" action="">
                <button type="submit" className="btn btn-primary" to="calendars">Prev</button>
                <button type="submit" className="btn btn-primary" to="calendars">Next</button>
            </form>

            <hr />
    </main>
  );
}