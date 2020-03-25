import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './Logon.css';
import { FiLogIn } from 'react-icons/fi';
import herosImage from '../../assets/heroes.png';
import logoImage from '../../assets/logo.svg';
import axios from '../../services/api';

const Logon = () => {

    const[id, setID] = useState('');
    const history = useHistory();

    function handleLogin(e){
        e.preventDefault();

        const response = axios.post('/sessions', { id })
        .then( res => {
            localStorage.setItem('ongID', id);
            localStorage.setItem('ongName', res.data.name);
            history.push('/profile');

        })
        .catch( err => alert('Falha no Login, tente novamente!'))

    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImage} alt="Logo"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                    <input placeholder="Sua ID" value={id} onChange={ e => setID(e.target.value)}/>
                    <button className="button" type="submit"> Entrar</button>

                    <Link className="back-link" to="/register"> 
                        <FiLogIn size={16} color="#E02041"/> Não tenho cadastro
                    </Link>
                </form>

            </section>

            <img src={herosImage} alt="Heroes"/>
        </div>
    );
} 

export default Logon;