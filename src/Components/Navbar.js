import React, { useState } from "react";

const Navbar = () => {

    
    const [user, setUser]=useState({name:"Usuario2"});
    return (
        <>

            <nav className="navbar navbar-dark bg-dark mb-4">
                <div className="container">
                    <span className="navbar-brand">
                        <h1>{user? `Hola ${user.name}` :'le gusta un cafe?'}</h1>
                    </span>
                    {
                        user.name?
                        <button className="btn btn-outline-primary" >
                        cerrar session
                    </button>
                        :
                        <button className="btn btn-outline-success" >
                        Iniciar session
                    </button>
                    }
                    

                    
                </div>

            </nav>


        </>

    )

}

export default Navbar
