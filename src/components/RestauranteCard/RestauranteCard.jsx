import "./styles.css";
import Star from "@material-ui/icons/Star";

const RestauranteCard = (props) => {
  function mostrarGratis(valor) {
    if (valor === 0) {
      return "Grátis";
    } else {
      return "R$" + valor;
    }
  }

  const valorAtualizado = mostrarGratis(props.valor);

  return (
    <div className="card">
      <div className="imgContainer">
        <img src={props.imagem} alt="Logo restaurante" />
      </div>
      <div className="restauranteInfo">
        <h2>{props.titulo}</h2>
        <p>{props.distancia} km</p>
        <p className="nota">
          <Star fontSize="medium" /> {props.nota}
        </p>
        <p>
          {props.tempo} - {valorAtualizado}
        </p>
      </div>
    </div>
  );
};

export default RestauranteCard;
