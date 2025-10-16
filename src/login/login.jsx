import React from 'react';
import '../app.css';

import { LoggedOut } from './loggedOut';
import { LoggedIn } from './loggedIn';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className="container-fluid bg-secondary text-center">
      <h1>Welcome to Get With Friends</h1>
      {authState === true && (<LoggedIn userName={userName} onLogout={() => onAuthChange(userName, false)} />)}
      {authState === false && (<LoggedOut userName={userName} onLogin={(loginUserName) => onAuthChange(loginUserName, true)} />)}
        {/* <form method="get" action="calendars">
            <div className="input-group mb-3">
                <span className="input-group-text">@</span>
                <input className="form-control" type="text" placeholder="your@email.com" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">🔒</span>
                <input className="form-control" type="password" placeholder="password" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <button type="submit" className="btn btn-secondary" to="register">Register</button>
        </form> */}
    </main>
  );
}