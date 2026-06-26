import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import "./Home.css";

function Producto({ imagen, nombre, precio, addToCart, addToFavorites, removeFromFavorites }) {
  const [liked, setLiked] = useState(false);

  const handleFavorite = () => {
    setLiked(!liked);
    if (!liked) {
      addToFavorites({ id: nombre, name: nombre, price: precio, image: imagen });
    } else {
      removeFromFavorites(nombre);
    }
  };

  return (
    <div className="producto-card">
      <img src={imagen} alt={nombre} className="producto-img" />

      <div className="producto-info">
        <h4>{nombre}</h4>
        <p>{precio}</p>
        <FaHeart
          className={`heart-icon ${liked ? "liked" : ""}`}
          onClick={handleFavorite}
        />
      </div>

      <button
        className="btn-comprar"
        onClick={() => addToCart({ id: nombre, name: nombre, price: precio, image: imagen })}
      >
        Comprar
      </button>
    </div>
  );
}

export default Producto;
