import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { About } from './about/about';
import { Calendars } from './calendars/calendars';
import { Create } from './create/create';
import { Info } from './info/info';
import { Register } from './register/register';

import { MessageDialog } from './register/messageDialog';
import { Event, EventNotifier } from './login/eventNotifier';

export default function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? true : false;
  const [authState, setAuthState] = React.useState(currentAuthState);

  const [events, setEvent] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);
  
  function handleEvent(event) {
    setEvent([...events, event]);

    let message = 'unknown';

    console.log(event);
    
    if (event.type === Event.Create) {
      message = `${event.from} created a new event: ${event.value.name} @ ${event.value.time} on ${event.value.date}`;
    } else if (event.type === Event.Delete) {
      message = `${event.from} deleted an event: ${event.value.name} @ ${event.value.time} on ${event.value.date}`;
    } else if (event.type === Event.System) {
      message = event.value.msg;
    }
    
    setDisplayError(message); // `⚠ Error: ${hhh}`);
  }

  EventNotifier.addHandler(handleEvent);

  return (
    <BrowserRouter>
      <div className="body bg-dark text-light">
        {/* <header className="container-fluid">
          <nav className="navbar fixed-top navbar-dark">
            <div className="navbar-brand">
              Simon<sup>&reg;</sup>
            </div>
            <menu className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="play.html">
                  Play
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="scores.html">
                  Scores
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  About
                </a>
              </li>
            </menu>
          </nav>
        </header> */}

        <header className="container-fluid">
            <nav className="navbar fixed-top navbar-dark">
                <span className="navbar-brand">Get With Friends</span>
                <menu className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="">Login</NavLink>
                  </li>
                  {authState === true && (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="calendars">Calendars</NavLink>
                  </li>
                  )}
                  {authState === true && (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="create">Create</NavLink>
                  </li>
                  )}
                  {/* {authState === true && (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="info">Info</NavLink>
                  </li>
                  )}
                  {authState === true && (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="register">Register</NavLink>
                  </li> 
                  )} */}
                  <li className="nav-item">
                    <NavLink className="nav-link" to="about">About</NavLink>
                  </li> 
                </menu>
            </nav>
        </header>

        <Routes>
          <Route path='/' element={<Login userName={userName} authState={authState}
                                          onAuthChange={(userName, authState) => {
                                                        setAuthState(authState);
                                                        setUserName(userName);
                                                        }}/>
                                  } exact />
          <Route path='/calendars' element={<Calendars />} />
          <Route path='/create' element={<Create poster={userName} />} />
          {/* <Route path='/info' element={<Info />} /> */}
          <Route path='/:id' element={<Info name={userName} />} />
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
          <Route path='/not-found' element={<NotFound />} />
        </Routes>

        <footer className="bg-dark text-white-50">
          <div className="container-fluid">
            <span className="text-reset">Alec Winn</span>
            <a className="text-reset" href="https://github.com/bobaisbad/startup.git">GitHub</a>
          </div>
        </footer>
      </div>

      {authState && displayError !== "connected" && (<MessageDialog message={displayError} onHide={() => setDisplayError(null)} />)}
        
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}

// export default App;