import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiInfo } from 'react-icons/fi'

import './styles.css'

import logoImg from '../../assets/logo.svg'


export default function Register() {
    const history = useHistory()

    function handleRegister(e) {
        e.preventDefault()

        history.push('/dashboard')
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Agora chegou o momento de você escolher o nome da sua equipe, seja sábio, pois ela te representará neste game.</p>
                    <Link className="back-link" to="/">
                        <FiInfo size={16} color='#CF4C48'/>
                        Instruções
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input
                        name="eq1"
                        placeholder="Digite o nome da equipe 1..."
                       
                    />
                    <input
                        name="eq2"
                        placeholder="Digite o nome da equipe 2..."

                    />
                    <input
                        name="eq3"
                        placeholder="Digite o nome da equipe 3..."

                    />
                    

                    <button className="button" type="submit">Jogar</button>
                </form>
            </div>
        </div>
    )
}