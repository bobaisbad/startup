import React from 'react';
import './about.css';

export function About() {
  return (
    <main className="container-fluid bg-secondary text-center">
      <main className="container-fluid bg-secondary text-center">
            <h1>About Get With Friends</h1>
            <p>
                Get With Friends is a web application originally made as a project for a web programming class at Brigham Young Univserity, blah blah blah
            </p>

            <p>
                It is now extensively used by friend groups, animation students, etc. to blah blah blah
            </p>
            <div id="picture" className="picture-box">
                <img width="400px" src="morning_byu.jpg" alt="random" />
            </div>
        </main>
    </main>
  );
}