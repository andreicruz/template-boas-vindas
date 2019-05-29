import React, { Component } from "react";
import logo from './sicredi.png';
import logoIBM from './IBM.png';
import henrique from './henrique.jpg';
import './teste.css';
import html2canvas from 'html2canvas';

class Foo extends Component {
  handleClick() {
	alert('Click happened');
	html2canvas(document.querySelector(".app")).then(canvas => {
		document.body.appendChild(canvas)
	});
  }
  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}


function App() {
  return (
    <div className="container">
		<div className="app">
			<div className="cabecalho">
				<h1>Bem Vindo</h1>
			</div>
			<div className="logo">
				<div className="sicredi"><img src={logo} alt="Logo Sicredi" /></div>
				<div className="ibm"><img src={logoIBM} alt="Logo Sicredi" /></div>
			</div>
			<div className="carta carta--branca">
				<div className="informacoes">
					<div className="nome">
						<input type="text" className="form-control form-control--azul" id="nomeFuncionario" placeholder="Nome Completo"/>
					</div>
					<div className="padrinho">
						<input type="text" className="form-control form-control--azul" id="nomePadrinho" placeholder="Nome do Padrinho"/>
					</div>
					<div className="scrum">
						<input type="text" className="form-control form-control--azul" id="nomeScrum" placeholder="Nome do Scrum"/>
					</div>
					<div className="time">
						<input type="text" className="form-control form-control--azul" id="nomeSetor" placeholder="Nome do Setor"/>
					</div>
				</div>
				<div className="foto">
					<div className="perfil"><img src={henrique} alt="Foto" /></div>
				</div>
			</div>
			<Foo/>
		</div>
    </div>
  );
}

export default App;
