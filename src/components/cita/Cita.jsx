import React from 'react';

const Cita = ({cita, eliminarCita}) => (

        <div className="media mt-3">
            <div className="media-body">
                <h3 className="mt-0">{cita.mascota}</h3>
                <p className="card-text"><span>Nombre dueño: </span>{cita.propietario}</p>
                <p className="card-text"><span>Fecha: </span>{cita.fecha}</p>
                <p className="card-text"><span>Hora: </span>{cita.hora}</p>
                <p className="card-text"><span>Sintomas: </span>{cita.sintomas}</p>

                <button className = "btn-danger" onClick = { ()=> eliminarCita(cita.id)}>Eliminar &times;</button>
            </div>
        </div>
);

export default Cita;