const RestauranteCard = (props) => {
  function mostrarGratis(valor) {
    if (valor === 0) {
      return "Grátis";
    } else {
      return valor;
    }
  }

  const valorAtualizado = mostrarGratis(props.valor);

  return (
    <div>
      <div>
        <img src={props.imagem} alt="Logo restaurante" />
      </div>
      <div>
        <h2>{props.titulo}</h2>
        <p>Distância: {props.distancia}</p>
        <p>{props.nota}</p>
        <p>
          {props.tempo} {valorAtualizado}
        </p>
      </div>
    </div>
  );
};

export default RestauranteCard;
