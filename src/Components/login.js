import React from "react";
import "../css/estilo.css"


const Login =()=>{
    return (
        <>
        
        <h1>Login</h1>
        <div className="form-control">
        <div className="input-group">
            <input type="text" id="name" required className="input"/>
            <label for="name" className="input-label">Correo</label>
        </div>
        <div className="input-group">
            <input type="text" id="name" required className="input"/>
            <label for="name" className="input-label">Correo</label>
        </div>
        </div>
        </>

    )

}

export default Login
