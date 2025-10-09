import React from 'react';
import './register.css';

export function Register() {
  return (
    <main className="container-fluid bg-secondary text-center">
      <h1>Registration</h1>
        <form method="get" action="calendars.html">
            <div className="input-group mb-3">
                <span className="input-group-text">@</span>
                <input className="form-control" type="text" placeholder="your@email.com" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">🔒</span>
                <input className="form-control" type="password" placeholder="password" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">🔒</span>
                <input className="form-control" type="password" placeholder="repeat your password" />
            </div>
            <button type="submit" className="btn btn-primary">Create</button>
        </form>
    </main>
  );
}