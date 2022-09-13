import { useEffect } from 'react';
import { subscribe } from './pubsub'
import { UserLoggedInEvent } from './user-logged-in-event'

export function OnLoginEvent(handler) {
    useEffect(() => {
        const handle = subscribe(UserLoggedInEvent, handler);

        return function cleanup() {
            handle.unsubscribe();
        }
    });
}