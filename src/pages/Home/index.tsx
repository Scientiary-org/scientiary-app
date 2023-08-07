import "./styles.css"
import SCI from "../../assets/SCI.svg"
import { useNavigate } from "react-router-dom";

export default function Home() {

	const navigate = useNavigate();

	return (
		<div className="container">
			<div className="top-bar">
				<img className="sci-logo" src={SCI} alt="SCI Logo"/>
				<h1>Wellcome to Scientiary</h1>
				<button onClick={() => navigate("/")} className="logout-button" >LogOut</button>
			</div>
			<div className="body-screen">
				<div className="side-bar">
					<h1>Categorias</h1>
					<div className="options">
						<p>Título</p>
						<p>Autor</p>
						<p>Gênero</p>
					</div>
				</div>
				<div className="sci-main">
					<div className="search">
						<h1>Pesquisa</h1>
						<input
							type="text"/>
					</div>
				</div>
			</div>

		</div>
	)
}
