import './style.css'
import { Link } from 'react-router-dom';
import LogInButton from '../../components/logInButton';
import Eye from '../../assets/eye.png'
import { useState } from 'react';

function LogIn() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('')
  function submitLogin (event) {
    event.preventDefault()
  }
  return (  
      <main>
      <form onSubmit={submitLogin} className='formLogin' action="">
        <h1>Entrar</h1>
        <div>
          <label htmlFor="Login">Email</label>
          <input id='Login' value={login} name='Login' type="text" />
        </div>
        <div id='senhaDiv'>
            <label htmlFor="Senha">Senha</label>
              <input value={senha} id='Senha' name='Senha' type="password" />
            <img id='eye' src={Eye} alt=""/>
        </div>
        <LogInButton text="Entrar"/>
        <Link to="/cadastrar_se">cadastrar-se</Link>
      </form>
      </main>
  )
}

export default LogIn
