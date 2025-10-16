import React from 'react';

import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export function LoggedIn(props) {
  const navigate = useNavigate();

  async function logoutUser() {
    localStorage.removeItem('userName');
    props.onLogout();
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

      {/* <MessageDialog message={displayError} onHide={() => setDisplayError(null)} /> */}
    </>
  );
}
