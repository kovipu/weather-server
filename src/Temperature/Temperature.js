import React from 'react';

const temperature = ({ temperature }) => {
    return (
        <div className="Temperatures">
            <h1>Temperature is: {temperature}°C</h1>
        </div>
    );
}

export default temperature;