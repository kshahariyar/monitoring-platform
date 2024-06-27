import React from 'react';
import { useSelector } from 'react-redux';

const Alerting = () => {
    const alerts = useSelector((state) => state.alerts.alerts);

    return (
        <div>
            <h2>Alerting</h2>
            <ul>
                {alerts.map((alert, index) => (
                    <li key={index}>{alert.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default Alerting;
