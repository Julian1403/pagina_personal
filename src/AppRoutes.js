import React from "react";
import { createBrowserRouter } from "react-router-dom";

import InicioScreen from "./screens/inicio/index";
import MainLayout from "./layouts/main";
import PortafolioScreen from "./screens/portafolio/index.jsx";
import HabilidadesScreen from "./screens/habilidades";
import TrayectoriaScreen from "./screens/trayectoria";
import ContactoScreen from "./screens/contacto";



const router = createBrowserRouter([
    {
        path: '/pagina_personal/',
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
