import React from "react";
import { Modal, Button } from "react-bootstrap";

function ModalFavoritos({ show, handleClose, favorites, removeFromFavorites }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Favoritos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {favorites.length === 0 ? (
          <p>No tienes favoritos aún</p>
        ) : (
          favorites.map((item) => (
            <div key={item.id} className="d-flex justify-content-between align-items-center mb-2">
              <span>{item.name}</span>
              <Button variant="outline-danger" size="sm" onClick={() => removeFromFavorites(item.id)}>
                Eliminar
              </Button>
            </div>
          ))
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalFavoritos;
