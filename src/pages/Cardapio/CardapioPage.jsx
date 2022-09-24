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
            <h2>{cardapio[0].categoria}</h2>
            <section>
                <div className="item">
                </div>
            </section>
        </div>
    )
}
export default CardapioPage;