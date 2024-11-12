// // SignIn.js
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import axios from 'axios';
// import Login from './Loggin.js';
// import Dashboard from './Dashboard';
// import Hoteles from './Hotel.js';
// import PrivateRoute from './PrivateRoute.js';

// const SignIn = ({ login }) => {
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const navigate = useNavigate();


// const handleSubmit = async (e) => {
//     e.preventDefault();
//     try{
//         const respuesta= await axios.post('http://localhost:3000/api/usuarios/login',
//             {
//                 "correo": email,
//                 "clave": password
//                 }
//         );
//         if(respuesta.status===200)
//         {
//             const token =respuesta.data.token;  
//             const config= {
//                 headers: {
//                     'Authorization': `Bearer ${token}` // Incluye el token en los encabezados
//                 }
//             };
//             const userData= await axios.get('http://localhost:3000/api/usuarios/me',
//                 config
//             );
//             login(userData.data); // Actualiza el estado en App
//             localStorage.setItem('token', token);
//             localStorage.setItem("tipoUsuario",userData.data.tipo); // Almacena el tipo de usuario

//             navigate('/dashboard'); // Redirige al dashboard

            
//         }else{
//             console.log('error login')
//         }
        
//     }
//     catch(error){
//         console.log(error);
//     }

    
// };

//     return (
//         <Routes>
//             <Route path="/" element={<Login login={login} />} />
//             <Route path="/dashboard" element={user ? <Dashboard user={user} logout={logout} /> : <Navigate to="/" />} />
//             <Route path="/hoteles" element={<PrivateRoute requiredRole="administrador"><Hoteles /> </PrivateRoute>} />
//             <Route path="/acceso-denegado" element={<div>Acceso denegado</div>} />
//         </Routes>
//     );
// }

// export default SignIn;