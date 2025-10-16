import React from 'react';
import './create.css';

export function Create() {
  return (
    <main className="container-fluid bg-secondary text-center">
      <h1>Create An Event</h1>
            <form method="get" action="calendars">
                <div className="input-group mb-3">
                    <span className="input-group-text">Event Name: </span>
                    <input className="form-control" type="text" placeholder="Name" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Event Date and Time: </span>
                    <input className="form-control" type="datetime-local" name="varDatetime" id="datetime" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Event Details: </span>
                    <textarea className="form-control" id="textarea" name="varTextarea"></textarea>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Event Calendar: </span>
                    <select className="form-control" id="select" name="varSelect">
                        <option>Animation</option>
                        <option>CS260</option>
                        <option>LISRites</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
    </main>
  );
}