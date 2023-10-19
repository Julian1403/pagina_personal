import React from 'react';
import myphoto from '../../assets/yo.png'
import udea from '../../assets/udea.png'
import usa from '../../assets/usa.png'
import udemy from '../../assets/udemy.png'
import platzi from '../../assets/platzy.png'
import analis from '../../assets/analis.png'
import maque from '../../assets/maque.png'

import './index.css'; // Importa el CSS

//import componentes 
import Formacion from './formacion'
import Experiencia from './experiencia'


const TrayectoriaScreen = () => {

  const analistaInfo = "Durante mi período de práctica académica en el Hospital Alma Mater de Antioquia, sede Clínica León XIII, desempeñé diversas funciones como analista de datos. Mi labor se centró en gran medida en la utilización de programas como R Studio y Tableau para implementar un modelo de segmentación que permitiera identificar riesgos. Al mismo tiempo, tenía la responsabilidad de evaluar el cumplimiento de las normativas y brindar apoyo en la estructuración de enfoques. También participé activamente en la creación de historias de usuario para mejorar el software de la institución."

  const maquetadoInfo = "Trabajo como freelancer en la campaña de un candidato a la alcaldía de Rionegro. Colaboro en el diseño, actualización y creación de páginas web utilizando WordPress para el partido político. Además, estoy a cargo del desarrollo de la página web del candidato a la alcaldía para el cual estoy trabajando. Asimismo, contribuyo en la gestión de redes sociales y en la creación de publicidad para el candidato."


    return (
        <>
    <div className='page'>
      <div className="perfil__profesional" style={{ backgroundColor: 'black' }}>
        <img className='perfil__photo' alt="Foto Personal" src={myphoto} style={{ width: '200px', height: '150px', marginLeft: '50px' }}/>
        <div className='info__perfil' style={{  color: 'white' }}>
          <h1 className='formacion__titulo light__text'>Perfil Profesional</h1>
          <p className='formacion__text light__text' style={{ textAlign: 'justify' }}>Ingeniero con gran pasión por el conocimiento y un deseo constante de capacitarme y aprender cada día más. Busco crecer tanto profesional como personalmente, siempre dispuesto a recibir sugerencias y con un compromiso inquebrantable por realizar cada tarea de la mejor manera posible, obteniendo así resultados altamente satisfactorios en todas las actividades en las que participo. </p> <br />
          <p className='formacion__text light__text' style={{ textAlign: 'justify' }}>Como Bioingeniero con experiencia en diversos sectores industriales y académicos, poseo excelentes habilidades para el trabajo en equipo y la colaboración comunitaria. Mi nivel de inglés es B1, aunque actualmente estoy dedicado a clases personalizadas para mejorarlo. Manejo el paquete Office con destreza y disfruto de la práctica del deporte en especial el fútbol en mis tiempos libres. Me considero una persona altamente responsable, siempre dispuesta a aprovechar cada oportunidad para adquirir experiencia y avanzar tanto en el ámbito laboral como en el personal. </p> <br />
          <p className='formacion__text light__text' style={{ textAlign: 'justify' }}>He adquirido habilidades en desarrollo FullStack gracias a las materias electivas de mi carrera profesional cursadas en la UdeA y a cursos y diplomados que he tomado en Udemy y MinTic, este último con la Universidad Sergio Arboleda. He aprendido a trabajar con HTML, CSS y JavaScript; utilizo principalmente el framework Express de Node JS para el Backend y las librerías React JS y Angular para el Frontend. Además, cuento con conocimientos sólidos en bases de datos relacionales y no relacionales para la creación de proyectos robustos. Estoy comprometido a seguir ampliando mis habilidades y conocimientos en este campo. </p>
        </div>
      </div>


      <div className='container__curriculum fondo__claro' style={{ backgroundColor: 'white', width:'100%', height:'700px'}}>
        <h1 className='formacion__titulo'>Experiencia laboral</h1>
        <div className='experiencia__lista__container' style={{display: 'flex', justifyContent:'space-between' }}>
          <Experiencia titulo="Analista de datos" nombreLogo="newspaper" fecha="04/2022 - 10/2022" info={analistaInfo} imagenUrl={analis}  />
          <Experiencia  titulo="Maquetado de sitios" nombreLogo="cube" fecha="06/2023 - Actual" info={maquetadoInfo} imagenUrl={maque} />
        </div>
      </div>

      <div className='fondo__oscuro container__curriculum' style={{ backgroundColor: 'black'}}>
        <h1 className='formacion__titulo light__text' style={{ color: 'white' }}>Formacion</h1>
        <div className='formacion__lista'>
          <Formacion image={udea} titulo="Bioingenieria" info="2023 - UdeA" alt="Logo UdeA" />
          <Formacion image={usa} titulo="Diplomado: Fundamentos de programación" info="2022 - USA" alt="Logo USA " />
          <Formacion image={usa} titulo="Diplomado: Desarrollo de aplicaciones web" info="2022 - USA" alt="Logo USA " />
          <Formacion image={udemy} titulo="Angular: de cero a experto" info="2022 - Udemy" alt="Logo Udemy" />
          <Formacion image={udemy} titulo="Programación en JAVA" info="En curso - Udemy" alt="Logo Udemy" />
          <Formacion image={platzi} titulo="FullStack Developer" info="En curso - Platzi" alt="Logo Platzi" />
        </div>
      </div>

    </div>
        </>
      );
    };
export default TrayectoriaScreen