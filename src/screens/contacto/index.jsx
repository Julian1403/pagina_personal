import React from 'react';
import './contacto.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  FaWhatsapp, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa'; // Importa los íconos


const ContactoScreen = () => {
  return (
    <div>
      <div className='fondo__claro' style={{ backgroundColor: 'white'}}>
        <section className='redes__contacto'>
          <h1 className='titulo__redes'>Redes de Contacto</h1>
          <div className='contacto__icons__lista'>
            <a
              href='https://api.whatsapp.com/send?phone=3128454678'
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon whatsapp'
            >
              <FaWhatsapp className='icon' />
            </a>
            <a
              href='https://www.linkedin.com/in/jc1403j/'
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon linkedin'
            >
              <FaLinkedinIn className='icon' />
            </a>
            <a
              href='https://github.com/Julian1403'
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon github'
            >
              <FaGithub className='icon' />
            </a>
            <a
              href='mailto:julircv314@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon gmail'
            >
              <FaEnvelope className='icon' />
            </a>

          </div>
        </section>
      </div>
<section id="contacto" style={{ backgroundColor: 'black', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '600px' }}>
  <div style={{ maxWidth: '500px', width: '100%', textAlign: 'center', marginTop: '-70px' }}>
    <h2 style={{ marginBottom: '20px' }}>CONTACTO</h2>
    <p style={{ marginBottom: '20px' }}>
      Ingresa tus datos en el siguiente formulario. <br />Me pondré en contacto con vos lo más pronto posible.
    </p>

    <form action="https://formsubmit.co/julircv314@gmail.com" method="POST">
      <div style={{ marginBottom: '15px' }}>
        <input type="text" id="nombreapellido" name='Nombre' placeholder="Nombre" style={{ width: '100%' }} required />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <input type="email" id="email" name='Email' placeholder="Correo Electrónico" style={{ width: '100%' }} required />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <input type="text" id="Asunto" name='Asunto' placeholder="Asunto" style={{ width: '100%' }} required />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <textarea id="mensaje" name='Mensaje' required rows="6" placeholder="Mensaje" style={{ width: '100%' }}></textarea>
      </div>

      <button
  type="submit"
  style={{
    width: '100%',
    padding: '15px',
    borderRadius: '5px',
    backgroundColor: '#007BFF',
    color: 'white',
    fontSize: '1.2em',
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.3s, transform 0.2s',
    transformOrigin: 'center',
  }}
  onMouseOver={(e) => {(e.target.style.backgroundColor = '#0056b3');e.target.style.transform = 'scale(1.05)';}}
  onMouseOut={(e) => {(e.target.style.backgroundColor = '#007BFF');e.target.style.transform = 'scale(1)';}}
>
  Enviar Mensaje
</button>

    </form>
  </div>
</section>


    </div>
  );
};

export default ContactoScreen;

