import React, { useEffect, useState } from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import ImgLogo from '../../assets/Logo A Hora Certa.jpg';
import Perfil from '../../assets/perfil.png';
import Bars from '../../assets/bars.png'

function useWindowWidth () {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth)
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },[]);
  return width
}
function Header() {
  const [showLinks, setShowLinks] = useState(false);

  const handleClick = () => {
    setShowLinks(prev => !prev); 
  };

  const width = useWindowWidth()
  const isMobile = width < 769;
  if (!isMobile) {
    return (
    <header className="header">
    <div id="imgLogo" className="logo">
      <img src={ImgLogo} alt="Logo A Hora Certa" />
    </div>
      <ul className="dropDown">
        <li id="first">
          <Link to="/home">Diárias</Link>
        </li>
        <li id="second">
          <Link to="/cadastros">Cadastros</Link>
        </li>
        <li id="third">
        <Link to="/pendencias">Pendências</Link>
        </li>
      </ul>
      <div id='divPerfil'>
        <img src={Perfil} alt="" />
        <p>Mário Sérgio
        </p>
      </div>
    </header>
  );
  }
  else {
    return (
      <header className="header">
    <div onClick={handleClick} id="imgLogo" className="logo">
      <img id='bars' src={Bars} alt="Logo A Hora Certa" />
    {showLinks && (
        <ul id='teste'>
          <li><Link to="/home">Diárias</Link></li>
          <li><Link to="/cadastros">Cadastros</Link></li>
          <li><Link to="/pendencias">Pendências</Link></li>
        </ul>
      )}
    </div>
      <div id='divPerfil'>
        <img src={Perfil} alt="" />
        <p>Mário Sérgio</p>
      </div>
    </header>
    )
  }
  
}

export default Header;
