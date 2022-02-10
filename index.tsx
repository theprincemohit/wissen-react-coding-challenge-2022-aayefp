import React, { useState } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formlayout from './Formlayout';
import Users from './Users';

const App = () => {
  const [token, setToken] = useState(null);

  const handleToken = (data) => {
    console.log('handle', data);
    setToken(data.token);
  };

  const handleLogout = () => {
    console.log('handle logout');
    setToken(null);
  };
  return (
    <>
      {token}
      {token == null ? (
        <>
          <Formlayout handleToken={(data) => handleToken(data)} />
        </>
      ) : (
        <>
          <Users token={token} logout={handleLogout} />
        </>
      )}
    </>
  );
};

render(<App />, document.getElementById('root'));
