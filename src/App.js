import React, { Component } from "react";
import ReactDOM from 'react-dom';
import logo from './sicredi.png';
import logoIBM from './IBM.png';
import henrique from './henrique.jpg';
import './teste.css';
import html2canvas from 'html2canvas';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import ReactDOMServer from 'react-dom/server';

class AdicionaCarta extends Component {
	state = {
		count: 1,
		l: []
	};
	
	handleClick = () => {
		this.setState(({ count }) => ({
			count: count + 1
		}));

		var templates = document.getElementById('templates');
		// templates.setAttribute('class', 'template-' +  this.state.count);
		
		templates.append(this.montaCarta());
		

		//this.montaCarta();

		
	};

 	montaCarta() {
		 let id = this.state.count
		const element = (
			<div key={id} id={"template-" + this.state.count}>
				<div className="carta carta--azul">
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
			</div>
		)
		
		
		this.state.l.push(element)
		console.info(this.state.l)
		console.info(typeof(element.key))
		console.info(typeof(element.type))
		console.info(typeof(element.props))
		
		var teste = ReactDOMServer.renderToStaticMarkup(this.state.l)
		return teste

		//ReactDOM.render(this.state.l, document.getElementById("templates"))
		// return console.log(<div>{ ReactHtmlParser(element) }</div>);
		
		//ReactDOM.render(element, document.getElementById('template-' + this.state.count));

		// html2canvas(document.querySelector(".app")).then(canvas => {
		// 	document.body.appendChild(canvas)
		// });
	}
	  
  	render() {
		return <button onClick={this.handleClick}>Adicionar Carta</button>;
  	}
}

function App() {
	var p = new AdicionaCarta();
	console.log(p.state.count);

	return (
		<div className="container">
			<div className="app" id="aplicacao">
				<div className="cabecalho">
					<h1>Bem Vindo</h1>
				</div>
				<div className="logo">
					<div className="sicredi"><img src={logo} alt="Logo Sicredi" /></div>
					<div className="ibm"><img src={logoIBM} alt="Logo Sicredi" /></div>
				</div>
				<div id="templates"></div>
				{/* Achar foram de concatenar o count do Adicionar Carta */}
				{/* <div id={'template-' + p.state.count}> </div> */}
				<AdicionaCarta/>
			</div>
		</div>
  	);
}

export default App;
