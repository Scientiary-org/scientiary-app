import React from 'react';

import { Doc } from '../../entities/Doc';
import "./style.css"
import { useNavigate } from 'react-router-dom';
import capa from "../../assets/Default.svg";


interface Props {
    data: Doc
    // capa: string
}



const DocComponent: React.FC<Props> = ({data}) => {
    
    const navigate = useNavigate();

    const handleAdquireClick = () => {
        if (data.ipfsHash) {
            const ipfsLink = `${data.ipfsHash}`; // Construct the IPFS link
            window.open(ipfsLink, '_blank'); // Open the link in a new tab or window
        }
    };


    return (
        <div className='doc-container'>
                <img className="capa" src={capa} alt="Capa"/>
                <div className="info">
                    <div className="info-title">
                        <h4>{data.name}</h4>
                    </div >
                    <div className="info-desc">
                        <h5 className="author">Author: {data.author}</h5>
                        <h5 className="year">Year: {Number(data.year)}</h5>
                        <button onClick={handleAdquireClick} className="buy-button" >ADQUIRIR OBRA</button>
                    </div>
                </div>
        </div>

    )
};


export default DocComponent;
