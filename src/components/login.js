import React, { useState } from "react";
import { publish } from '../events/pubsub'
import { UserLoggedInEvent } from '../events/user-logged-in-event'

const LoginComponent = () => {
    const things = () => {
        publish(new UserLoggedInEvent({ name: "Mr. Magick" }))
    }
    return (
        <div>
            <p>Welcome!</p>
            <button onClick={things} >Sign in</button>
        </div>);
};

export default LoginComponent;