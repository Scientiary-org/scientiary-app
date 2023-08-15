import "./styles.css"
import SCI from "../../assets/SCI.svg"
import { useNavigate } from "react-router-dom";
// import ComplexList from "../../components/Panel";
import { ChangeEvent, useEffect, useState } from "react";
import { Doc } from "../../entities/Doc";
import { Create } from "../../use_cases/docs/Create";
import DocService from "../../services/DocService";

const createDoc = new Create(new DocService())


export default function MyWorksPage() {

	const [workName, setWorkName] = useState('');
	const [workAuthor, setWorkAuthor] = useState('');
	const [workIpfs, setWorkIpfs] = useState('');
	const [file, setFile] = useState<File>();

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
		  setFile(e.target.files[0]);
		}
	};

	const navigate = useNavigate();



	useEffect(() => {
		const user_id = sessionStorage.getItem("user_id")
		if (!user_id){
			navigate("/");
		}
	})

	async function SendData() {
		
		const doc: Doc = {
			'name': workName,
			'author': workAuthor,
			'year': new Date().getFullYear(),
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
					<h1>Upload Work</h1>
					<div className="ml-options">
						<div className="ml-upload-input">
							<p>Título</p>
							<input
								type="text"
								onChange={e => setWorkName(e.target.value)}/>
						</div>
						<div className="ml-upload-input">
							<p>Autor</p>
							<input
								type="text"
								onChange={e => setWorkAuthor(e.target.value)}/>
						</div>
						<div className="ml-file">
							<input 
								type="file" 
								onChange={handleFileChange} 
								placeholder="Choose File"/>
							<button>Upload</button>
						</div>

					</div>
				</div>
				<div className="ml-sci-main">
					<div className="ml-search">
						<input
							type="text"
							placeholder="Search"/>
						<div className="ml-itens-list">
							{/* <ComplexList data=list/> */}
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}