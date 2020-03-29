import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower } from 'react-icons/fi'

import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function Dashboard() {

    const history = useHistory()

    function handleLogout() {
        history.push('/')
    }


    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem Vindos</span>
                
                <Link className="button" to="/dashboard">Iniciar relogio</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>
            <h1>Dashboard</h1>

            <ul>
                <li /*key={incidents.id}*/>
                    <strong>EQUIPES</strong>
                </li>
                <li /*key={incidents.id}*/>
                    <strong>TEMPO</strong>
                </li>
                <li /*key={incidents.id}*/>
                    <strong>PERGUNTAS</strong>
                </li>
                <li /*key={incidents.id}*/>
                    <strong>DESAFIO</strong>
                </li>
            </ul>
        </div>
    )
    
}