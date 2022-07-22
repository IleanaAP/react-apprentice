import React from 'react';
import PropTypes from 'prop-types';

Boton.propTypes = {
    title: PropTypes.string,
    action: PropTypes.func
};

function Boton({title, action, props}) {
    return (<button onClick={action}>{title}</button>);
}

export default Boton;