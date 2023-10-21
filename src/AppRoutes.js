import React from "react";
import { createBrowserRouter } from "react-router-dom";

import InicioScreen from "./screens/inicio/index";
import MainLayout from "./layouts/main";
import PortafolioScreen from "./screens/portafolio/index.jsx";
import HabilidadesScreen from "./screens/habilidades";
import TrayectoriaScreen from "./screens/trayectoria";
import ContactoScreen from "./screens/contacto";

import { Navigate } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/pagina_personal/', // Agrega el nombre de la carpeta base
        element: <Navigate to="/pagina_personal/inicio" />
    },
    {
        path: '/pagina_personal/', // Agrega el nombre de la carpeta base
        element: <MainLayout />,
        children: [
            {
                path: 'inicio',
                element: <InicioScreen />
            },
            {
                path: 'portafolio',
                element: <PortafolioScreen />
            },
            {
                path: 'habilidades',
                element: <HabilidadesScreen />
            },
            {
                path: 'trayectoria',
                element: <TrayectoriaScreen />
            },
            {
                path: 'contacto',
                element: <ContactoScreen />
            }
        ]
    }
]);

export default router;