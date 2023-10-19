import React from 'react';
import './inicio.css';
import monos from '../../assets/fondojulian.png';
import mono from '../../assets/disr.png';

const ImagenCiclica = () => {
  return (
    <div className='desplazamiento__container' style={{ marginTop: '0px' }}>
      <div className='desplazamiento'>
        <img src={mono} alt='Imagen 1' className='imagen' />
        <img src={monos} alt='Imagen 2' className='imagen' />
        <img src={mono} alt='Imagen 1' className='imagen' />
      </div>
    </div>
  );
};

export default ImagenCiclica;







