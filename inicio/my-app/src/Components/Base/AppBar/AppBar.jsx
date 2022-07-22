import React from 'react';
import PropTypes from 'prop-types';
import './AppBar.css';
import TimeBar from './TimeBar';

AppBar.propTypes = {
    //propiedades que se le deben pasar
    title: PropTypes.string,
    subtitle: PropTypes.string,
    hour: PropTypes.number
};

//props lista por default que tienen los componentes
//los tres puntos le dice que jale todos los props que tienen los componentes por default (los va a tener disponibles pero no guardados)
//con los {} se dice que se le pasa un objeto
function AppBar({title = "TITULO", subtitle = "Subtitulo", time, ...props}) {
    return (
        <div className='appbar'>
            <h1>{title}</h1>
            <h4>{subtitle}</h4>
            <h3>{time}</h3> {/*muestra nuestro componente de la hora*/}
        </div>
    );
}

export default AppBar;