import "./styles.css"
import SCI from "../../assets/SCI.svg"
import { useNavigate } from "react-router-dom";
// import ComplexList from "../../components/Panel";
import { useEffect, useState } from "react";
import { Doc } from "../../entities/Doc";
import { Create } from "../../use_cases/docs/Create";
import DocService from "../../services/DocService";

const createDoc = new Create(new DocService())


export default function MyWorksPage() {

	const navigate = useNavigate();

	const [workName, setWorkName] = useState('');
    const [workAuthor, setWorkAuthor] = useState('');
    const [workYear, setWorkYear] = useState('');
    const [workIpfs, setWorkIpfs] = useState('');


	useEffect(() => {
		const user_id = sessionStorage.getItem("user_id")
		if (!user_id){
			navigate("/");
		}
	})

	async function SendData() {
		
		const doc: Doc = {
			'name':workName,
			'year': parseInt(workYear),
			'author':workAuthor,
			'ipfsHash':workIpfs,
		};

		try {
			await createDoc.execute(doc, window);
		} catch (error: any) {

	}}


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