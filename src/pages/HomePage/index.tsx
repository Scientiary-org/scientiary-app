import "./styles.css"
import SCI from "../../assets/SCI.svg"
import { useNavigate } from "react-router-dom";
import DocComponent from "../../components/DocComponent";
import {useEffect, useState} from "react";
import { Doc } from "../../entities/Doc";
import DocService from "../../services/DocService";
import { FetchAll } from "../../use_cases/docs/FetchAll";

const fetchAll = new FetchAll(new DocService());

export default function HomePage() {

	const navigate = useNavigate();
	const [docList, setDocList] = useState<Doc[]>();

	useEffect(() => {
		fetchAll.execute().then((data) => {
			setDocList(data);

		});

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
						<div className="itens-field">
							{ docList === undefined ?
								<p>Carregando...</p>:
								<div className="itens-list">
									<DocComponent data={docList[0]}/>
									<DocComponent data={docList[1]}/>
									<DocComponent data={docList[2]}/>
									<DocComponent data={docList[0]}/>
									<DocComponent data={docList[1]}/>
									<DocComponent data={docList[2]}/>
									<DocComponent data={docList[0]}/>
									<DocComponent data={docList[1]}/>
									<DocComponent data={docList[2]}/>
									
								</div>
							}
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}
