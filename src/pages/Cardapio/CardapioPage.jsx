import { useState } from "react";
import { useEffect } from "react";
import { getDetalhes } from "../../services/detalhes.service";

function CardapioPage() {
    const [cardapio, setCardapio] = useState([{
        categoria: "",
        itens: [{}],
    }]);

    useEffect(() => {
        getDetalhes(0).then((data) => {
            setCardapio(data.cardapio);
        });
    }, []);

    return (
        <div className="categoriaComida">
            {cardapio.map((categoria, i) => {
                { console.log(categoria) }
                return (
                    <div key={i}>
                        <h2>{categoria.categoria}</h2>
                        {categoria.itens.map((item, i) => {
                            {console.log(item)}
                            return (
                                <section key={i}>
                                    <div className="item">
                                        <img src={item.imagem} alt={item.nome} />
                                        <h3>{item.nome}</h3>
                                        <h4>{item.descricao}</h4>
                                        <span className="preco">{item.valor}</span>
                                    </div>
                                </section>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}
export default CardapioPage;