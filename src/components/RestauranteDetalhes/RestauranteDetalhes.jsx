import Star from '@material-ui/icons/Star';
import "./style.css";
import React from 'react';

function RestauranteDetalhes(props) {
    let valor_entrega = props.valor_entrega;
    if(props.valor_entrega === 0) valor_entrega = "Grátis";
    return (
        <div className='details-container'>
            <div className='principal-info'>
                <div className='img-space'>
                    <img src={props.imagem} alt={props.nome} />
                </div>
                <div className='resume-info'>
                    <p className='name'>{props.nome}</p>
                    <span className='dist'>{props.distancia} km</span>
                    <span className='rating'>
                        <Star /> {props.nota}
                    </span>
                    <span className='time'>
                        {props.tempo_medio} - {valor_entrega}
                    </span>
                </div>
            </div>
                <div className='description-field'>
                    <p className='description'>{props.descricao}</p>
                    <span className='address'>{props.endereco}</span>
                </div>
                
        </div>
    )
}

export default RestauranteDetalhes;