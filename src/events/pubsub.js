import { useEffect } from 'react';

export function OnEvent(event, handler) {
    useEffect(() => {
        const handle = subscribe(event, handler);

        return function cleanup() {
            handle.unsubscribe();
        }
    });
}

export function subscribe(eventClass, handler) {
    let handle = function (event) {
        handler(...event.detail);
    };
    document.addEventListener(eventClass.name, handle, { passive: true });
    return {
        unsubscribe: function unsubscribe() {
            document.removeEventListener(eventClass.name, handle);
        }
    };
}
export function publish(event) {
    let nativeEvent = new CustomEvent(event.constructor.name, { detail: event.args });
    document.dispatchEvent(nativeEvent);
}