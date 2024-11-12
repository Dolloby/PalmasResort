import React, { useState } from 'react';
import '../css/loggin.css'; // Archivo CSS para estilos
import axios from 'axios';
import apiRoutes from '../apiRoutes';
import {useNavigate} from "react-router-dom";

// Componente para iniciar sesión en la app
function Loggin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errores, setErrores] = useState('');
    const navegar = useNavigate();
    const validarDatos=async() =>{
        setErrores('');
        try {
        
        const res=await axios.post(apiRoutes.loggin, {
            "correo": email,
            "clave": password
        });
        console.log(res);
        if(res.status === 401){
            setErrores('Acceso denegado, intentar nuevamente');
        }else{
            localStorage.setItem('access_token', res.data.token)
            navegar("/dashboard");
        }

        }
        catch (error) {
            setErrores('Acceso denegado, intentar nuevamente');
        }
    }
    return (
        <div className="loggin">
            <div className="login-container">
                {errores && <p className='error-message'>{errores}</p>}
                {/* <input type="email" onChange={(e)=>setEmail(e.target.value)} value={(email)} placeholder="Ingresa tu correo" />
                <input type="password" onChange={(e)=>setPassword(e.target.value)} value={(password)} placeholder="Ingresa tu contraseña"/>
                <button className="form-button" onClick={validarDatos}>Iniciar Sesión</button> */}
                <h2>Iniciar Sesión</h2>
                <form className="form">
                    <div className="form-group">
                        <p>Correo Electrónico</p>
                        <input type="email" onChange={(e)=>setEmail(e.target.value)} value={(email)} placeholder="Ingresa tu correo" />
                    </div>
                    <div className="form-group">
                        <p>Contraseña</p>
                        <input type="password" onChange={(e)=>setPassword(e.target.value)} value={(password)} placeholder="Ingresa tu contraseña"/>
                    </div>
                    <button className="form-button" onClick={validarDatos}>Iniciar Sesión</button>
                    <p className="toggle-text">
                        ¿No tienes cuenta? <span className="toggle-link">Regístrate aquí</span>
                    </p>
                </form>
            </div>
        </div>
        
    );
};

export default Loggin;