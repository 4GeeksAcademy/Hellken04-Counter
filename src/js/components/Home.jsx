import React from "react";
import Digito from "./Digito";
import Alerta from "./Alerta";

//create your first component


const Home = ({ numero }) => {
	let regresiva= false;
	function extraerDigitoRecursivo(numero, posicion, digitos) {
		let base = 100000 / Math.pow(10, posicion);
		let digito = Math.floor(numero / base);
		let residuo = numero % base;
		digitos[posicion] = digito;
		if (posicion < 5) {
			extraerDigitoRecursivo(residuo, posicion + 1, digitos);
			posicion++;
		}
		console.log(digitos);
		return digitos;
	}

	function extraerDigito(numero) {
		let digitos2 = [0, 0, 0, 0, 0, 0];
		let numeroTemporal = numero;
		for (let i = 0; i < 6; i++) {
			let base = 100000 / Math.pow(10, i);
			let digito = Math.floor(numeroTemporal / base);
			let residuo = numeroTemporal % base;
			digitos2[i] = digito;
			numeroTemporal = residuo;
		}
		console.log(digitos2);
		return digitos2;
	}
	
	//let digitos = extraerDigito(numero);
	//let digitos = extraerDigitoRecursivo(numero,0,[0,0,0,0,0,0]);
	let digitos = numero.toString().padStart(6, 0).split('').map(Number);
	return (
		<div className="container">
			<div className="row">
				<div className="col-1 mt-5">
					<h1 className="card-title text-center text-bg-dark rounded"><i className="fa-regular fa-clock"></i></h1>
				</div>
				{digitos.map((digito, index, array) =>
					<div className="col-1" key={index}>
						<Digito digito={digito}></Digito>
					</div>
				)}
			</div>
			
		</div>
	);
};

export default Home;