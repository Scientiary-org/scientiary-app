import React from 'react';

import { Doc } from '../../entities/Doc';
import "./style.css"
import { useNavigate } from 'react-router-dom';


interface Props {
    data: Doc
    capa: string
}

const DocComponent: React.FC<Props> = ({data, capa}) => {
    
    const navigate = useNavigate();
    return (
        <div className='doc-container'>
                <img className="capa" src={capa} alt="Capa"/>
                <div className="info">
                    <div className="info-title">
                        <h4>{data.name}</h4>
                    </div >
                    <div className="info-desc">
                        <h5 className="author">Author: {data.author}</h5>
                        <h5 className="year">Year: {data.year}</h5>
                        <button onClick={() => navigate("/mylib")} className="buy-button" >ADQUIRIR OBRA</button>
                    </div >
                </div>
        </div>

    )
};


export default DocComponent;
