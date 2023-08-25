import React, { useState } from 'react';
import { Doc } from '../../entities/Doc';
import "./style.css"
import { useNavigate } from 'react-router-dom';
import capa from "../../assets/Default.svg";


interface Props {
    data: Doc
    deleteWork: (workId: number) => Promise<void>
}

const MyDocComponent: React.FC<Props> = ({data, deleteWork}) => {
    
    const navigate = useNavigate();
    const [edit, setEdit] = useState(false);

    const id = Number(data._id);
    
    return (
        <>
            <div className='doc-container'>
                    <img className="capa" src={capa} alt="Capa"/>
                    <div className="info">
                        <div className="info-title">
                            <h4>{data.name}</h4>
                        </div >
                        <div className="info-desc">
                            <h5 className="author">Author: {data.author}</h5>
                            <h5 className="year">Year: {Number(data.year)}</h5>
                            <button onClick={() => edit == false ? setEdit(true) : setEdit(false)} className="edit-button" >Edit</button>
                            <button onClick={() => id !== undefined ? deleteWork(id) : undefined}  className="delete-button" >Delete</button>
                        </div >
                    </div>
            </div>
            { edit == false?
            <></>:
            <div className='edit-container' >
                <div className="update-input">
                    <h3>Título</h3>
                    <input
                        type="text"
                        />
                </div>
                <div className="update-input">
                    <h3>Autor</h3>
                    <input
                        type="text"
                        />
                </div>
                <div className="update-input">
                    <h3>Ano</h3>
                    <input
                        type="text"
                        />
                </div>
                <div className='update-button'>
                    <button>Update Work</button>
                </div>
            </div>

            }
        </>
        

    )
};


export default MyDocComponent;
