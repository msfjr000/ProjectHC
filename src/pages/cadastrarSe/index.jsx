import { useEffect, useState, useRef } from 'react';
import './styles.css'
import { data, Link } from 'react-router-dom'
import api from '../../service/api';
import { useNavigate } from 'react-router-dom';
import PopUp from '../../components/popUp'

function CadastrarSe () {
    const [emailValue, setEmailValue] = useState('')
    const [userValue, setUserValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [confirmValue, setConfirmValue] = useState('')
    const [erreur, setErreur] = useState('')
    const [msg, setMsg] = useState('')
    const timeoutRef = useRef(null);

    const handleEmailChange = (event) => {setEmailValue(event.target.value);};
    const handleUserChange = (event) => {setUserValue(event.target.value);};
    const handlePasswordChange = (event) => {setPasswordValue(event.target.value);};
    const handleConfirmChange = (event) => {setConfirmValue(event.target.value);};
    
    const verifyPassword = passwordValue === confirmValue
    const userData = {
        name: userValue,
        email: emailValue,
        password: passwordValue
    }
    
    const navigate = useNavigate()
    
    async function handleSubmit (event) {
        event.preventDefault();
        if(!emailValue || !userValue || !passwordValue || !confirmValue) {
            setMsg("Preencha todos os dados!")
            return abrirPopup()
        }
        if (!verifyPassword) {
            setMsg("Senhas não coincidem")
            return abrirPopup()
        } 
        try {
            const verifyUser = await api.get(`/usersExists?name=${userValue}`)
            if (verifyUser.name != undefined || verifyUser.email != undefined) {
                return alert(`User Already Exists ${verifyUser.name}`)
            } else if (verifyUser.name == undefined) {
                api.post("/userCreate", userData)
                    .then(
                    res =>{
                        setMsg("Usuário Criado com sucesso")
                        abrirPopup()
                        setTimeout(() =>{
                            navigate('/login')
                        }, 2000) 
                        }
                    )
                    .catch(
                    err => {
                        setErreur(err.status)
                        if(err.status == 409) {
                            setMsg("Este usuário já está cadastrado")
                        } 
                            return abrirPopup()
                        }
                    )
            }
        } catch (error) {
            return console.log(error)
        }
    }
    const [mostrarPopup, setMostrarPopup] = useState(false)
    const abrirPopup = () => {
        setMostrarPopup(true)
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        timeoutRef.current = setTimeout(() =>{
            setMostrarPopup(false)
            timeoutRef.current = null
        }, 3000) 
    }
    return (
        <main>
            {mostrarPopup &&<PopUp text={msg}/>}
        <form className='formCadastro' onSubmit={handleSubmit}>
            <h1>Cadastrar-se</h1>
            <div>
                <label htmlFor="email">E-mail</label>
                <input onChange={handleEmailChange} value={emailValue} id='email' type="email" />
            </div>
            <div>
                <label htmlFor="user">Usuário</label>
                <input onChange={handleUserChange} value={userValue} id='user' type="text" />
            </div>
            <div>
                <label htmlFor="password">Senha</label>
                <input onChange={handlePasswordChange} value={passwordValue} id='password' type="password" />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirme sua senha</label>
                <input onChange={handleConfirmChange} value={confirmValue} id='confirmPassword' type="password"/>
            </div>
            <button type='submit'>Cadastrar</button>
            <Link to="/logIn">Entrar com login</Link>
        </form>
        </main>
    )
}

export default CadastrarSe