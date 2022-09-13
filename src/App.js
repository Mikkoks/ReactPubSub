import './App.css';
import React, { useState } from "react";
import { OnEvent } from './events/pubsub'
import { UserLoggedInEvent } from './events/user-logged-in-event'
import { UserLoggedOutEvent } from './events/user-logged-out-event'


import LoginComponent from './components/login';
import LogoutComponent from './components/logout';
import GreeterComponent from './components/greeter';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  OnEvent(UserLoggedInEvent, () => { setIsLogged(true); console.debug('jee'); });
  OnEvent(UserLoggedOutEvent, () => { setIsLogged(false); });

  return (
    <div className="App">
      <header className="App-header">
        <GreeterComponent />
        {!isLogged ? <LoginComponent /> : <LogoutComponent/>}
      </header>
    </div>
  );
}

export default App;
