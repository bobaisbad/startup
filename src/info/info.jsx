import React from 'react';
import './info.css';
import { Route } from 'react-router-dom';
import { useParams, Navigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';



async function getEvent(id) {
    let details = [];
    let event;
    await fetch('/api/details')
        // method: 'POST',
        .then((response) => response.json())
        .then((given) => {
            details = given;
            // console.log(details);
            console.log(details);
    });

    console.log("Got here first");

    for (const [key, value] of Object.entries(details)) {
        if (key === id) {
            event = value;
        }
    }

    // if (!event) {
    //     return <Navigate to="../not-found" />;
    // }

    return event;
}

export function Info({ name }) {
    const [event, setEvent] = React.useState([]);
    // const [week, setWeek] = React.useState([]);
    const { id } = useParams();

    React.useEffect(() => {
        // const { id } = useParams();

        // let text = '';

        // console.log(id)

        let details = [];
        fetch('/api/details')
            // method: 'POST',
            .then((response) => response.json())
            .then((given) => {
                details = given;
                // console.log(details);
                // console.log(details);
                for (const [key, value] of Object.entries(details)) {
                    if (key === id) {
                        setEvent(value);
                    }
                }

                if (!event) {
                    return <Navigate to="../not-found" />;
                }
        });

        // console.log("Got here first");

        // let event;
        // for (const [key, value] of Object.entries(details)) {
        //     if (key === id) {
        //         setEvent(value);
        //     }
        // }

        // let event = getEvent(id);
        // console.log("Got here second");

        // if (!event) {
        //     return <Navigate to="../not-found" />;
        // }
    });

    return (
        <main className="container-fluid bg-secondary text-center">
            <div>
                <h1>{event.name}</h1>
            </div>
            <div>
                <p>
                    Event Date and Time: {event.date} {event.time}
                </p>

                <p>
                    Event Details: {event.details}
                </p>

                <p>
                    Event Poster: {event.poster}
                </p>
            </div>
        </main>
    );


    // loadInfo(setEvent);
    // const [comments, setComments] = React.useState([]);
    // const { id } = useParams();

    // React.useEffect(() => {
    //         // console.log("Is it here?");
    //         const eventOBJ = localStorage.getItem(id);

    //         if (!eventOBJ) {
    //             return <Navigate to="../not-found" />;
    //         }

    //         const event = JSON.parse(eventOBJ);

    //         // const commentsText = localStorage.getItem('events');
    //         // if (event) {
    //         //     setComments(event.comments);
    //         // }
    //         // console.log("Or is it here?");
    // }, []);
    
    // let text = '';

    // console.log(id)

    // if (!/^\d+$/.test(id)) {
    //     return <Navigate to="../not-found" />;
    // }

    // let details = [];
    // let event = getEvent(id);
    // console.log("Got here second");
    // fetch('/api/details')
    //     // method: 'POST',
    //     .then((response) => response.json())
    //     .then((given) => {
    //         details = given;
    //         // console.log(details);
    //         console.log(details);

    //         for (const [key, value] of Object.entries(details)) {
    //             if (key === id) {
    //                 event = value;
    //             }
    //         }

    //         if (!event) {
    //             return <Navigate to="../not-found" />;
    //         }

        //     return (
        //         <main className="container-fluid bg-secondary text-center">
        //             <div>
        //                 <h1>{event.name}</h1>
        //             </div>
        //             <div>
        //                 <p>
        //                     {/* Event Date and Time: ??/??/???? ??:?? ?M */}
        //                     Event Date and Time: {event.date} {event.time}
        //                 </p>

        //                 <p>
        //                     Event Details: {event.details}
        //                 </p>

        //                 <p>
        //                     Event Poster: {event.poster}
        //                 </p>

        //                 {/* <p>
        //                     RSVPs: {event.rsvps}
        //                 </p> */}

        //                 {/* <form method="get" action="">
        //                     <div className="input-group mb-3">
        //                         <span>
        //                             Post Your Thoughts:&nbsp;&nbsp;
        //                         </span>
        //                         <textarea className="form-control" id="textarea" onChange={(e) => text = e.target.value} name="varTextarea"></textarea>
        //                     </div> */}
        //                     {/* <Button variant="primary" onClick={() => {event.comments.push({ name: name, text: text}); console.log(event.comments);}}>Post</Button> */}
        //                     {/* <Button variant="primary" onClick={() => {}}>Post</Button> */}
        //                     {/* <Button variant="primary" onClick={() => event.rsvps += 1}>RSVP</Button> */}
        //                 {/* </form> */}
        //             </div>

        //             <div className="div-left">
        //                 {/* <RenderComments event={event} /> */}
        //                 {/* <div>{comments}</div> */}
        //                 {/* <p>
        //                     Gabriel (1d): Awesome, lets do it!
        //                 </p>

        //                 <p>
        //                     Jakob (5h): It sounds fun, but idk if I can come
        //                 </p> */}
        //             </div>

        //             {/* <Routes> */}
        //                 {/* <Route path='/0' element={<Info />}></Route> */}
        //             {/* <Route path='/' element={<Login userName={userName} authState={authState}
        //                                             onAuthChange={(userName, authState) => {
        //                                                             setAuthState(authState);
        //                                                             setUserName(userName);
        //                                                             }}/>
        //                                     } exact />
        //             <Route path='/calendars' element={<Calendars />} />
        //             <Route path='/create' element={<Create />} />
        //             <Route path='/info' element={<Info />} />
        //             <Route path='/register' element={<Register userName={userName} // authState={authState}
        //                                                         // onAuthChange={(userName, authState) => {
        //                                                         //               setAuthState(authState);
        //                                                         //               setUserName(userName);
        //                                                         //               }}/>
        //                                                         onRegister={(registerUserName) => {
        //                                                                     setAuthState(true);
        //                                                                     setUserName(registerUserName);
        //                                                                     }}/>
        //                                             } />
        //             <Route path='/about' element={<About />} />
        //             <Route path='*' element={<NotFound />} /> */}
        //             {/* </Routes> */}
        //         </main>
        // );
    // });

    // console.log("Didn't stop...");

    // let event;
    // for (const [key, value] of details.entries()) {
    //     if (key === id) {
    //         event = value;
    //     }
    // }

    // if (!event) {
    //     return <Navigate to="../not-found" />;
    // }

    // console.log(`Returned event:`);
    // console.log(event);

    // const eventOBJ = localStorage.getItem(id);

    // if (!eventOBJ) {
    //     return <Navigate to="../not-found" />;
    // }

    // const event = JSON.parse(eventOBJ);

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

//     return (
//         <main className="container-fluid bg-secondary text-center">
//             <div>
//                 <h1>{event.name}</h1>
//             </div>
//             <div>
//                 <p>
//                     {/* Event Date and Time: ??/??/???? ??:?? ?M */}
//                     Event Date and Time: {event.date} {event.time}
//                 </p>

//                 <p>
//                     Event Details: {event.details}
//                 </p>

//                 <p>
//                     Event Poster: {event.poster}
//                 </p>

//                 {/* <p>
//                     RSVPs: {event.rsvps}
//                 </p> */}

//                 {/* <form method="get" action="">
//                     <div className="input-group mb-3">
//                         <span>
//                             Post Your Thoughts:&nbsp;&nbsp;
//                         </span>
//                         <textarea className="form-control" id="textarea" onChange={(e) => text = e.target.value} name="varTextarea"></textarea>
//                     </div> */}
//                     {/* <Button variant="primary" onClick={() => {event.comments.push({ name: name, text: text}); console.log(event.comments);}}>Post</Button> */}
//                     {/* <Button variant="primary" onClick={() => {}}>Post</Button> */}
//                     {/* <Button variant="primary" onClick={() => event.rsvps += 1}>RSVP</Button> */}
//                 {/* </form> */}
//             </div>

//             <div className="div-left">
//                 {/* <RenderComments event={event} /> */}
//                 {/* <div>{comments}</div> */}
//                 {/* <p>
//                     Gabriel (1d): Awesome, lets do it!
//                 </p>

//                 <p>
//                     Jakob (5h): It sounds fun, but idk if I can come
//                 </p> */}
//             </div>

//             {/* <Routes> */}
//                 {/* <Route path='/0' element={<Info />}></Route> */}
//             {/* <Route path='/' element={<Login userName={userName} authState={authState}
//                                             onAuthChange={(userName, authState) => {
//                                                             setAuthState(authState);
//                                                             setUserName(userName);
//                                                             }}/>
//                                     } exact />
//             <Route path='/calendars' element={<Calendars />} />
//             <Route path='/create' element={<Create />} />
//             <Route path='/info' element={<Info />} />
//             <Route path='/register' element={<Register userName={userName} // authState={authState}
//                                                         // onAuthChange={(userName, authState) => {
//                                                         //               setAuthState(authState);
//                                                         //               setUserName(userName);
//                                                         //               }}/>
//                                                         onRegister={(registerUserName) => {
//                                                                     setAuthState(true);
//                                                                     setUserName(registerUserName);
//                                                                     }}/>
//                                             } />
//             <Route path='/about' element={<About />} />
//             <Route path='*' element={<NotFound />} /> */}
//             {/* </Routes> */}
//         </main>
//   );
}

// export function RenderComments({ event }) {
//     const comments = event.comments;
//     console.log(comments);
//     const commentRows = [];
//     if (comments.length) {
//         for (const [i, comment] of comments.entries()) {
//             commentRows.push(
//                 <p>{comment.name}: {comment.text}</p>
//             );
//         }
//     }

//     return commentRows;
// }

async function loadInfo(setEvent) {
    const { id } = useParams();

    let text = '';

    console.log(id)

    let details = [];
    await fetch('/api/details')
        // method: 'POST',
        .then((response) => response.json())
        .then((given) => {
            details = given;
            // console.log(details);
            console.log(details);
    });

    console.log("Got here first");

    // let event;
    for (const [key, value] of Object.entries(details)) {
        if (key === id) {
            setEvent(value);
        }
    }

    // let event = getEvent(id);
    console.log("Got here second");

    if (!event) {
        return <Navigate to="../not-found" />;
    }

    return (
        <main className="container-fluid bg-secondary text-center">
            <div>
                <h1>{event.name}</h1>
            </div>
            <div>
                <p>
                    Event Date and Time: {event.date} {event.time}
                </p>

                <p>
                    Event Details: {event.details}
                </p>

                <p>
                    Event Poster: {event.poster}
                </p>
            </div>
        </main>
    );
}