import React from 'react';
import './info.css';
import { Route } from 'react-router-dom';
import { useParams, Navigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';


export function Info() {
    const { id } = useParams();

    if (!/^\d+$/.test(id)) {
        return <Navigate to="../not-found" />;
    }

    const eventOBJ = localStorage.getItem(id);

    if (!eventOBJ) {
        return <Navigate to="../not-found" />;
    }

    const event = JSON.parse(eventOBJ);

    // const [scores, setScores] = React.useState([]);
    
    // Demonstrates calling a service asynchronously so that
    // React can properly update state objects with the results.
    // React.useEffect(() => {
    //     const scoresText = localStorage.getItem('scores');
    //     if (scoresText) {
    //     setScores(JSON.parse(scoresText));
    //     }
    // }, []);

    // // Demonstrates rendering an array with React
    // const scoreRows = [];
    // if (scores.length) {
    //     for (const [i, score] of scores.entries()) {
    //     scoreRows.push(
    //         <tr key={i}>
    //         <td>{i}</td>
    //         <td>{score.name.split('@')[0]}</td>
    //         <td>{score.score}</td>
    //         <td>{score.date}</td>
    //         </tr>
    //     );
    //     }
    // } else {
    //     scoreRows.push(
    //     <tr key='0'>
    //         <td colSpan='4'>Be the first to score</td>
    //     </tr>
    //     );
    // }

    return (
        <main className="container-fluid bg-secondary text-center">
            <div>
                <h1>{event.name}</h1>
            </div>
            <div>
                <p>
                    {/* Event Date and Time: ??/??/???? ??:?? ?M */}
                    Event Date and Time: {event.date} {event.time}
                </p>

                <p>
                    Event Details: {event.details}
                </p>

                <p>
                    Event Poster: {event.poster}
                </p>

                <p>
                    RSVPs: {event.rsvps}
                </p>

                <form method="get" action="">
                    <div className="input-group mb-3">
                        <span>
                            Post Your Thoughts:&nbsp;&nbsp;
                        </span>
                        <textarea className="form-control" id="textarea" name="varTextarea"></textarea>
                    </div>
                    <Button variant="primary" onClick={}>Post</Button>
                    <Button variant="primary" onClick={}>RSVP</Button>
                </form>
            </div>

            <div className="div-left">
                <RenderComments comments={event.comments} />
                {/* <p>
                    Gabriel (1d): Awesome, lets do it!
                </p>

                <p>
                    Jakob (5h): It sounds fun, but idk if I can come
                </p> */}
            </div>

            {/* <Routes> */}
                {/* <Route path='/0' element={<Info />}></Route> */}
            {/* <Route path='/' element={<Login userName={userName} authState={authState}
                                            onAuthChange={(userName, authState) => {
                                                            setAuthState(authState);
                                                            setUserName(userName);
                                                            }}/>
                                    } exact />
            <Route path='/calendars' element={<Calendars />} />
            <Route path='/create' element={<Create />} />
            <Route path='/info' element={<Info />} />
            <Route path='/register' element={<Register userName={userName} // authState={authState}
                                                        // onAuthChange={(userName, authState) => {
                                                        //               setAuthState(authState);
                                                        //               setUserName(userName);
                                                        //               }}/>
                                                        onRegister={(registerUserName) => {
                                                                    setAuthState(true);
                                                                    setUserName(registerUserName);
                                                                    }}/>
                                            } />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} /> */}
            {/* </Routes> */}
        </main>
  );
}

export function RenderComments({ comments }) {
    const commentRows = [];
    if (comments.length) {
        for (const [i, comment] of comments.entries()) {
            commentRows.push(
                <p>comment.name</p>
            );
        }
    }
}