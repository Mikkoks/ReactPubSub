import React, { useState } from "react";
import { OnEvent } from '../events/pubsub'
import { UserLoggedInEvent } from '../events/user-logged-in-event'
import { UserLoggedOutEvent } from '../events/user-logged-out-event'

const GreeterComponent = () => {
    let [greeting, setGreeting] = useState("Moi mahtava!");


    OnEvent(UserLoggedInEvent, (user) => { setGreeting(`Hello ${user.name}!`); });
    OnEvent(UserLoggedOutEvent, () => { setGreeting(`Moi mahtava!`); });


    return (<h1>{greeting}</h1>);
};

export default GreeterComponent;