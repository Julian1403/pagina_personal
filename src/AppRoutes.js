import React from "react";
import { createBrowserRouter } from "react-router-dom";

import InicioScreen from "./screens/inicio/index";
import MainLayout from "./layouts/main";
import PortafolioScreen from "./screens/portafolio/index.jsx";
import HabilidadesScreen from "./screens/habilidades";
import TrayectoriaScreen from "./screens/trayectoria";
import ContactoScreen from "./screens/contacto";

import { Navigate } from "react-router-dom";


const router=createBrowserRouter([
    {
        path: '/pagina_personal',
element: <Navigate to="/pagina_personal/inicio" />
//con esto me aseguro que al ir a la ruta principal me dirija a inicio
    },
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'inicio',
                element:<InicioScreen/>
            },
            {
                path:'portafolio',
                element:<PortafolioScreen/>
            },
            {
                path:'habilidades',
                element:<HabilidadesScreen/>
            },
            {
                path:'trayectoria',
                element:<TrayectoriaScreen/>
            },
            {
                path:'contacto',
                element:<ContactoScreen/>
            }
        ]}
]);
export default router;


