import React from 'react';
import './register.css';

import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export function Register(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  async function registerUser() {
    // localStorage.setItem('userName', userName);
    // props.onRegister(userName);

    const response = await fetch(`/api/auth/create`, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('userName', userName);
      props.onLogin(userName);
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }

  return (
    <main className="container-fluid bg-secondary text-center">
      <h1>Registration</h1>
        <form method="get" action="calendars">
            <div className="input-group mb-3">
                <span className="input-group-text">@</span>
                <input className="form-control" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="your@email.com" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">🔒</span>
                <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">🔒</span>
                <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="repeat your password" />
            </div>
            <Button variant='primary' onClick={() => {registerUser(); navigate('/');}} disabled={!userName || !password}>Create</Button>
        </form>
    </main>
  );
}