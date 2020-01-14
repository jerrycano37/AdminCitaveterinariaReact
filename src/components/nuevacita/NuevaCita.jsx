import React, {Component} from 'react';
import uudi from 'uuid';
import PropTypes from 'prop-types';

const stateInicial = {
    cita : {
        mascota : '',
        propietario : '',
        fecha : '',
        hora : '',
        sintomas : ''
    },
    error : false
};

class NuevaCita extends Component {

    state = {...stateInicial};

    //cuando el usuario escribe
    handleChange = e => {

        /*coloca lo que se escribe en el state*/
        this.setState({
            cita : {
                ...this.state.cita,  //recomendable tomar una copia de el state
                [e.target.name] : e.target.value
            }
        })
    };

    //cuando el usuario envia el formulario
    handleSubmit = e => {
        e.preventDefault();

        //Extraer los valores del state
        const {mascota, propietario, fecha, hora, sintomas } = this.state.cita;

        //Validar todos los campos
        if (mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '') {
            this.setState({
                error : true
            });

            //Detener la ejecucion
            return;
        }

        //generar objeto con los datos
        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uudi(); //añadimos un id unico

        //Agregar la cita al state del app
        this.props.crearNuevaCita(nuevaCita);

        //colocar en el state el state inicial
        this.setState({
            ...stateInicial
        })

    };

    render() {
        //extraer el valor del state
        const  {error} = this.state;
        return (
            <div>
                <div className="card mt-5 py-5">
                    <div className="card-body">
                        <h2 className="card-title text-center mb-5">
                            Llena el formulario para crear una cita
                        </h2>

                        {error ? <div className="alert alert-danger mt-2 mb-5 text-center">
                            Todos los campos son obligatorios.
                        </div> : null}

                        <form
                            onSubmit={this.handleSubmit}
                        >
                            <div className="form-group row">
                                <label className="col-sm-4 col-lg-2 col-form-label">
                                    Nombre de tu mascota
                                </label>
                                <div className="col-sm-8 col-lg-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nombre de la mascota"
                                        name="mascota"
                                        onChange={this.handleChange} //evento se ejecuta al realizar un cambio
                                        value={this.state.cita.mascota}
                                    />
                                </div>
                            </div> {/*Cierra form-group*/}

                            <div className="form-group row">
                                <label className="col-sm-4 col-lg-2 col-form-label">
                                    Nombre del dueño
                                </label>
                                <div className="col-sm-8 col-lg-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nombre del dueño"
                                        name="propietario"
                                        onChange={this.handleChange} //evento se ejecuta al realizar un cambio
                                        value={this.state.cita.propietario}
                                    />
                                </div>
                            </div> {/*Cierra form-group*/}

                            <div className="form-group row">
                                <label className="col-sm-4 col-lg-2 col-form-label">
                                    Fecha
                                </label>
                                <div className="col-sm-8 col-lg-4">
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="fecha"
                                        onChange={this.handleChange} //evento se ejecuta al realizar un cambio
                                        value={this.state.cita.fecha}
                                    />
                                </div>

                                <label className="col-sm-4 col-lg-2 col-form-label">
                                    Hora
                                </label>
                                <div className="col-sm-8 col-lg-4">
                                    <input
                                        type="time"
                                        className="form-control"
                                        name="hora"
                                        onChange={this.handleChange} //evento se ejecuta al realizar un cambio
                                        value={this.state.cita.hora}
                                    />
                                </div>
                            </div> {/*Cierra form-group*/}

                            <div className="form-group row">
                                <label className="col-sm-4 col-lg-2 col-form-label">
                                    Sintomas
                                </label>
                                <div className="col-sm-8 col-lg-10">
                                    <textarea
                                    className="form-control"
                                    name="sintomas"
                                    onChange={this.handleChange} //evento se ejecuta al realizar un cambio
                                    value={this.state.cita.sintomas}
                                    placeholder="Describe los sintomas">
                                    </textarea>
                                </div>
                            </div> {/*Cierra form-group*/}

                            <input type="submit"
                            className="py-3 mt-2 btn btn-success btn-block"
                            value="Añadir nueva cita"/>

                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

NuevaCita.propTypes = {
    crearNuevaCita : PropTypes.func.isRequired
};

export default NuevaCita;