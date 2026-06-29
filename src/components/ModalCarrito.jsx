import React from "react";
import { Modal, Button } from "react-bootstrap";

function ModalCarrito({ show, handleClose, cart, removeFromCart }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Carrito de compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart.length === 0 ? (
          <p>Tu carrito está vacío</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="d-flex justify-content-between align-items-center mb-2">
              <span>{item.name}</span>
              <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>
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

export default ModalCarrito;
