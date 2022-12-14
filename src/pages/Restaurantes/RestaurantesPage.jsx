import React from "react";
import { Container, Typography, CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getRestaurantes } from "../../services/restaurantes.service";
import RestauranteCard from "../../components/RestauranteCard";
import "./style.css";

function RestaurantesPage() {
  const [nomeCategoria, setNomeCategoria] = useState([]);
  const [restaurantesBaratinho, setRestaurantesBaratinho] = useState();
  const [restaurantesNoPreco, setRestaurantesNoPreco] = useState([]);
  const [restaurantesCaro, setRestaurantesCaro] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pegar id da categoria específica
  const { id } = useParams();

  useEffect(() => {
    getRestaurantes(id).then((response) => {
      setNomeCategoria(response.categoria);
      setRestaurantesBaratinho(response.baratinho);
      setRestaurantesNoPreco(response.no_preco);
      setRestaurantesCaro(response.caro);
      setLoading(false);
    });
  }, [id]);

  return (
    <Container class="restaurantes">
      <Typography variant="h5" align="center" color="primary" className="title">
        RESTAURANTES: {nomeCategoria}
      </Typography>

      {loading && (
        <div className="loading">
          <CircularProgress color="primary" />
        </div>
      )}

      {restaurantesBaratinho ? (
        <div className="sub-header">
          <Typography variant="body1" color="primary">
            Baratinho <span>(</span>$ <span>$ $ $ $)</span>
          </Typography>
        </div>
      ) : null}

      {restaurantesBaratinho?.map((restaurante) => (
        <Link to={`/cardapio/${restaurante.id}`}>
          <RestauranteCard
            key={restaurante.id}
            titulo={restaurante.nome}
            imagem={restaurante.imagem}
            distancia={restaurante.distancia}
            nota={restaurante.nota}
            tempo={restaurante.tempo_medio}
            valor={restaurante.valor_entrega}
          />
        </Link>
      ))}

      {restaurantesNoPreco ? (
        <div className="sub-header">
          <Typography variant="body1" color="primary">
            No preço <span>(</span>$ $ $ <span> $ $)</span>
          </Typography>
        </div>
      ) : null}

      {restaurantesNoPreco?.map((restaurante) => (
        <Link to={`/cardapio/${restaurante.id}`}>
          <RestauranteCard
            key={restaurante.id}
            titulo={restaurante.nome}
            imagem={restaurante.imagem}
            distancia={restaurante.distancia}
            nota={restaurante.nota}
            tempo={restaurante.tempo_medio}
            valor={restaurante.valor_entrega}
          />
        </Link>
      ))}

      {restaurantesCaro ? (
        <div className="sub-header">
          <Typography variant="body1" color="primary">
            Caro, mas vale a pena <span>(</span>$ $ $ $ $ <span>)</span>
          </Typography>
        </div>
      ) : null}

      {restaurantesCaro?.map((restaurante) => (
        <Link to={`/cardapio/${restaurante.id}`}>
          <RestauranteCard
            key={restaurante.id}
            titulo={restaurante.nome}
            imagem={restaurante.imagem}
            distancia={restaurante.distancia}
            nota={restaurante.nota}
            tempo={restaurante.tempo_medio}
            valor={restaurante.valor_entrega}
          />
        </Link>
      ))}
    </Container>
  );
}

export default RestaurantesPage;
