import React from "react";
import { createBrowserRouter } from "react-router-dom";

import InicioScreen from "./screens/inicio";
import MainLayout from "./layouts/main";
import PortafolioScreen from "./screens/portafolio";
import HabilidadesScreen from "./screens/habilidades";
import TrayectoriaScreen from "./screens/trayectoria";
import ContactoScreen from "./screens/contacto";

import { Navigate } from "react-router-dom";


const router=createBrowserRouter([
    {
        path:'/',
        element:<Navigate to="/inicio"/>//con esto me aseguro que al ir a la ruta principal me dirija a inicio
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