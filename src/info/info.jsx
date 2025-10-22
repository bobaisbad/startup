import React from 'react';
import './info.css';
import { Route } from 'react-router-dom';
import { useParams, Navigate } from 'react-router-dom';


export function Info() {
    const { id } = useParams();

    if (!/^\d+$/.test(id)) {
        return <Navigate to="../not-found" />;
    }

    const [scores, setScores] = React.useState([]);
    
    // Demonstrates calling a service asynchronously so that
    // React can properly update state objects with the results.
    React.useEffect(() => {
        const scoresText = localStorage.getItem('scores');
        if (scoresText) {
        setScores(JSON.parse(scoresText));
        }
    }, []);

    // Demonstrates rendering an array with React
    const scoreRows = [];
    if (scores.length) {
        for (const [i, score] of scores.entries()) {
        scoreRows.push(
            <tr key={i}>
            <td>{i}</td>
            <td>{score.name.split('@')[0]}</td>
            <td>{score.score}</td>
            <td>{score.date}</td>
            </tr>
        );
        }
    } else {
        scoreRows.push(
        <tr key='0'>
            <td colSpan='4'>Be the first to score</td>
        </tr>
        );
    }

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
                            Post Your Thoughts:&nbsp;&nbsp;
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