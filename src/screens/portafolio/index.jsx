import React from 'react';
import Trabajo from '../inicio/trabajo'
import { Row,Container } from 'react-bootstrap';
import './index.css'
import fel from '../../assets/fel.png'
import fel1 from '../../assets/fel1.jpg'
import sitio from '../../assets/sitio.png'

const PortafolioScreen = () => {
    //se crean los objetos con la data de cada proyecto frontend
  const trabajosf = [
    {
        title: 'E-commerce Zapatos',
        imageUrl: fel,
        description: 'Descripción del proyecto 1...',
        workUrl: 'https://github.com/Julian1403/e-commerce-zapatos',
        demoUrl: 'https://demo.tuproyecto1.com'
    },
    {
    title: 'App pedidos restaurante',
      imageUrl: fel1,
      description: 'Descripción del proyecto 1...',
      workUrl: 'https://github.com/Julian1403/aplicacion-pedidos-restaurante',
      demoUrl: 'https://demo.tuproyecto1.com'
      },
    {
        title: 'Página personal',
        imageUrl: sitio,
        description: 'Descripción del proyecto 1...',
        workUrl: 'https://github.com/tuusuario/tuproyecto1',
        demoUrl: 'https://demo.tuproyecto1.com'
    },
    // Agrega más proyectos
  ];
  const trabajosb = [
     //se crean el arreglo con la data de cada proyecto backend
    {
      title: 'App pedidos restaurante',
      imageUrl: fel1,
      description: 'Descripción del proyecto 1...',
      workUrl: 'https://github.com/Julian1403/pedidos_restaurante_backend',
      demoUrl: 'https://github.com/Julian1403/pedidos_restaurante_backend'
    }
  ];

  return (
    <>
    <div style={{backgroundColor: "white" ,width: '100%', height: '600px'}} >

    <Container>
      <div style={{ width: '100%', height:'500px',  paddingTop: '5px'}} >
    <h2 style={{ color: 'black' , textAlign: 'center', marginTop:'20px', marginBottom:'60px'}} ><span className='orange__text--animation'>PROYECTOS FRONTEND</span></h2>
    
      <div style={{ color: 'black', fontSize: '24px'}} >
      {/* esta clase en row me ayuda a central vertical y horizontalmente */}
        <Row  className="justify-content-center align-items-center" > 
        {trabajosf.map((trabajo, index) => (
          <Trabajo
            key={index}
            title={trabajo.title}
            // description={trabajo.description}
            imageUrl={trabajo.imageUrl}
            workUrl={trabajo.workUrl}
            demoUrl={trabajo.demoUrl}
          />
        ))}
        </Row>
      </div>
      </div>
      </Container>
      </div>


      <div style={{backgroundColor: "#000000" ,width: '100%', height: '600px'}} >
    <Container>
      <div style={{ width: '100%', height:'500px',  paddingTop: '5px'}} >
    <h2 style={{ color: 'white' , textAlign: 'center', marginTop:'20px', marginBottom:'60px'}} ><span className='orange__text--animationtrr'>PROYECTOS BACKEND</span></h2>
    
      <div >
      {/* esta clase en row me ayuda a central vertical y horizontalmente */}
        <Row  className="justify-content-center align-items-center"> 
        {trabajosb.map((trabajo, index) => (
          <Trabajo
            key={index}
            title={trabajo.title}
            // description={trabajo.description}
            imageUrl={trabajo.imageUrl}
            workUrl={trabajo.workUrl}
            demoUrl={trabajo.demoUrl}
          />
        ))}
        </Row>
      </div>
      </div>
      </Container>
      </div>
      </>
  );
};

export default PortafolioScreen;
