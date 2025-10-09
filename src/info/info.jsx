import React from 'react';
import './info.css';

export function Info() {
  return (
    <main className="container-fluid bg-secondary text-center">
        <div>
            <h1>Event Name</h1>
        </div>
        <div>
            <p>
                Event Date and Time: ??/??/???? ??:?? ?M
            </p>

            <p>
                Event Details: blah blah blah
            </p>

            <p>
                Event Poster: Bob
            </p>

            <p>
                RSVPs: 2
            </p>

            <form method="get" action="">
                <div className="input-group mb-3">
                    <span>
                        Post Your Thoughts: 
                    </span>
                    <textarea className="form-control" id="textarea" name="varTextarea"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Post</button>
                <button type="submit" className="btn btn-primary">RSVP</button>
            </form>
        </div>

        <div className="div-left">
            <p>
                Gabriel (1d): Awesome, lets do it!
            </p>

            <p>
                Jakob (5h): It sounds fun, but idk if I can come
            </p>
        </div>
    </main>
  );
}