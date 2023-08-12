import React from 'react';
import SCI from "../../assets/MetaMask_Fox.svg"
import { Doc } from '../../entities/Doc';
import "./style.css"

interface Props {
    data: Doc
}

const DocComponent: React.FC<Props> = ({data}) => (
    // <ul>
    //     {data.map(item => (
    //         <li className='list' key={item._id}>
    //             {/* <img className="sci-logo" src={SCI} alt="SCI Logo"/> */}
    //             <div>{item.name}</div>
    //             <div>{item.year}</div>
    //             <div>{item.author}</div>
    //         </li>
    //     ))}
    // </ul>
    <div className='doc-container'>
        <div className='doc-content'>
            <div className='doc-image'>
                <img className="sci-logo" src={SCI} alt="SCI Logo"/>
            </div>
            <h4>{data.name}</h4>
            <h5>{data.author}</h5>
            <h5>{data.year}</h5>
        </div>
    </div>
);

export default DocComponent;
