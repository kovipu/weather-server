import React from 'react';

const temperature = ({ temperature }) => {
    let temp;
    if (temperature === undefined) {
        temp = "No connection to server"
    } else {
        const pos = temperature.length - 2;
        temp = temperature.substring(0, pos) + '.' + temperature.substring(pos);
    }
    return (
        <div className="Temperatures">
            <h1>Temperature is: {temp}°C</h1>
        </div>
    );
}

export default temperature;