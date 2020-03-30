import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiInfo } from 'react-icons/fi'

import './styles.css'

import logoImg from '../../assets/logo.svg'


export default function Register() {
    const [equipe1, setEquipe1] = useState('')
    const [equipe2, setEquipe2] = useState('')
    const [equipe3, setEquipe3] = useState('')

    const history = useHistory()

    function handleSubmit (e) {
        e.preventDefault()
        
        window.sessionStorage.setItem('equipe1', equipe1)
        window.sessionStorage.setItem('equipe2', equipe2)
        window.sessionStorage.setItem('equipe3', equipe3)

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
                <form onSubmit={handleSubmit}>
                    <input
                        value={equipe1}
                        placeholder="Digite o nome da equipe 1..."
                        onChange={e => setEquipe1(e.target.value)}
                       
                    />
                    <input
                        value={equipe2}
                        placeholder="Digite o nome da equipe 2..."
                        onChange={e => setEquipe2(e.target.value)}
                    />
                    <input
                        value={equipe3}
                        placeholder="Digite o nome da equipe 3..."
                        onChange={e => setEquipe3(e.target.value)}
                    />
                    
                
                    <button className="button" type="submit">Jogar</button>
                </form>
            </div>
        </div>
    )
}