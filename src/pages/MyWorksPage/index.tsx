import "./styles.css";
import SCI from "../../assets/SCI.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Doc } from "../../entities/Doc";
import { Create } from "../../use_cases/docs/Create";
import DocService from "../../services/DocService";
import { Upload } from "../../use_cases/ipfs/Upload";
import IPFSService from "../../services/IPFSService";
import { Delete } from "../../use_cases/docs/Delete";
import { FetchAllByUser } from "../../use_cases/docs/FetchAllByUser";
import MyDocComponent from "../../components/MyDocComponent";


const createDoc = new Create(new DocService());
const uploadIpfs = new Upload(new IPFSService());
const deleteDoc = new Delete(new DocService());
const fetchAllByUser = new FetchAllByUser(new DocService());

export default function MyWorksPage() {
	const navigate = useNavigate();

	const [workName, setWorkName] = useState('');
	const [workAuthor, setWorkAuthor] = useState('');
	const [workIpfs, setWorkIpfs] = useState('');
	const [file, setFile] = useState<File>();
	const [works, setWorks] = useState<Doc[] | undefined>([]);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
		setFile(e.target.files[0]);
		}
	};

	useEffect(() => {
		const user_id = sessionStorage.getItem("user_id");
		if (user_id) {
			getMyWorks(user_id);
		} else {
			navigate("/");
		}

		const intervalId = setInterval(async () => {
			if(user_id){
				await getMyWorks(user_id);
			}

		}, 5000); 
	  
		return () => {
			clearInterval(intervalId); //
		};

	}, []);


	async function SendData() {

		const doc: Doc = {
		'name': workName,
		'year': new Date().getFullYear(),
		'author': workAuthor,
		'ipfsHash': workIpfs,
		};

		try {
			await createDoc.execute(doc, window);
		} catch (error: any) {
			console.log(error)
		}
	}

	
	async function getMyWorks(user_id: string) {
		try {
			const fetchedWorks = await fetchAllByUser.execute(user_id, window);
			const extractedEntities: any = fetchedWorks?.map(proxy => {
				return Object.values(proxy)[0];
			});
			const stringifiedEntities = extractedEntities.map((entity: { toString: () => any; }) => entity.toString()).join(', ');

			const numberArray = stringifiedEntities.split(',').map((item: string) => Number(item.trim())); 
			
			setWorks(fetchedWorks);
			
		} catch (error) {
			console.log(error)
		}
	}
	
	async function deleteWork(workId: number) {
		try {
		{
			await deleteDoc.execute(workId, window);
		}
		} catch (error: any) {
			console.log(error)
		}
	}

	return (
		<div className="ml-container">
		<div className="ml-top-bar">
			<img className="ml-sci-logo" src={SCI} alt="SCI Logo" />
			<h1>My Works</h1>
			<div className="ml-buttons">
			<button onClick={() => navigate("/home")} className="ml-home-button">Home</button>
			<button onClick={() => navigate("/")} className="ml-logout-button">LogOut</button>
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
				<button onClick={SendData}>Upload</button>
				</div>
			</div>
			</div>
			<div className="ml-sci-main">
			<div className="ml-search">
				<input
				type="text"
				placeholder="Search"/>
				<div className="ml-itens-list">
				{/* Display fetched works here */}
				{works?.map((doc, index) => (
					<MyDocComponent
						key={index}
						data={doc}
						deleteWork={deleteWork}/>
				))}
				</div>
			</div>
			</div>
		</div>
		</div>
	);
}
