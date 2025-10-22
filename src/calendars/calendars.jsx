import React from 'react';
import './calendars.css';
import { NavLink } from 'react-router-dom';
// import { Info } from '../info/info';

export function Calendars() {
    const [events, setEvents] = React.useState([]);

    React.useEffect(() => {
        const eventsText = localStorage.getItem('events');
        if (eventsText) {
            setEvents(JSON.parse(eventsText));
        }
    }, []);
    // localStorage.setItem('12AM1', <NavLink to="../info">Holiday - All Day</NavLink>);

    const eventRows = [];
    if (events.length) {
        for (const [i, event] of events.entries()) {
            eventRows.push(
                <tr key={i}>
                    {/* <NavLink to="../info">Holiday - All Day</NavLink> */}
                    <td>{event.time}</td>
                    <td><NavLink to={'info/' + event.monday.id}>{event.monday}</NavLink></td>
                    <td><NavLink to={'info/' + event.tuesday.id}>{event.tuesday}</NavLink></td>
                    <td><NavLink to={'info/' + event.wednesday.id}>{event.wednesday}</NavLink></td>
                    <td><NavLink to={'info/' + event.thursday.id}>{event.thursday}</NavLink></td>
                    <td><NavLink to={'info/' + event.friday.id}>{event.friday}</NavLink></td>
                    <td><NavLink to={'info/' + event.saturday.id}>{event.saturday}</NavLink></td>
                    <td><NavLink to={'info/' + event.sunday.id}>{event.sunday}</NavLink></td>
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
                    {/* <tr>
                        <td>All Day</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td><NavLink to="../info">Holiday - All Day</NavLink></td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td >12:00 AM</td>
                        <td id="12A1">&nbsp;</td>
                        <td id="12A2">&nbsp;</td>
                        <td id="12A3">&nbsp;</td>
                        <td id="12A4">&nbsp;</td>
                        <td id="12A5">&nbsp;</td>
                        <td id="12A6">&nbsp;</td>
                        <td id="12A7">&nbsp;</td>
                        <td>{localStorage.getItem("12AM1")}</td>
                        <td>{localStorage.getItem("12AM2")}</td>
                        <td>{localStorage.getItem("12AM3")}</td>
                        <td>{localStorage.getItem("12AM4")}</td>
                        <td>{localStorage.getItem("12AM5")}</td>
                        <td>{localStorage.getItem("12AM6")}</td>
                        <td>{localStorage.getItem("12AM7")}</td>
                    </tr>
                    <tr>
                        <td>1:00 AM</td>
                        <td id="12AM1">&nbsp;</td>
                        <td id="12AM2">&nbsp;</td>
                        <td id="12AM3">&nbsp;</td>
                        <td id="12AM4">&nbsp;</td>
                        <td id="12AM5">&nbsp;</td>
                        <td id="12AM6">&nbsp;</td>
                        <td id="12AM7">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>2:00 AM</td>
                        <td id="12AM1">&nbsp;</td>
                        <td id="12AM2">&nbsp;</td>
                        <td id="12AM3">&nbsp;</td>
                        <td id="12AM4">&nbsp;</td>
                        <td id="12AM5">&nbsp;</td>
                        <td id="12AM6">&nbsp;</td>
                        <td id="12AM7">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>3:00 AM</td>
                        <td id="12AM1">&nbsp;</td>
                        <td id="12AM2">&nbsp;</td>
                        <td id="12AM3">&nbsp;</td>
                        <td id="12AM4">&nbsp;</td>
                        <td id="12AM5">&nbsp;</td>
                        <td id="12AM6">&nbsp;</td>
                        <td id="12AM7">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>4:00 AM</td>
                        <td id="12AM1">&nbsp;</td>
                        <td id="12AM2">&nbsp;</td>
                        <td id="12AM3">&nbsp;</td>
                        <td id="12AM4">&nbsp;</td>
                        <td id="12AM5">&nbsp;</td>
                        <td id="12AM6">&nbsp;</td>
                        <td id="12AM7">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>5:00 AM</td>
                        <td id="12AM1">&nbsp;</td>
                        <td id="12AM2">&nbsp;</td>
                        <td id="12AM3">&nbsp;</td>
                        <td id="12AM4">&nbsp;</td>
                        <td id="12AM5">&nbsp;</td>
                        <td id="12AM6">&nbsp;</td>
                        <td id="12AM7">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>6:00 AM</td>
                        <td id="12AM1">&nbsp;</td>
                        <td id="12AM2">&nbsp;</td>
                        <td id="12AM3">&nbsp;</td>
                        <td id="12AM4">&nbsp;</td>
                        <td id="12AM5">&nbsp;</td>
                        <td id="12AM6">&nbsp;</td>
                        <td id="12AM7">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>7:00 AM</td>
                        <td id="12AM1">&nbsp;</td>
                        <td id="12AM2">&nbsp;</td>
                        <td id="12AM3">&nbsp;</td>
                        <td id="12AM4">&nbsp;</td>
                        <td id="12AM5">&nbsp;</td>
                        <td id="12AM6">&nbsp;</td>
                        <td id="12AM7">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>8:00 AM</td>
                        <td id="12AM1">&nbsp;</td>
                        <td id="12AM2">&nbsp;</td>
                        <td id="12AM3">&nbsp;</td>
                        <td id="12AM4">&nbsp;</td>
                        <td id="12AM5">&nbsp;</td>
                        <td id="12AM6">&nbsp;</td>
                        <td id="12AM7">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>9:00 AM</td>
                        <td id="12AM1">&nbsp;</td>
                        <td id="12AM2">&nbsp;</td>
                        <td id="12AM3">&nbsp;</td>
                        <td id="12AM4">&nbsp;</td>
                        <td id="12AM5">&nbsp;</td>
                        <td id="12AM6">&nbsp;</td>
                        <td id="12AM7">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>10:00 AM</td>
                        <td id="12AM1">&nbsp;</td>
                        <td id="12AM2">&nbsp;</td>
                        <td id="12AM3">&nbsp;</td>
                        <td id="12AM4">&nbsp;</td>
                        <td id="12AM5">&nbsp;</td>
                        <td id="12AM6">&nbsp;</td>
                        <td id="12AM7">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>11:00 AM</td>
                        <td id="12AM1">&nbsp;</td>
                        <td id="12AM2">&nbsp;</td>
                        <td id="12AM3">&nbsp;</td>
                        <td id="12AM4">&nbsp;</td>
                        <td id="12AM5">&nbsp;</td>
                        <td id="12AM6">&nbsp;</td>
                        <td id="12AM7">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>12:00 PM</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td><NavLink to="../info">Animation Meeting (Sophie reacted with ":)"</NavLink></td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>1:00 PM</td>
                        <td id="12AM1">&nbsp;</td>
                        <td id="12AM2">&nbsp;</td>
                        <td id="12AM3">&nbsp;</td>
                        <td id="12AM4">&nbsp;</td>
                        <td id="12AM5">&nbsp;</td>
                        <td id="12AM6">&nbsp;</td>
                        <td id="12AM7">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>2:00 PM</td>
                        <td id="12AM1">&nbsp;</td>
                        <td id="12AM2">&nbsp;</td>
                        <td id="12AM3">&nbsp;</td>
                        <td id="12AM4">&nbsp;</td>
                        <td id="12AM5">&nbsp;</td>
                        <td id="12AM6">&nbsp;</td>
                        <td id="12AM7">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>3:00 PM</td>
                        <td id="12AM1">&nbsp;</td>
                        <td id="12AM2">&nbsp;</td>
                        <td id="12AM3">&nbsp;</td>
                        <td id="12AM4">&nbsp;</td>
                        <td id="12AM5">&nbsp;</td>
                        <td id="12AM6">&nbsp;</td>
                        <td id="12AM7">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>4:00 PM</td>
                        <td id="12AM1">&nbsp;</td>
                        <td id="12AM2">&nbsp;</td>
                        <td id="12AM3">&nbsp;</td>
                        <td id="12AM4">&nbsp;</td>
                        <td id="12AM5">&nbsp;</td>
                        <td id="12AM6">&nbsp;</td>
                        <td id="12AM7">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>5:00 PM</td>
                        <td id="12AM1">&nbsp;</td>
                        <td id="12AM2">&nbsp;</td>
                        <td id="12AM3">&nbsp;</td>
                        <td id="12AM4">&nbsp;</td>
                        <td id="12AM5">&nbsp;</td>
                        <td id="12AM6">&nbsp;</td>
                        <td id="12AM7">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>6:00 PM</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>7:00 PM</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>8:00 PM</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>9:00 PM</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>10:00 PM</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>11:00 PM</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr> */}
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