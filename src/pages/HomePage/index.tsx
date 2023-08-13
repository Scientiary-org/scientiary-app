import "./styles.css"
import SCI from "../../assets/SCI.svg"
import { useNavigate } from "react-router-dom";
import DocComponent from "../../components/DocComponent";
import {useEffect, useState} from "react";
import { Doc } from "../../entities/Doc";
import DocService from "../../services/DocService";
import { FetchAll } from "../../use_cases/docs/FetchAll";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";



declare let window: any;

const fetchAll = new FetchAll(new DocService());

export default function HomePage() {

	const navigate = useNavigate();
	const [docList, setDocList] = useState<Doc[]>();
	const [searchString, setSearchString] = useState<string>()
	// const [filteredItems, setFilteredData] = useState<Doc[]>(docList);
	const [view, setView] = React.useState('name');

	useEffect(() => {
		fetchAll.execute(window).then((data) => {
			setDocList(data);
		});

		const user_id = sessionStorage.getItem("user_id")
		if (!user_id){
			navigate("/");
		}
	})

	// const handleSearch = (text: string) => {
    //     setSearchString(text);
	// 	if (docList !== undefined) {
	// 		const filteredData = docList.filter((doc) => {
	// 		const docName = doc.name.toLowerCase();
	// 		const searchTextLower = text.toLowerCase();
	// 		return docName.includes(searchTextLower);
	// 		setFilteredData(filteredData)
    //     });
	// 	}
    // };

	const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
		setView(nextView);
	  };

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
					<h1>Filtro de Pesquisa</h1>
					<div className="options">
						<ToggleButtonGroup
							orientation="vertical"
							value={view}
							exclusive={true}
							onChange={handleChange}
						>
							<ToggleButton value="name" aria-label="name">
								<p>Nome</p>
							</ToggleButton>
							<ToggleButton value="author" aria-label="author">
								<p>Autor</p>
							</ToggleButton>
							<ToggleButton value="year" aria-label="year">
								<p>Ano</p>
							</ToggleButton>
							
						</ToggleButtonGroup>
					</div> 
				</div>
				<div className="sci-main">
					<div className="search">
						<h1>Pesquisa</h1>
						<input
							type="text"
							value={searchString}/>
						<div className="itens-field">
							{ docList === undefined ?
								<p>Carregando...</p>:
								<div className="itens-list">
									{docList.map((doc) =>
										<DocComponent data={doc} capa={doc.image}/>
									)	
									}
								</div>
							}
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}
