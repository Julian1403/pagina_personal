// formacion.jsx

import React from 'react';

const Formacion = (props) => {
  return (
    <div className='formacion__contenedor'  >
    <div className="formacion__item" style={{ backgroundColor: 'white' }}>
        <img alt={props.alt} src={props.image} className="formacion__lista__imagen" />
    </div>
    <h3 className='formacion__lista__nombre' style={{ color: 'white' }}>{props.titulo}</h3>
    <p className='formacion__lista__fecha' style={{ color: 'white' }}>{props.info}</p>

</div>
  );
};



export default Formacion;
