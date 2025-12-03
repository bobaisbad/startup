import React from 'react';
import './calendars.css';
import { NavLink } from 'react-router-dom';
import { Base } from './base';

export function Calendars() {
    const [events, setEvents] = React.useState([]);
    const [week, setWeek] = React.useState([]);

    const getNext = (month, day) => {
        let long = [0, 2, 4, 6, 7, 9, 11]; // 31
        let med = [3, 5, 8, 10]; // 30
        let short = [1]; // 28
        let next = 0;

        if (long.includes(month)) {
            next = day % 32;
        } else if (med.includes(month)) {
            next = day % 31;
        } else if (short.includes(month)) {
            next = day % 29;
        }

        next = next < day ? next + 1 : next;

        return next;
    };

    const getPrev = (month, day) => {
        let long = [0, 1, 3, 5, 7, 8, 10]; // 31
        let med = [4, 5, 6, 9, 11]; // 30
        let short = [2]; // 28
        let prev = 0;

        if (long.includes(month)) {
            prev = day === 0 ? 31 : day % 31;
        } else if (med.includes(month)) {
            prev = day === 0 ? 30 : day % 30;
        } else if (short.includes(month)) {
            prev = day === 0 ? 28 : day % 28;
        }

        return prev;
    };

    const getDate = (month, day) => {
        let newDay = day;

        if (day > 21) {
            console.log("Next");
            newDay = getNext(month, day);
        } else if (day < 7) {
            console.log("Prev");
            newDay = getPrev(month, day);
        }

        if (newDay < day) {
            month += 1;
        } else if (newDay > day) {
            month -= 1;
        }

        console.log(day, newDay);

        month += 1;

        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;

        const date = '' + month + '/' + day + '';

        return date;
    };

    React.useEffect(() => {
        let eventsText = [];
        fetch('/api/events')
            .then((response) => response.json())
            .then((given) => {
                eventsText = given;
                setEvents(given);
        });

        fetch(`https://holidays.abstractapi.com/v1/?api_key=09c2ff7e9fc84272b6261b18ac24f98c&country=US&year=${year}&month=${month + 1}&day=${date}`)
            .then((response) => response.json())
            .then((data) => {
                if (data[0] && events[0]) {
                    let weekDay = data[0].week_day.toLowerCase();
                    let name = data[0].name;
                    console.log(events);
                    events[0][weekDay].name = name;
                    setEvents(events);
                }
            })
            .catch();
    }, []);

    const populate = async () => {
        events.push({ time: 'All Day',
                        monday: { id: '', name: '' },
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
        // localStorage.setItem('events', JSON.stringify(events));
        fetch('/api/event', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(events),
        });
        // console.log("Got here");
    }

    const today = new Date();
    const day = today.getDay();
    const date = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    switch (day) {
        case 1:
            week.push(getDate(month, date));
            week.push(getDate(month, date + 1));
            week.push(getDate(month, date + 2));
            week.push(getDate(month, date + 3));
            week.push(getDate(month, date + 4));
            week.push(getDate(month, date + 5));
            week.push(getDate(month, date + 6));
            break;
        case 2:
            week.push(getDate(month, date - 1));
            week.push(getDate(month, date));
            week.push(getDate(month, date + 1));
            week.push(getDate(month, date + 2));
            week.push(getDate(month, date + 3));
            week.push(getDate(month, date + 4));
            week.push(getDate(month, date + 5));
            break;
        case 3:
            week.push(getDate(month, date - 2));
            week.push(getDate(month, date - 1));
            week.push(getDate(month, date));
            week.push(getDate(month, date + 1));
            week.push(getDate(month, date + 2));
            week.push(getDate(month, date + 3));
            week.push(getDate(month, date + 4));
            break;
        case 4:
            week.push(getDate(month, date - 3));
            week.push(getDate(month, date - 2));
            week.push(getDate(month, date - 1));
            week.push(getDate(month, date));
            week.push(getDate(month, date + 1));
            week.push(getDate(month, date + 2));
            week.push(getDate(month, date + 3));
            break;
        case 5:
            week.push(getDate(month, date - 4));
            week.push(getDate(month, date - 3));
            week.push(getDate(month, date - 2));
            week.push(getDate(month, date - 1));
            week.push(getDate(month, date));
            week.push(getDate(month, date + 1));
            week.push(getDate(month, date + 2));
            break;
        case 6:
            week.push(getDate(month, date - 5));
            week.push(getDate(month, date - 4));
            week.push(getDate(month, date - 3));
            week.push(getDate(month, date - 2));
            week.push(getDate(month, date - 1));
            week.push(getDate(month, date));
            week.push(getDate(month, date + 1));
            break;
        case 0:
            week.push(getDate(month, date - 6));
            week.push(getDate(month, date - 5));
            week.push(getDate(month, date - 4));
            week.push(getDate(month, date - 3));
            week.push(getDate(month, date - 2));
            week.push(getDate(month, date - 1));
            week.push(getDate(month, date));
            break
    }

    const eventRows = [];
    if (events.length) {
        for (const [i, event] of events.entries()) {
            eventRows.push(
                <tr key={i}>
                    <td>{event.time}</td>
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

    const weekHeads = (
        <tr>
            <th>&nbsp;</th>
            <th>{week[0]}</th>
            <th>{week[1]}</th>
            <th>{week[2]}</th>
            <th>{week[3]}</th>
            <th>{week[4]}</th>
            <th>{week[5]}</th>
            <th>{week[6]}</th>
        </tr>
    );

    return (
        <main className="container-fluid bg-secondary text-center">
            <hr />
                <h1>Animation</h1>
                {/* <form method="get" action="">
                    <button type="submit" className="btn btn-primary" to="calendars">Prev</button>
                    <button type="submit" className="btn btn-primary" to="calendars">Next</button>
                </form> */}
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
                    {weekHeads}
                </thead>
                <tbody id='events'>
                    {eventRows}
                </tbody>

            </table>

            <hr />

            {/* <form method="get" action="">
                <button type="submit" className="btn btn-primary" to="calendars">Prev</button>
                <button type="submit" className="btn btn-primary" to="calendars">Next</button>
            </form> */}

            <hr />
    </main>
  );
}