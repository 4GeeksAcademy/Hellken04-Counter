import React from "react";

const Alerta = ({ alerta }) => {
    let visible;
    
    return (
        
        <div className={`alert alert-danger d-flex align-items-center ${alerta ? "visible" : "invisible"}`}>
            <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"><use xlinkHref="#exclamation-triangle-fill" /></svg>
            <div>
                YA TRANSCURRIERON LOS SEGUNDOS
            </div>
        </div>

    );
};

export default Alerta;