import React from 'react';
import Cita from "../cita/Cita";

const ListaCita = ({citas, eliminarCita}) => {
    return (
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2 className="card-title text-center">Administra las citas</h2>
                <div className="lista-citas">
                    {citas.map(cita =>(
                        <Cita
                        key = {cita.id}
                        cita = {cita}
                        eliminarCita = {eliminarCita}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListaCita;