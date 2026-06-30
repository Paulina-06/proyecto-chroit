import "./Home.css";
import Producto from "./Producto.jsx";
import AuthPanel from "../components/AuthPanel";
import ModalCarrito from "./ModalCarrito";
import ModalFavoritos from "./ModalFavoritos";
import { useState } from "react";
import { Link } from "react-router-dom";

import fondoTeaser from "../assets/fondo-teaser.png";
import gearIcon from "../assets/engranajes.png";
import relojIcon from "../assets/reloj.png";
import rayoIcon from "../assets/rayo.png";
import totePurple from "../assets/totePurple.png";
import toteWhite from "../assets/toteWhite.png";
import logo from "../assets/gif-logo.gif";

function Home({ texto, titulo }) {

  const [mostrarAuth, setMostrarAuth] = useState(false);
  const [verVideo, setVerVideo] = useState(false);

  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const [showCart, setShowCart] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));
  const addToFavorites = (product) => {
    if (!favorites.find((fav) => fav.id === product.id)) {
      setFavorites([...favorites, product]);
    }
  };
  const removeFromFavorites = (id) => setFavorites(favorites.filter((item) => item.id !== id));

  return (
    <>

      {/* HERO */}
      <header className="hero-container">

        {/* NAVBAR */}
        <nav className="navbar-main px-5 py-3">
          <div className="container-fluid">
            <div className="row align-items-center">

              {/* MENÚ — CENTRO */}
              <div className="col-12 d-flex justify-content-center">
                <div className="d-flex gap-4 nav-links">
                  <a className="nav-link text-white" href="#origen">Origen</a>
                  <a className="nav-link text-white" href="#fragmentos">Fragmentos</a>
                  <a className="nav-link text-white" href="#tienda">Tienda</a>
                  <a className="nav-link text-white" href="#creadores">Creadores</a>
                </div>
              </div>

              {/* ICONOS — DERECHA */}
              <div className="col-4 d-flex justify-content-end">
                <div className="d-flex gap-4 icon-group">
                  <i
                    className="bi bi-cart text-white fs-4"
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowCart(true)}
                  ></i>
                  <i
                    className="bi bi-heart text-white fs-4"
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowFavorites(true)}
                  ></i>
                  <i
                    className="bi bi-person text-white fs-4"
                    style={{ cursor: "pointer" }}
                    onClick={() => setMostrarAuth(true)}
                  ></i>
                </div>
              </div>

            </div>
          </div>
        </nav>

      </header>

      {/* MODAL AUTH */}
      {mostrarAuth && (
        <div
          className="auth-modal-overlay"
          onClick={() => setMostrarAuth(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <AuthPanel />
          </div>
        </div>
      )}

      {/* SECCIÓN EL ALMA */}
      <section id="origen" className="alma-section">
        <h2 className="alma-title-top">VERDAD</h2>
        <h2 className="alma-title-main">OCULTA</h2>
        <p className="alma-text">
          <span className="texto-manuscrito">Chroit </span>
          nace donde la memoria permanece viva. Entre símbolos olvidados, ecos ancestrales y futuros
          posibles, cada elección revela una <span className="texto-morado">verdad oculta</span>: el
          pasado no ha desaparecido, sigue esperando ser descubierto.
        </p>
      </section>

      {/* NUEVA SECCIÓN (MODO OBJETIVO) */}
      <section className="section-split d-flex flex-column flex-md-row">

        {/* IZQUIERDA */}
        <div className="left-panel d-flex flex-column justify-content-center p-5">
          <h2 className="fw-black text-uppercase section-title mb-4">Origen</h2>
          <p className="section-text">
            Crear experiencias trasmedia que conecten la memoria, el tiempo y la identidad, inspirando a las personas a explorar
            nuevas perspectivas y decubrir el impacto de cada decisión en su propia historia.
          </p>
        </div>

        {/* DERECHA */}
        <div className="right-panel">
          <img src={logo} alt="mision" className="img-fluid section-image" />
        </div>

      </section>

      {/* SECCIÓN: MEMORIAS VIVAS */}
      <div className="memories-bg">
        <section className="memories-section container text-center ">

          <h2 className="memories-title1">MEMORIAS <span className="memories-title2">VIVAS</span></h2>

          <div className="memories-container">
            <p className="memories-text">
              Entre engranajes, relojes y destellos, habita la escencia de Chroit.
              Símbolos que evocan el paso del tiempo, la fuerza de la transformación
              y la conexión entre cada historia. Son recuerdos convertidos en
              significado, guiando el camino de quienes se atrevan a descubrirlo.
            </p>

            <div className="row mt-4 g-4 iconos-m justify-content-between">

              <div className="col-12 col-md-4 d-flex flex-column align-items-center">
                <img src={gearIcon} alt="engranajes" className="referente-icon-g" />
                <h4 className="memories-subtitle mt-3">Conexión</h4>
              </div>

              <div className="col-12 col-md-4 d-flex flex-column align-items-center">
                <img src={relojIcon} alt="reloj de arena" className="referente-icon-r" />
                <h4 className="memories-subtitle mt-3">Memoria</h4>
              </div>

              <div className="col-12 col-md-4 d-flex flex-column align-items-center">
                <img src={rayoIcon} alt="rayo" className="referente-icon-ry" />
                <h4 className="memories-subtitle mt-3">Transformación</h4>
              </div>

            </div>
          </div>


        </section>
      </div>

      {/* SECCION BANNER */}
      <section id="fragmentos" className="container-fluid seccion-banner-morado d-flex justify-content-center align-items-center">
        <h2 className="titulo-banner">FRAGMENTOS</h2>
      </section>

      {/* SECCION OBRA */}
      <section className="obra-section">
        <h2 className="obra-title-top">OBRA</h2>
        <h2 className="obra-title-main">INICIAL</h2>
        <p className="obra-text">
          <span className="texto-manuscrito1">Sombras del Despetar</span> es el primer proyecto trasmedia de Chroit.
          Una historia postapocalíptica que se expande a través del <span className="texto-morado">cómic,</span>
          experiencias interactivas y contenido digital, invitando a la audiencia a explorar un universo donde la percepcíon y el miedo transforman la realidad
        </p>
      </section>

      {/* FONDO-TEASER */}
      <section
        className="seccion-teaser container-fluid d-flex align-items-center"
        style={verVideo ? { background: "#000" } : { backgroundImage: `url(${fondoTeaser})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >

        {verVideo ? (
          <div className="teaser-video-wrap">
            <button className="btn-cerrar-video" onClick={() => setVerVideo(false)}>✕ Cerrar</button>
  
            <video width="400" controls>
              <source src="./assets/Teaser.mp4" type="video/mp4" />
              Your browser does not support HTML video.
            </video>
          </div>
        ) : (
          <div className="texto-teaser ms-auto">
            <h3 className="frase-teaser cursiva">Ella solo quería ver qué había dentro…</h3>
            <p className="descripcion-teaser">
              Lo abrió. Y lo que desató no piensa detenerse.<br />
              Mira el teaser y atrévete a ver lo que nunca debió abrirse
            </p>
            <button className="btn-teaser" onClick={() => setVerVideo(true)}>IR A TEASER</button>
          </div>
        )}
      </section>

      {/* SECCION-HISTORIA */}
      <section className="historia-section d-flex flex-column flex-md-row">
        <div className="historia-img"></div>
        <div className="historia-text-container p-5">
          <h2 className="historia-title">Sinopsis</h2>
          <div className="content-paragraph">
            <p className="historia-paragraph1">
              Cinco años después del evento conocido como La Fractura, el mundo ha cambiado por completo. Ya nadie puede mirar al cielo sin consecuencias. Quienes lo hacen, experimentan visiones intensas y personales de sus peores miedos, traumas o errores, que los llevan al borde de la locura… y, en la mayoría de los casos, al suicidio
            </p>
            <p className="historia-paragraph2">
              Alma Serrano, una exparamédica marcada por la pérdida, sobrevive junto a un grupo de niños en una estación subterránea. Cuando una de las niñas desaparece, emprende una búsqueda que la llevará a enfrentarse a una peligrosa secta, a oscuros secretos y a sus propios demonios.
            </p>
          </div>
        </div>
      </section>

      {/* SECCION-COMIC-INT */}
      <section className="sd-hero-section d-flex align-items-center">
        <div className="sd-hero-content">
          <h2 className="sd-hero-title">SOMBRAS DEL <br /> DESPERTAR</h2>
          <Link className="btn sd-hero-btn" to="/comic">IR AL COMIC INTERACTIVO</Link>
        </div>
      </section>

      {/* SECCION BANNER */}
      <section id="tienda" className="container-fluid seccion-banner-morado d-flex justify-content-center align-items-center">
        <h2 className="titulo-banner">TIENDA</h2>
      </section>


      {/* MODAL CARRITO */}
      {showCart && (
        <div
          className="custom-modal-overlay"
          onClick={() => setShowCart(false)}
        >
          <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Carrito de compras</h3>
            {cart.length === 0 ? (
              <p>Tu carrito está vacío</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="modal-item">
                  <span>{item.name}</span>
                  <button className="btn-eliminar" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </div>
              ))
            )}
            <button className="btn-cerrar" onClick={() => setShowCart(false)}>Cerrar</button>
          </div>
        </div>
      )}

      {/* MODAL FAVORITOS */}
      {showFavorites && (
        <div
          className="custom-modal-overlay"
          onClick={() => setShowFavorites(false)}
        >
          <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Favoritos</h3>
            {favorites.length === 0 ? (
              <p>No tienes favoritos aún</p>
            ) : (
              favorites.map((item) => (
                <div key={item.id} className="modal-item">
                  <span>{item.name}</span>
                  <button className="btn-eliminar" onClick={() => removeFromFavorites(item.id)}>Eliminar</button>
                </div>
              ))
            )}
            <button className="btn-cerrar" onClick={() => setShowFavorites(false)}>Cerrar</button>
          </div>
        </div>
      )}


      {/* SECCION-SHOP */}
      <section className="container my-5">
        <h2 className="productos-title text-center">PRODUCTOS</h2>
        <div className="row g-5">
          <div className="col-12 col-md-4">
            <Producto
              imagen={totePurple}
              nombre="TOTE BAG MORADA"
              precio="$000.000"
              addToCart={addToCart}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
              removeFromCart={removeFromCart}
            />
          </div>
          <div className="col-12 col-md-4">
            <Producto
              imagen={totePurple}
              nombre="TOTE BAG MORADA"
              precio="$000.000"
              addToCart={addToCart}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
              removeFromCart={removeFromCart}
            />
          </div>
          <div className="col-12 col-md-4">
            <Producto
              imagen={totePurple}
              nombre="TOTE BAG MORADA"
              precio="$000.000"
              addToCart={addToCart}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
              removeFromCart={removeFromCart}
            />
          </div>
        </div>
      </section>


      {/*BANNER-SECTION-CREADORES*/}
      <section id="creadores" className="container-fluid banner-creadoras d-flex justify-content-center align-items-center">

        <h2 className="team-title ">CREADORES</h2>

      </section>

      {/* SECCION-CREADORAS */}
      <section className="team-section container">


        <div className="team-grid">

          <div className="team-card">
            <img src="../src/assets/Salome.png" alt="integrante" className="team-avatar" />
            <h3>Salome</h3>
            <div className="team-role"><i className="bi bi-pencil"></i><span>Ilustradora</span></div>
            <p>Da forma a las ideas que habitan nuestro universo,transformando conceptos en experiencias visuales.</p>
          </div>


          <div className="team-card">
            <img src="../src/assets/Paulina.png" alt="integrante" className="team-avatar" />
            <h3>Paulina</h3>
            <div className="team-role"><i className="bi bi-pencil"></i><span>Editora</span></div>
            <p>Teje historias y significados que dan vida a cada rincón del mundo Chroit</p>
          </div>

        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <h1>CONTACTANOS</h1>
          <div className="datos">
            <h3>DATOS</h3>
            <p>Cel: 3004456982</p>
            <p>Correo: chroit.10@gmail.com</p>
            <label>INGRESA AQUI TU CORREO:</label>
            <input type="email" placeholder="tu-email@correo.com" />
          </div>
          <div className="redes">
            <h3>REDES</h3>
            <div className="iconos">
              <a href="https://www.instagram.com" target="_blank"><i className="bi bi-instagram"></i></a>
              <a href="https://www.facebook.com" target="_blank"><i className="bi bi-facebook"></i></a>
              <a href="https://www.tiktok.com" target="_blank"><i className="bi bi-tiktok"></i></a>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}

export default Home;
