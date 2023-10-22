import React from 'react';
import {  Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './inicio.css'; // Importa el CSS
import Trabajo from './trabajo';  // Ajusta la ruta según la ubicación real de Trabajo.js
import fel from '../../assets/fel.png'
import fel1 from '../../assets/fel1.jpg'
// import monos from '../../assets/fondojulian.png'
import ImagenCiclica from './imagenciclica'; 

const InicioScreen = () => {
  const backgroundStyle = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "#e1f3f1",
    backgroundColor: "#FFFFFF",
    color: 'black',  // Color del texto
  };
  

  const trabajos = [
    {
      title: 'E-Commerce Zapatos',
      description: 'Descripción del trabajo 1',
      imageUrl: fel,
      workUrl: 'https://github.com/Julian1403/e-commerce-zapatos',
      demoUrl: 'URL de la demostración para el trabajo 1'
    },
   
    {
      title: 'Aplicación pedidos restaurante',
      description: 'Descripción del trabajo 2',
      imageUrl: fel1,
      workUrl: 'https://github.com/Julian1403/aplicacion-pedidos-restaurante',
      demoUrl: 'https://santimartz12.github.io/E_Commerce/'
    }
  ];

  return (
    <>
    <div  style={backgroundStyle}>
     <div>
      {/* <img src={monos} alt="Mono" style={{ display: 'flex', width: '100%', height: 'auto',marginTop: '-5%' }} /> */}
      <ImagenCiclica />
      </div>
      <div style={{ width: '100%', height:'500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1 className='presentacion__titulo' style={{ marginTop:'50px', fontSize: '25px'}}>¡Hola! Mi nombre es Julián Castaño. Soy Bioingeniero y Desarrollador FullStack Jr.</h1>
      <p className='presentacion__texto'style={{ width:'800px', height:'100%',  fontSize: '20px'}}> Soy una persona dispuesta a aprender, con gran capacidad para adaptarme a
diferentes entornos y trabajar en equipo. De aprendizaje rápido y con conocimientos en
áreas como: Lenguajes de programación, analítica de datos y normas
técnicas; esto  me motiva a asumir nuevos retos con disciplina y dinamismo. He trabajado en el área de analítica de datos realizando la práctica profesional en la Clínica Leon XIII, por lo que tengo experiencia en el manejo de algunos lenguajes de programación. </p>
      
      <p>¡Explora mi sitio y descubre todo lo que tengo para ofrecer!</p>
      <Link to="/pagina_personal/portafolio" className="btn btn-primary" style={{ margin: '10px 10px 30px 10px' }}>Ir al Portafolio</Link>
      </div>
      </div>
      
      <div style={{backgroundColor: "#000000" ,width: '100%', height: '600px'}} >
      <Container>
        <div style={{ width: '100%', height:'500px',  paddingTop: '5px'}} >
      <h2 style={{ color: 'white' , textAlign: 'center', marginTop:'20px', marginBottom:'60px'}} >Algunos  proyectos desarrollados</h2>
      
        <div >
        {/* esta clase en row me ayuda a central vertical y horizontalmente */}
          <Row  className="justify-content-center align-items-center"> 
          {trabajos.map((trabajo, index) => (
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

export default InicioScreen;
