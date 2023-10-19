import React, { useState } from 'react';


const Experiencia = (props) => {
  const [isHovered, setIsHovered] = useState(false);//hook de estado para el raton

  return (
    <>
      <div
        className='container__elements' style={{ width:'400px',height:'400px',display: 'flex', flexDirection: 'column' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className='experiencia__contenedor' style={{ backgroundColor: '#ADD8E6', padding: '10px',width:'500px',height:'400px', borderRadius: '10px', textAlign: 'justify' }}>
          {isHovered && <p className='info__exp_texto' style={{ margin: '0px',  fontSize: '14px',height:'90px',width:'100%' }}>{props.info}</p>}
        </div>
        <div className='experiencia__contenedor__info' style={{backgroundColor:'black', color: 'white',height:'400px',width:'500px',display: 'flex', flexDirection: 'column', justifyContent: 'space-around', padding: '10px' }}>
          <h2 className='experiencia__titulo'>{props.titulo}</h2>
          <img src={props.imagenUrl} alt="Logo" style={{ width: '200px', height:'150px'}} />
          <p className='experiencia__info' style={{ width:'400px' }}>{props.fecha}</p>
        </div>
      </div>
      <div className='espacio'></div>
    </>
  );
};

export default Experiencia;

