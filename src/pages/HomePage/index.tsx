import "./styles.css"
import SCI from "../../assets/SCI.svg"
import { useNavigate } from "react-router-dom";
import ComplexList from "../../components/Panel";
import {useEffect, useState} from "react";
import { Obra } from "../../entities/Doc";

export default function HomePage() {

	const navigate = useNavigate();

	const [list, setList] = useState<Obra[]>();

	

	useEffect(() => {
		async function fetchObras() {
			const obras: Obra[] = [
				{
				  id: 'a',
				  nome: 'Robin',
				  autor: 'Wieruch',
				},
				{
				  id: 'b',
				  nome: 'Dave',
				  autor: 'Davidds',
				},
				{
				  id: 'c',
				  nome: 'Dave',
				  autor: 'Davidds',
				},
			];

			setList(obras);
		}
		
		fetchObras();

		const user_id = sessionStorage.getItem("user_id")
		if (!user_id){
			navigate("/");
		}
	})

	return (
		<div className="container">
			<div className="top-bar">
				<img className="sci-logo" src={SCI} alt="SCI Logo"/>
				<h1>Wellcome to Scientiary</h1>
				<div className="buttons">
					<button onClick={() => navigate("/mylib")} className="my-works-button" >My Works</button>
					<button onClick={() => navigate("/")} className="logout-button" >LogOut</button>
				</div>
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
						<div className="itens-list">
							{ list === undefined ?
								<p>Carregando...</p>:
								<ComplexList data={list}/>
							}
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}
