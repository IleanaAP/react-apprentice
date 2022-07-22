import React from 'react';
import PropTypes from 'prop-types';


function TimeBar() {
    const date = new Date();
    const time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    return (
        <>
            <h3 className='timebar'>{time}</h3>
        </>
    );
}

export default TimeBar;