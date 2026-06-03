import "./Home.css";
import Producto from "./Producto.jsx";

import chroitLogo from "../assets/chroit.png";
import relojImg from "../assets/reloj.jpeg";
import fondoTeaser from "../assets/fondo-teaser.png";
import gearIcon from "../assets/engranajes.png";
import relojIcon from "../assets/icontime.png";
import rayoIcon from "../assets/rayo.png";
import totePurple from "../assets/totePurple.png";
import toteWhite from "../assets/toteWhite.png";
import { Link } from "react-router-dom";




function Home({texto, titulo}) {
  return (
    <>

       {/* HERO */}
        <header className="hero-container">

        {/* NAVBAR */}
        <nav className="navbar-main px-5 py-3">
            <div className="container-fluid">
            <div className="row align-items-center">

                {/* BUSCADOR — IZQUIERDA */}
                <div className="col-4 d-flex align-items-center">
                <div className="search-bar d-flex align-items-center px-3">
                    <i className="bi bi-search me-2"></i>
                    <span>Buscar</span>
                </div>
                </div>

                {/* MENÚ — CENTRO */}
                <div className="col-4 d-flex justify-content-center">
                <div className="d-flex gap-4 nav-links">
                    <a className="nav-link text-white" href="#">Proyecto</a>
                    
                    <a className="nav-link text-white" href="#">Comic</a>
                    <a className="nav-link text-white" href="#">Tienda</a>
                    <a className="nav-link text-white" href="#">Integrantes</a>
                </div>
                </div>

                {/* ICONOS — DERECHA */}
                <div className="col-4 d-flex justify-content-end">
                <div className="d-flex gap-4 icon-group">
                    <i className="bi bi-cart text-white fs-4"></i>
                    <i className="bi bi-heart text-white fs-4"></i>
                    <i className="bi bi-person text-white fs-4"></i>
                </div>
                </div>

            </div>
            </div>
        </nav>

        {/* LOGO CENTRAL */}
        <div className="hero-logo-container">
            <img src={chroitLogo} alt="chroit" className="hero-logo" />
        </div>

        </header>


     
      {/* SECCIÓN EL ALMA */}
      <section className="alma-section">

        <h2 className="alma-title-top">El Alma</h2>

        <h2 className="alma-title-main">De CHROIT</h2>

        <p className="alma-text">
          {texto}
        </p>

      </section>

    
      {/* NUEVA SECCIÓN (MODO OBJETIVO) */}
      <section className="section-split d-flex flex-column flex-md-row">

        {/* IZQUIERDA */}
        <div className="left-panel d-flex flex-column justify-content-center p-5">
          <h2 className="section-title mb-4">
            {titulo}
          </h2>

          <p className="section-text">
            En CHROIT buscamos transformar el tiempo en experiencias significativas,
            potenciando la creatividad y el diseño como herramientas para dar vida a historias
            que conectan, inspiran y trascienden.
          </p>
        </div>

        {/* DERECHA */}
        <div className="right-panel">
          <img
            src={relojImg} 
            alt="mision"
            className="img-fluid section-image"
          />
        </div>

      </section>

       
        {/* SECCIÓN: REFERENTES DE LA MARCA */}
        <section className="referentes-section container text-center py-5">

            <h3 className="referentes-subtitle">Referentes de la marca</h3>

            <h2 className="referentes-title">
                Los pilares que dieron forma a <br /> nuestra identidad
            </h2>

            <div className="row mt-4 g-4">

                {/* PILAR 1 */}
                <div className="col-12 col-md-4">
                <img
                    src={gearIcon}
                    alt="engranajes"
                    className="referente-icon"
                />

                <h4 className="referente-heading mt-3">
                    Cada elemento en CHROIT tiene un propósito
                </h4>

                <p className="referente-text">
                    La marca refleja orden, estrategia y control, tanto en su mensaje como en su forma visual.
                    Nada está puesto al azar.
                </p>
                </div>

                {/* PILAR 2 */}
                <div className="col-12 col-md-4">
                <img
                    src={relojIcon}
                    alt="reloj de arena"
                    className="referente-icon"
                />

                <h4 className="referente-heading mt-3">
                    El tiempo es el eje central de CHROIT
                </h4>

                <p className="referente-text">
                    No solo como algo que pasa, sino como un recurso valioso que puede organizarse, gestionarse y aprovecharse.
                </p>
                </div>

                {/* PILAR 3 */}
                <div className="col-12 col-md-4">
                <img
                    src={rayoIcon}
                    alt="rayo"
                    className="referente-icon"
                />

                <h4 className="referente-heading mt-3">
                    CHROIT nace de una necesidad de comunicar ideas de forma clara y moderna
                </h4>

                <p className="referente-text">
                    Su diseño está basado en la simplicidad, el minimalismo y una estética visual que proyecta tecnología y creatividad.
                </p>
                </div>

            </div>

        </section>


        
        {/* SECCIÓN CUADRO DE HISTORIA / DESCRIPCIÓN */}

        <section className="cuadro-historia container d-flex justify-content-center">

            <div className="cuadro-box text-center">

                <p>
                Nuestra marca <strong>“CHROIT”</strong> tiene como primera creación un comic
                interactivo transmedia al que llamamos <strong>sombras del despertar</strong>.
                </p>

                <p className="mt-4">
                Esta historia tiene como referente la película <strong>Bird Box</strong> y 
                <strong> The Happening</strong>, principalmente escenario postapocalíptico 
                que se muestra.
                </p>

            </div>

        </section>

        {/*  SECCION BANNER */}
        <section className="container-fluid seccion-banner-morado d-flex justify-content-center align-items-center">

           <h2 className="titulo-banner">SOMBRAS<br />DEL DESPERTAR</h2>

        </section>

       {/*  FONDO-TEASER */}

        <section className="seccion-teaser container-fluid d-flex align-items-center" style={{ backgroundImage: `url(${fondoTeaser})` }}>

            <div className="texto-teaser ms-auto">

                <h3 className="frase-teaser cursiva">
                Ella solo quería ver qué había dentro…
                </h3>

                <p className="descripcion-teaser">
                Lo abrió. Y lo que desató no piensa detenerse.<br />
                Mira el teaser y atrévete a ver lo que nunca debió abrirse
                </p>

                <button className="btn-teaser">IR A TEASER</button>

            </div>

        </section>

        {/* SECCION-HISTORIA */}
        <section className="historia-section d-flex flex-column flex-md-row">

            {/* IZQUIERDA — IMAGEN */}
            <div className="historia-img"></div>

                {/* DERECHA — TEXTO */}
                <div className="historia-text-container p-5 ">
                    <h2 className="historia-title">Historia</h2>

                <p className="historia-paragraph">
                Sombras del Despertar nace como una experiencia narrativa única ,
                es una experiencia que te sumerge en un mundo donde el pasado y el futuro
                se entrelazan. A través de una historia distópica llena de mitología,
                misterio que son el centro de la trama , exploramos cómo las creencias
                de civilizaciones antiguas siguen marcando nuestra identidad y forma de pensar.
                Con un enfoque visual envolvente y una narrativa que invita a la reflexión,
                este proyecto no solo entretiene, sino que también despierta curiosidad por el
                legado cultural que nos define. <br /><br />
                El presente documento muestra el proceso que se llevó a cabo para la realización
                de este proyecto donde se encuentran, desde los  objetivos hasta el desarrollo
                de la identidad visual del proyecto.
                </p>
            </div>

        </section>

        <section className="cuadro-blanco-1"></section>

        {/* SECCION-PERSONAJES */}
        <section className="personajes-section container-fluid"> 
            
            <div className="row"> 

                <div className="col-12 col-md-6 personajes-text-container p-5">

                    {/* IZQUIERDA — TEXTO */}
                    <h2 className="personajes-title">Personajes</h2>

                    <p className="personajes-paragraph">
                    En un mundo colapsado por el miedo y el misterio del cielo, cuatro figuras 
                    emergen con destinos entrelazados: una protectora marcada por la pérdida, 
                    un líder fanático que predica el caos, un joven en busca de propósito y 
                    una presencia enigmática que desafía toda lógica. Esta imagen retrata a los 
                    protagonistas de una historia donde la supervivencia es solo el principio.
                    </p>
                </div>

                <div className="col-12 col-md-6 personajes-img">

                    {/* DERECHA — IMAGEN */}
                </div>

            </div>
        </section>

        <section className="cuadro-blanco-2"></section>

        {/* ECCION-COMIC-INT */}
        <section className="sd-hero-section d-flex align-items-center">

            <div className="sd-hero-content">
                <h2 className="sd-hero-title">
                SOMBRAS DEL <br /> DESPERTAR
                </h2>

                <Link className="btn sd-hero-btn py-5 px-5" to="/comic">IR AL COMIC INTERACTIVO</Link>
            </div>

        </section>

        {/* SECCION-SHOP */}
        <section className="container my-5">
        <h2 className="productos-title text-center">PRODUCTOS</h2>

            <div className="row g-5">

                <div className="col-12 col-md-4">
                <Producto
                    imagen={totePurple}
                    nombre="TOTE BAG"
                    precio="$000.000"
                
                />
                </div>

                <div className="col-12 col-md-4">
                <Producto
                    imagen={toteWhite}
                    nombre="TOTE BAG"
                    precio="$000.000"
                
                />
                </div>

                <div className="col-12 col-md-4">
                <Producto
                    imagen={totePurple}
                    nombre="TOTE BAG"
                    precio="$000.000"
                />
                </div>

                <div className="col-12 col-md-4">
                
                <Producto
                    imagen={toteWhite}
                    nombre="TOTE BAG"
                    precio="$000.000"
                    />
                    
                </div>

                <div className="col-12 col-md-4">
                <Producto
                    imagen={totePurple}
                    nombre="TOTE BAG"
                    precio="$000.000"
                />
                </div>

                <div className="col-12 col-md-4">
                <Producto
                    imagen={toteWhite}
                    nombre="TOTE BAG"
                    precio="$000.000"
                    textoBoton="verde"
                />
                </div>

            </div>

        </section>

        {/* SECCION-CREADORAS */}
        <section className="team-section container">

        <h2 className="team-title text-center">NUESTRO EQUIPO DE TRABAJO</h2>

            <div className="team-grid">

                {/* SALOME */}
                <div className="team-card">
                <img src="../src/assets/salome.png" alt="integrante" className="team-avatar" />

                <h3>Salome</h3>

                <div className="team-role">
                    <i className="bi bi-pencil"></i>
                    <span>Ilustradora</span>
                </div>

                <p>
                    una de las creadoras de CHROIT, y mi esencia está en lo visual.
                    <br/><br/>
                    Como la mente gráfica del equipo, me apasiona transformar ideas en mundos visuales que hablen por sí solos.
                    <br/><br/>
                    Mi inspiración nace de una verdad que siempre ha estado presente: las civilizaciones antiguas son el origen de todo. 
                    Aunque pasen mil años, su sabiduría y simbolismo siguen siendo pilares fundamentales de nuestra historia.
                </p>
                </div>

                {/* MARIANA */}
                <div className=" team-card">
                <img src="../src/assets/mariana.png" alt="integrante" className="team-avatar" />

                <h3>Mariana</h3>

                <div className="team-role">
                    <i className="bi bi-pencil"></i>
                    <span>Editora</span>
                </div>

                <p>
                    una de las creadoras de CHROIT, y mi esencia está en la Edición.
                    <br/><br/>
                    Soy la voz silenciosa detrás de cada palabra. Me aseguro de que la historia fluya, que cada diálogo tenga sentido y que cada emoción llegue con fuerza.
                    <br/><br/>
                    En un mundo donde el lector elige su camino, mi trabajo es que todos los caminos tengan alma, coherencia y poder narrativo.
                    No solo corrijo errores. Doy forma a lo que emociona, conecta y permanece.
                </p>
                </div>

                {/* PAULINA */}
                <div className="team-card">
                <img src="../src/assets/paulina.png" alt="integrante" className="team-avatar" />

                <h3>Paulina</h3>

                <div className="team-role">
                    <i className="bi bi-pencil"></i>
                    <span>Guionista</span>
                </div>

                <p>
                    una de las creadoras de CHROIT, y mi esencia está en los Guiones.
                    <br/><br/>
                    Mi trabajo es construir el mundo, dar vida a los personajes y escribir las decisiones que el lector podrá tomar.  
                    No solo cuento una historia, creo caminos posibles, con emociones reales y consecuencias distintas.
                    <br/><br/>
                    Cada diálogo, cada silencio y cada giro está pensado para que el lector no solo lea, sino sienta que es parte de la historia.
                </p>
                </div>

            </div>

        </section>

        <section className="mensaje-section container">

            <div className="mensaje-box">
                <p>
                En Sombras del Despertar, nuestro enfoque es claro: demostrar que lo ancestral y lo tecnológico no son opuestos, sino dos fuerzas que, juntas, pueden contar historias poderosas.
                De nuestra parte, buscamos ese equilibrio: memoria y evolución conviviendo en un mismo universo.
                </p>
            </div>

        </section>

        <footer class="footer">
            <div class="footer-container">
                <h1>CONTÁCTANOS</h1>

                <div class="datos">
                <h3>DATOS</h3>
                <p>Cel: 3004456982</p>
                <p>Correo: chroitmsp@gmail.com</p>

                <label>INGRESA AQUÍ TU CORREO:</label>
                <input type="email" placeholder="tu-email@correo.com"></input>
                </div>

                <div class="redes">
                <h3>REDES</h3>

                <div class="iconos">
                    <a href="#" target="_blank"><i class="bi bi-instagram"></i></a>
                    <a href="#" target="_blank"><i class="bi bi-facebook"></i></a>
                    <a href="#" target="_blank"><i class="bi bi-twitter-x"></i></a>
                </div>
                </div>

            </div>
        </footer>

    </>
  );
}

export default Home;
