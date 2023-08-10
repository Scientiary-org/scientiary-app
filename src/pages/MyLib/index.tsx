import "./styles.css"
import SCI from "../../assets/SCI.svg"
import { useNavigate } from "react-router-dom";
import ComplexList from "../../components/Panel";
import { useEffect } from "react";
import { Obra } from "../../entities/Doc";

export default function MyLib() {

	const navigate = useNavigate();

	useEffect(() => {

		const user_id = sessionStorage.getItem("user_id")
		if (!user_id){
			navigate("/");
		}
	})


	return (
		<div className="ml-container">
			<div className="ml-top-bar">
				<img className="ml-sci-logo" src={SCI} alt="SCI Logo"/>
				<h1>My Works</h1>
				<div className="ml-buttons">
					<button onClick={() => navigate("/home")} className="ml-home-button" >Home</button>
					<button onClick={() => navigate("/")} className="ml-logout-button" >LogOut</button>
				</div>
			</div>
			<div className="ml-body-screen">
				<div className="ml-side-bar">
					<h1>Categorias</h1>
					<div className="ml-options">
						<p>Título</p>
						<p>Autor</p>
						<p>Gênero</p>
					</div>
				</div>
				<div className="ml-sci-main">
					<div className="ml-search">
						<h1>Pesquisa</h1>
						<input
							type="text"/>
						<div className="ml-itens-list">
							{/* <ComplexList data=list/> */}
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}