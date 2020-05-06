import React from 'react';
import { useSelector } from 'react-redux';

const Alert = () => {
    const alert = useSelector(state => state.app.alert);

    return (alert &&
        <div
            className="fixed-bottom alert alert-primary text-center"
            role="alert"
        >
            {alert}
        </div>);
}

export default Alert;