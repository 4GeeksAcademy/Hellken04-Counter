import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import Alerta from './components/Alerta';

let seconds = 0;
let regresiva=false;
let alarma= -1;
let estadoAlerta=false;
let idInterval;
iniciar();

function iniciar(){
  idInterval=setInterval(() => {
    
    if (regresiva && seconds==0){
      regresiva=false;
    }

    if (alarma && seconds== alarma){
        estadoAlerta= true;
        stop();
    }

    regresiva ? seconds-- : seconds++;

    renderizar();
  }, 1000)
}

function renderizar(){
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <Home numero={seconds} />
      
        <div className="container row text-center m-4">
          <div className="col-3">
            <h2>Cuenta Regresiva</h2>
            <label for="numeroInicial" className="form-label">Numero Inicial:</label>
            <input className="form-control" type="number" id="numeroInicial" name="numeroInicial" placeholder="Segundos" onClick={stop}></input>
            <button className="btn btn-success m-2" onClick={cuentaRegresiva}>Iniciar</button>
          </div>
          <div className="col-3">
            <h2>Control</h2>
            <button className="btn btn-success m-2" onClick={stop}>Pausar</button>
            <button className="btn btn-success m-2" onClick={iniciar}>Reiniciar</button>
            <button className="btn btn-success m-2" onClick={reset}>Reset</button>
          </div>
          <div className="col-3">
            <h2>Alarma</h2>
            <label for="alarma" className="form-label">Alarma en:</label>
            <input className="form-control" type="number" id="alarma" name="alarma" placeholder="Segundos" onClick={stop}></input>
            <button className="btn btn-success m-2" onClick={alerta}>Set</button>
          </div>
        </div>

    <Alerta alerta={estadoAlerta} />
  
    </React.StrictMode>,
  )
}

function stop (){
  clearInterval(idInterval);
}

function reset (){
  clearInterval(idInterval);
  seconds=0;
  regresiva = true;
  iniciar();
  estadoAlerta=false;
  alarma=-1;
}

function cuentaRegresiva() {

  regresiva = true;
  let numeroInicial = document.getElementById("numeroInicial");
  seconds = numeroInicial.value;
  iniciar();
}

function alerta() {

  regresiva = false;
  alarma = document.getElementById("alarma").value;
  seconds = 0;
  iniciar();
}




