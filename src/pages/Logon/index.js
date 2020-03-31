import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import './styles.css'

import herosImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export default function Logon() {
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()

        history.push('/register')
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />

                <form onSubmit={handleSubmit}>
                    
                    <button className="button"type="submit">Começar</button>

                    <Link className="back-link" to="/">
                        <FiLogIn size={16} color="#CF4C48"/>
                        Configurações
                    </Link>

                </form>
            </section>

            <img className="imgHero" src={herosImg} alt="heros_img" />
        </div>
    )
}