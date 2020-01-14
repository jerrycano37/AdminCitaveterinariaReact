import React, {Component} from 'react';
import Header from "./components/header/Header";
import './bootstrap.min.css'
import NuevaCita from "./components/nuevacita/NuevaCita";
import ListaCita from "./components/listacita/ListaCita";

class App extends Component {

    state = {
        citas : []
    };

    //cuando carga la aplicacion
    componentDidMount() {
        const citasLC = localStorage.getItem('citas');
        if (citasLC){
            this.setState({
                citas: JSON.parse(citasLC)
            })
        }
    }

    //cuando eliminamos o agregamos una cita
    componentDidUpdate(prevProps, prevState, snapshot) {
        localStorage.setItem('citas',JSON.stringify(this.state.citas));
    }

    crearNuevaCita = datos => {

        //copiamos el state actual
        const citas = [...this.state.citas, datos];

        //agregamos el nuevo state
        this.setState({citas});
    };

    //Elimina las citas
    eliminarCita = id => {
        //tomar una copia del state
        const citasActuales = [...this.state.citas];

        //utilizar filter para sacar el elemento id del arreglo
        const citas = citasActuales.filter(cita => cita.id !== id); //regresa los id que sean diferentes al q se dio click

        //actualizar el state
        this.setState({
            citas
        })
    };

    render() {
        return (
        <div>
          <div className="container">
            <Header
            titulo = 'Administrador Veterinaria Sostesanic'
            />
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <NuevaCita
                        crearNuevaCita={this.crearNuevaCita}
                    />
                </div>
                <div className="mt-5 col-md-10 mx-auto">
                    <ListaCita
                    citas = {this.state.citas}
                    eliminarCita = {this.eliminarCita}
                    />
                </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
