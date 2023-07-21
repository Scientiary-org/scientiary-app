// import { useNavigate } from "react-router-dom";
import "./styles.css"
import SCI from "../../assets/SCI.svg"
import MetaMask_Fox from "../../assets/MetaMask_Fox.svg"

function MainPage() {

    return (
		<div className="panel-container">
			<div className="right-panel">
				<img className="sci-logo" src={SCI} alt="SCI Logo"/>
				<h2><span className='notbold'>Bem-vindo ao </span>Scientiary</h2>
				<p>Já possui uma conta MetaMask? Acesse agora! </p>
				<div className="button-bar">
					<img className="meta-logo" src={MetaMask_Fox} alt="Meta Logo"/>
					<button className="enter-button" >ENTRAR</button>
				</div>
			</div>
			<div className="left-panel">
				<h2>Como se cadastrar?</h2>
				<p>A biblioteca científica pode ser acessada sincronizando sua sessão com uma carteira Ethereum. </p>
				<p>Recomendamos a utilização da carteira Metamask.</p>
				<button onClick={(e) => {
					e.preventDefault();
					window.location.href='https://metamask.io/';
					}} className="meta-account" >CRIAR CONTA METAMASK</button>
			</div>
		</div>
    )
  }
  
export default MainPage