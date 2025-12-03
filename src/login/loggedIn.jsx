import React from 'react';

import { useNavigate } from 'react-router-dom';
import { MessageDialog } from './messageDialog';

import Button from 'react-bootstrap/Button';

import { Event, EventNotifier } from './eventNotifier';

export function LoggedIn(props) {
  const navigate = useNavigate();

  const [events, setEvent] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  function handleEvent(event) {
    setEvent([...events, event]);

    let message = 'unknown';

    if (event.type === Event.Create) {
      message = `${event.poster} created a new event: ${event.eventName} @ ${event.eventTime} on ${event.eventDate}`;
    } else if (event.type === Event.Delete) {
      message = `${event.poster} deleted an event: ${event.eventName} @ ${event.eventTime} on ${event.eventDate}`;
    } else if (event.type === Event.System) {
      message = event.value.msg;
    }
    
    setDisplayError(message); // `⚠ Error: ${hhh}`);
  }

  async function logoutUser() {
    // localStorage.removeItem('userName');
    // props.onLogout();

    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('userName');
        props.onLogout();

        EventNotifier.removeHandler(handleEvent);
      });
  }

  return (
    <>
      <div>
            {/* <div className="input-group mb-3">
                <span className="input-group-text">@</span>
                <input className="form-control" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="your@email.com" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">🔒</span>
                <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
            </div> */}
            <div className='nameOfUser'>{props.userName}</div>
            <Button variant='primary' onClick={() => navigate('/calendars')}>Calendars</Button>
            <Button variant='secondary' onClick={() => logoutUser()}>Logout</Button>
        {/* </form> */}
      </div>

      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
}
