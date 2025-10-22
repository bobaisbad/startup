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

export default function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? true : false;
  const [authState, setAuthState] = React.useState(currentAuthState);

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
                  {/* {authState === true && (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="create">Create</NavLink>
                  </li>
                  )}
                  {authState === true && (
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
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className="bg-dark text-white-50">
          <div className="container-fluid">
            <span className="text-reset">Alec Winn</span>
            <a className="text-reset" href="https://github.com/bobaisbad/startup.git">GitHub</a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}

// export default App;