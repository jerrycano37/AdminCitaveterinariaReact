import React from 'react';
import Cita from "../cita/Cita";
import PropTypes from 'prop-types';

const ListaCita = ({citas, eliminarCita}) => {

    //imprimir un mensaje en vbase a si hay citas o no
    const mensajeCita = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administra tus citas';
    return (
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2 className="card-title text-center">{mensajeCita}</h2>
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

ListaCita.propTypes = {
    citas : PropTypes.array.isRequired,
    eliminarCita : PropTypes.func.isRequired
};

export default ListaCita;