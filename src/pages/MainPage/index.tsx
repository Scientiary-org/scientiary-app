// import { useNavigate } from "react-router-dom";
import "./styles.css"
import SCI from "../../assets/SCI.svg"
import MetaMask_Fox from "../../assets/MetaMask_Fox.svg"
import { useState } from "react";
import {ethers} from "ethers";

declare let window: any;

function MainPage() {

	// const navigate = useNavigate();

	const [currentAccount, setCurrentAccount] = useState('');

	const connectWallet = async () => {
		try {
			const { ethereum } = window;

			if (!ethereum) {
				console.log("Metamask not detected");
				return;
			}

			let chainId = await ethereum.request({ method: 'eth_chainId' });

			const sepoliaChainId = '0xaa36a7'; // Sepolia network chain ID

			if (chainId !== sepoliaChainId) {
				alert("You are not connected to Sepolia network");
				return;
			}

			const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
			setCurrentAccount(accounts[0]);

		} catch (error) {
			console.log("Error connecting to Metamask:", error);
		}
	}

    return (
		<div className="panel-container">
			<div className="left-panel">
				<img className="sci-logo" src={SCI} alt="SCI Logo"/>
				<h2><span className='notbold'>Bem-vindo ao </span>Scientiary</h2>
				<p>Já possui uma conta MetaMask? Acesse agora! </p>
				<div className="button-bar">
					<img className="meta-logo" src={MetaMask_Fox} alt="Meta Logo"/>
					<button onClick={connectWallet} className="enter-button" >CONECTAR CARTEIRA</button>
				</div>
			</div>
			<div className="right-panel">
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