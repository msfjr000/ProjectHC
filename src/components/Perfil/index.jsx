import React, { useState, useEffect } from 'react';
import './style.css';
import Img from '../../assets/perfil.png';

function Perfil({day}) {
  const [employerMorning, setEmployerM] = useState('');
  const [employerAfternoon, setEmployerA] = useState('');

  useEffect(() => {
    const today = new Date();
    const todayString = today.getDay(); 

    switch (todayString) {
      case 0:
        setEmployerM("Ninguém");
        setEmployerA("Ninguém");
        break;
      case 1:
        setEmployerM("Cássio");
        setEmployerA("Daniel");
        break;
      case 2:
        setEmployerM("Letícia");
        setEmployerA("Mário");
        break;
      case 3:
        setEmployerM("Mário");
        setEmployerA("Emyle");
        break;
      case 4:
        setEmployerM("Elísia");
        setEmployerA("Cássio");
        break;
      case 5:
        setEmployerM("Letícia");
        setEmployerA("Elísia");
        break;
      case 6:
        setEmployerM("Ninguém");
        setEmployerA("Ninguém");
        break;
      default:
        setEmployerM("?");
        setEmployerA("?");
    }
  }, []); 
  if (day === "morning") {
    return (
      <div id='perfil'>
      <img src={Img} alt="Foto de perfil" />
      <p id='morningEmployer'>{employerMorning}</p>
      <p>Manhã</p>
    </div>
    )
  } else if (day === 'afternoon') {
    return (
      <div id='perfil'>
      <img src={Img} alt="Foto de perfil" />
      <p id='afternoonEmployer'>{employerAfternoon}</p>
      <p>Tarde</p>
    </div>
    )
  }
}

export default Perfil;
