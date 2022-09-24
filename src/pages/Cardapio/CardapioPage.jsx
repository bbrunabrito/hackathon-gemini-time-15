import { useState } from "react";
import { useEffect } from "react";
import { getDetalhes } from "../../services/detalhes.service";

function CardapioPage() {
    const [cardapio, setCardapio] = useState([{
        categoria: "",
        itens: [],
    }]);

    useEffect(() => {
        getDetalhes(0).then((data) => {
            setCardapio(data.cardapio);
            console.log(cardapio);
        });
    }, []);

    return (
        <div className="categoriaComida">
            {/* <h2>{cardapio.categoria}</h2> */}
            <section>
                {/* {cardapio.map((item, i) => {
                    <div className="item">
                        <p>asdfghj</p>
                        <img src={cardapio[0].itens[0].imagem} alt={cardapio[0].itens[0].nome} />
                        <h3>{cardapio[0].itens[0].nome}</h3>
                        <h4>{cardapio[0].itens[0].descricao}</h4>
                        <span className="preco">{cardapio[0].itens[0].valor}</span>
                    </div>
                })}  */}
            </section>
        </div>
    )
}
export default CardapioPage;