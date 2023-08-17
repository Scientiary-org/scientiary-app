import React from 'react';
import SCI from "../../assets/MetaMask_Fox.svg"
import { Obra } from '../../entities/Doc';

interface Props {
    data: Obra[]
}

const ComplexList: React.FC<Props> = ({data}) => (
    <ul>
        {data.map(item => (
            <li className='list' key={item.id}>
                {/* <img className="sci-logo" src={SCI} alt="SCI Logo"/> */}
                <div>{item.id}</div>
                <div>{item.nome}</div>
                <div>{item.autor}</div>
            </li>
        ))}
    </ul>
);

export default ComplexList;
