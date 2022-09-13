import React, { useState } from "react";
import { publish } from '../events/pubsub'
import { UserLoggedOutEvent } from '../events/user-logged-out-event'

const LogoutComponent = () => {
    const things = () => {
        publish(new UserLoggedOutEvent({}))
    }
    return (
        <div>
            <p>Welcome!</p>
            <a onClick={things} >&gt;Logout</a>
        </div>);
};

export default LogoutComponent;