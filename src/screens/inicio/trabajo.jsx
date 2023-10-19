import React from 'react';
import {  Col,  Card } from 'react-bootstrap';
import './inicio.css'; // Importa tu archivo CSS
import { Link } from 'react-router-dom';

const Trabajo = ({ title, description, imageUrl, workUrl, demoUrl }) => {
  return (
    <Col lg={4}>
      <Card className='trabajo__card'  style={{ height: '400px' }}>
        <Card.Body style={{ width: '350px', height: '200px' }}>
          <Card.Title  className='text-center' style={{width:'318px', height:'24px'}}>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to={demoUrl} target="_blank" rel="noopener noreferrer">
          <Card.Img  src={imageUrl} style={{ width: '318px', height: '218px' }}  />
          </Link>
          <div className="buttons-container" style={{ width: '100%', margin: '40px 0 0 0', height: '46px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button style={{ fontSize: '15px'}}className="btn btn-primary" onClick={() => window.open(workUrl, '_blank', 'noopener noreferrer')}>
              Ver repositorio
            </button>
            <button style={{ fontSize: '15px' }} className="btn btn-primary" onClick={() => window.open(demoUrl, '_blank', 'noopener noreferrer')}>
              Ver demostración
            </button>
          </div>
        </Card.Body>
      </Card>
    </Col>
    
  );
};

export default Trabajo;

