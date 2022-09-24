import { useState } from "react";
import { useEffect } from "react";
import { getDetalhes } from "../../services/detalhes.service";
import RestauranteDetalhes from "../../components/RestauranteDetalhes/RestauranteDetalhes";
import "./styles.css";

function CardapioPage() {
    const [cardapio, setCardapio] = useState([{
        categoria: "",
        itens: [{}],
    }]);

    const [restaurante, setRestaurante] = useState({
        "id": 0,
        "nome": "",
        "imagem": "",
        "distancia": 0,
        "tempo_medio": "",
        "valor_entrega": 0,
        "nota": 0,
        "descricao": "",
        "endereco": "",
        "cardapio": [{}],
    })

    useEffect(() => {
        getDetalhes(0).then((data) => {
            setCardapio(data.cardapio);
        });
    }, []);

    return (
        <div>
            <div>
                {/* nome
                valor_entrega
                imagem
                distancia
                nota
                tempo_medio
                descricao
                endereco
                 */}
                <RestauranteDetalhes />
            </div>
            <div className="comidas">
                {cardapio.map((categoria, i) => {
                    { console.log(categoria) }
                    return (
                        <div key={i}>
                            <h2>{categoria.categoria}</h2>
                            {categoria.itens.map((item, i) => {
                                { console.log(item) }
                                return (
                                    <section key={i} className="item">
                                        <img src={item.imagem} alt={item.nome} />
                                        <section className="informacaoComida">
                                            <h3>{item.nome}</h3>
                                            <h4>{item.descricao}</h4>
                                            <span className="preco">{item.valor}</span>
                                        </section>
                                    </section>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default CardapioPage;