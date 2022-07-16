import React from 'react';
import PropTypes from 'prop-types';
import './AppBar.css';

AppBar.propTypes = {
    //propiedades que se le deben pasar
    title: PropTypes.string,
    subtitle: PropTypes.string
};

//props lista por default que tienen los componentes
//los tres puntos le dice que jale todos los props que tienen los componentes por default (los va a tener disponibles pero no guardados)
//con los {} se dice que se le pasa un objeto
function AppBar({title = "TITULO", subtitle = "Subtitulo", ...props}) {
    return (
        <div className='appbar'>
            <h1>{title}</h1>
            <h4>{subtitle}</h4>
        </div>
    );
}

export default AppBar;