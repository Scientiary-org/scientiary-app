import "./styles.css";
import SCI from "../../assets/SCI.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Doc } from "../../entities/Doc";
import { Create } from "../../use_cases/docs/Create";
import DocService from "../../services/DocService";
import { FetchAll } from "../../use_cases/docs/FetchAll";

const createDoc = new Create(new DocService());

export default function MyWorksPage() {
  const navigate = useNavigate();

  const [workName, setWorkName] = useState('');
  const [workAuthor, setWorkAuthor] = useState('');
  const [workYear, setWorkYear] = useState('');
  const [workIpfs, setWorkIpfs] = useState('');

  const [works, setWorks] = useState<Doc[] | undefined>([]);

  useEffect(() => {
    const user_id = sessionStorage.getItem("user_id");
    if (!user_id) {
      navigate("/");
    }
  }, [navigate]);

  async function SendData() {
    const doc: Doc = {
      'name': workName,
      'year': parseInt(workYear),
      'author': workAuthor,
      'ipfsHash': workIpfs,
    };

    try {
      await createDoc.execute(doc, window);
    } catch (error: any) {
      // Handle error
    }
  }

  async function fetchAllWorks() {
    try {
      const fetchAll = new FetchAll(new DocService());
      const works = await fetchAll.execute(window);
      setWorks(works);
    } catch (error) {
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
            <input type="text" />
            <button onClick={fetchAllWorks}>Fetch All Works</button>
            <div className="ml-itens-list">
              {/* Display fetched works here */}
              {works?.map((work, index) => (
                <div key={index}>{work.name}</div>
              ))}
            </div>
          </div>
          <div className="ml-form">
            <h1>Create New Work</h1>
            <input type="text" placeholder="Name" value={workName} onChange={(e) => setWorkName(e.target.value)} />
            <input type="text" placeholder="Author" value={workAuthor} onChange={(e) => setWorkAuthor(e.target.value)} />
            <input type="text" placeholder="Year" value={workYear} onChange={(e) => setWorkYear(e.target.value)} />
            <input type="text" placeholder="IPFS Hash" value={workIpfs} onChange={(e) => setWorkIpfs(e.target.value)} />
            <button onClick={SendData}>Create Work</button>
          </div>
        </div>
      </div>
    </div>
  );
}
