import { useNavigate } from "react-router-dom";
import "./styles.css"
import SCI from "../../assets/SCI.svg"
import MetaMask_Fox from "../../assets/MetaMask_Fox.svg"
import LoginUserService from "../../services/UserService";
import LoginUser from "../../use_cases/users/Login";

declare let window: any;

const loginUser = new LoginUser(new LoginUserService());

function MainPage() {

	const navigate = useNavigate();

	const connectWallet = async () => {
		try {
			const loggeduser = await loginUser.execute(window);

			if (loggeduser !== undefined) {
				sessionStorage.setItem("user_id", loggeduser);
				navigate("/home");
			}
            

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