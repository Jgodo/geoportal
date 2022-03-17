// el app.js es el componennte principal
// importando React luego importar los css con estilos
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// importamos la pagina, home,mapviewer, download, contactus, gallery
import Home from './pages/Home';
import MapViewer from './pages/MapViewer';
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';

// importamos la barra de navegacion (Navbar y sidebar), footer (parte de abajo)
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Footer from './components/Footer';

function App() {
    // useState se usa para tener un estado, al cambiar la forma de la ventana, maneja el estado de la animación del side bar
    // siendo isopen= a true o falsa, siendo el true cueando se activa la aniamacion
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <BrowserRouter>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <Routes>
              {/* estas son las rutas de la pagina web */}
                <Route path="/" element={<Home />} />
                <Route path="/visor" element={<MapViewer />} />
                <Route path="/galeria" element={<Gallery />} />
                <Route path="/contactanos" element={<ContactUs />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
// en resumen este es el layer principal de la pagina web 

export default App;