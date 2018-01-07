import React from 'react';

const temperature = (props) => {
    return (
        <div className="Temperatures">
            <h1>Temperature is:</h1>
            {props.temperatures.map(temperature =>
                <div key={temperature.dateTime}>{temperature.temperature}</div>
            )}
        </div>
    );
}

export default temperature;