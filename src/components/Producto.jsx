function Producto({ imagen, nombre, precio,textoBoton }) {
  return (
    <div className="producto-card">
      <img src={imagen} alt={nombre} className="producto-img" />

      <div className="producto-info">
        <h4>{nombre}</h4>
        <p>{precio}</p>
        <i className="bi bi-heart"></i>
      </div>

      <button className="btn-comprar">COMPRAR</button>
     
    </div>
  );
}

export default Producto;