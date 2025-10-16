import React from 'react';

export function LoggedOut(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
//   const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

//   async function createUser() {
//     localStorage.setItem('userName', userName);
//     props.onLogin(userName);
//   }

  return (
    <>
      <div>
        {/* <div className='input-group mb-3'>
          <span className='input-group-text'>@</span>
          <input className='form-control' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='your@email.com' />
        </div>
        <div className='input-group mb-3'>
          <span className='input-group-text'>🔒</span>
          <input className='form-control' type='password' onChange={(e) => setPassword(e.target.value)} placeholder='password' />
        </div>
        <Button variant='primary' onClick={() => loginUser()} disabled={!userName || !password}>
          Login
        </Button>
        <Button variant='secondary' onClick={() => createUser()} disabled={!userName || !password}>
          Create
        </Button> */}

        {/* <form method="get" action="calendars"> */}
            <div className="input-group mb-3">
                <span className="input-group-text">@</span>
                <input className="form-control" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="your@email.com" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">🔒</span>
                <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
            </div>
            <button type="submit" className="btn btn-primary" onClick={() => loginUser()} disbaled={!userName || !password}>Login</button>
            <button type="submit" className="btn btn-secondary" to="register">Register</button>
        {/* </form> */}
      </div>

      {/* <MessageDialog message={displayError} onHide={() => setDisplayError(null)} /> */}
    </>
  );
}
