import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './habilidades.css'; // Importa el CSS

//intentar hacerlo con comunicación entre componentes y usando los iconos de react

import logo1 from '../../assets/html.png'; // Ruta del logo
import logo2 from '../../assets/js.png'; // Ruta del logo
import logo3 from '../../assets/java.png'
import logo5 from '../../assets/python.png'
import logo6 from '../../assets/r.png'
import logo7 from '../../assets/css.png'
import logo8 from '../../assets/sql.png'
import logo9 from '../../assets/mongo.png'
import logo10 from '../../assets/tabl.png'
import logo11 from '../../assets/look.png'
import logo12 from '../../assets/react.png'


import logo13 from '../../assets/ang.png'

import logo15 from '../../assets/equi.png'
import logo16 from '../../assets/ada.png'
import logo17 from '../../assets/crea.png'
import logo18 from '../../assets/apre.png'
import logo19 from '../../assets/res.png'
import logo20 from '../../assets/sol.png'

const habilidadesDuras = [
 { title: 'HTML', logo: logo1, porcentaje: 70 },
  { title: 'JavaScript', logo: logo2, porcentaje: 80 },
  { title: 'JAVA', logo: logo3, porcentaje: 50 },
  { title: 'Python', logo: logo5, porcentaje: 75 },
  { title: 'RStudio', logo: logo6, porcentaje: 65 },
  { title: 'CSS', logo: logo7, porcentaje: 75 },
  { title: 'SQL', logo: logo8, porcentaje: 80 },
  { title: 'Mongo DB', logo: logo9, porcentaje: 85 },
  { title: 'Tableau', logo: logo10, porcentaje: 90 },
  { title: 'Looker', logo: logo11, porcentaje: 90 },
  { title: 'React JS', logo: logo12, porcentaje: 85 },
  { title: 'Angular', logo: logo13, porcentaje: 75 },
  
];

const habilidadesBlandas = [
  { title: 'Trabajo en equipo', logo: logo15 },
  { title: 'Adaptabilidad', logo: logo16 },
  { title: 'Creatividad', logo: logo17  },
  { title: 'Aprendizaje constante', logo: logo18  },
  { title: 'Responsabilidad', logo: logo19  },
  { title: 'Solidaridad', logo: logo20  },

  
];

const renderHabilidadesDuras = (habilidades) => {
    return habilidades.map((habilidad, index) => (
      <Col key={index}>
        <Card style={{ width: '130px', height: '160px' }} className='habilidad__card'>
          <Card.Body className='d-flex flex-column align-items-center'>
            <Card.Title style={{ width: '120px', height: '20px', marginTop: '-30px',  border: 'none',textAlign: 'center',textDecoration: 'none'}} className='habilidad__title'>
              {habilidad.title}
            </Card.Title>
            <div className='mb-auto' style={{ marginTop: '10px' }}>
              <Card.Img
                variant='top'
                src={habilidad.logo}
                alt={`Logo de ${habilidad.title}`}
                style={{ width: '66px', height: '66px' }}
              />
            </div>
            <div className="progress-container">
              <div className="progress" style={{ width: '120px', height: '16px' }}>
                <div className="progress-bar" role="progressbar" style={{ width: `${habilidad.porcentaje}%` }}>
                  {habilidad.porcentaje}%
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    ));
  };
  
  
  
  const renderHabilidadesBlandas = (habilidades) => {
    return habilidades.map((habilidad, index) => (
      <Col lg={4} key={index}>
        <Card style={{ width: '260px', height: '200px' }}className='habilidad__card habilidad__blanda'>
        <Card.Title  style={{ border: 'none', width: '230px', height: '50px' }}>{habilidad.title}</Card.Title>
          <Card.Img variant='top' src={habilidad.logo} alt={`Logo de ${habilidad.title}`}style={{ width: '66px', height: '66px', marginTop: '10px' }} />
        </Card>
      </Col>
    ));
  };
  
  const HabilidadesScreen = () => {
    return (
        <>
     <div style={{backgroundColor: "#FFFFFF" ,width: '100%', height: '500px'}}>
        <Container >
        <div >  
        <h2 style={{ color: 'black' , textAlign: 'center', width: '100%', height: '60px',marginTop:'10px'}} className='habilidades__section'>Habilidades Duras</h2>
        <Row>
          {renderHabilidadesDuras(habilidadesDuras)}
        </Row>
        </div>
        </Container>
        </div> 
       <div style={{backgroundColor: "#000000" ,width: '100%', height: '600px'}}>
        <Container > 
        <div className="d-flex flex-column align-items-center" > 
        <h2 style={{ color: 'white' , textAlign: 'center', width: '100%', height: '60px',marginTop:'15px'}}className='habilidades__section'>Habilidades Blandas</h2>
        <Row className='justify-content-center text-center'>
          {renderHabilidadesBlandas(habilidadesBlandas)}
        </Row>
        </div>
        </Container>
    </div>
        </>
    );
  };
  
  export default HabilidadesScreen;