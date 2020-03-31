import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower } from 'react-icons/fi'

import Question1 from '../../Questions'

import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function Dashboard() {
    const equipe1 = sessionStorage.getItem('equipe1')
    const equipe2 = sessionStorage.getItem('equipe2')
    const equipe3 = sessionStorage.getItem('equipe3')

    const history = useHistory()

    function handleLogout() {
        history.push('/')
    }
    

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Dashboard</span>
                
                <Link className="button" to="/dashboard">Iniciar relogio</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#CF4C48" />
                </button>
            </header>
            <ul>
                <li /*key={incidents.id}*/>
                    <strong>EQUIPES</strong>
                    <p className="equipe1">{equipe1}</p>
                    <p className="equipe2">{equipe2}</p>
                    <p className="equipe3">{equipe3}</p>
                </li>
                <li /*key={incidents.id}*/>
                    <strong className="tempo">TEMPO</strong>
                    <p className="relogio">40:00</p>
                </li>
                <li /*key={incidents.id}*/>
                    <strong className="perguntas">PERGUNTAS</strong>
                    <div className="container-perguntas">
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                        <p>7</p>
                        <p>8</p>
                        <p>9</p>
                        <p>10</p>
                        <p>11</p>
                        <p>12</p>
                        <p>13</p>
                        <p>14</p>
                        <p>15</p>
                        <p>16</p>
                        <p>17</p>
                        <p>18</p>
                        <p>19</p>
                        <p>20</p>
                        <p>21</p>
                        <p>22</p>
                        <p>23</p>
                        <p>24</p>
                        <p>25</p>
                        <p>26</p>
                        <p>27</p>
                        <p>28</p>
                        <p>29</p>
                        <p>30</p>
                    </div>
                </li>
                <li /*key={incidents.id}*/>
                    <strong className="desafios">DESAFIO</strong>
                    <div className="container-desafios">
                        <div className="group-desafios">
                            <p>caça palavra</p>
                            <p>desafio do e-mail</p>
                            <p>desafio do dominio</p>
                            <p>contrato social</p>
                            <p>cadastro de produtos</p>
                        </div>
                        <div className="group-desafios">
                            <p>fotografia</p>
                            <p>desafio do seo</p>
                            <p>tema da loja</p>
                            <p>desafio do stories</p>
                            <p>Sim ou não</p>
                        </div>
                    </div>
                    
                </li>
            </ul>
        </div>
    )
    
}