import React from 'react';
//importo el icono que utilizo de react icons:
import { FaXTwitter} from "react-icons/fa6";


import 'font-awesome/css/font-awesome.min.css';

import { NavLink } from 'react-router-dom';//esto es lo que reemplaza el href en react
import { Container, Row, Col } from 'react-bootstrap';



const Footer = () => {
    return(
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                    &copy; Julián Castaño {new Date().getFullYear()} {'  '}
            <NavLink to="https://github.com/Julian1403" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github"></i>
            </NavLink>
            {' | '}
            <NavLink to="https://www.linkedin.com/in/jc1403j/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin"></i>
            </NavLink>
            {' | '}
            < NavLink to="https://www.x.com/14_03j" target="_blank" rel="noopener noreferrer">
            <FaXTwitter/>
            </NavLink>
                    </Col>
                </Row>
            </Container>
        </footer>
    )

}

export default Footer; //acá exporto la cte Footer