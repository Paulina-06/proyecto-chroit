import { useState } from "react";
import "./Comic.css";

// ─────────────────────────────────────────────
// BASE DE DATOS
// ─────────────────────────────────────────────
const comic = {
  nombreComic: "Sombras del Despertar",
  descripcion:
    "Bajo un cielo fracturado, un grupo de sobrevivientes lucha contra el miedo, la fe y la locura. La historia explora cómo los traumas personales se convierten en armas cuando una fuerza ancestral vuelve a despertar.",
  capitulos: [
    {
      id: 1,
      nombreCap: "Prólogo",
      imgPortada: "/assets/chapter_0.png",
      descripcion:
        "Un ritual maya intenta sellar una fuerza oscura. Siglos después, la niña Selma rompe la barrera y libera la Fractura, un fenómeno que desata el miedo más profundo de cada persona.",
    },
    {
      id: 2,
      nombreCap: "Lo que no se dice",
      imgPortada: "/assets/AA77030F-A5F1-4755-97AA-7AF9424E322E.PNG",
      descripcion:
        "Cinco años tras la Fractura, Alma protege a un pequeño grupo en un refugio subterráneo. Niko, un adolescente impulsivo, busca demostrar su valor. Afuera, la misteriosa Vika aparece sin protección, desafiando las reglas del nuevo mundo.",
    },
    {
      id: 3,
      nombreCap: "El dolor se mira",
      imgPortada: "/assets/chapter_2.png",
      descripcion:
        "Dante Reyes emerge como líder de un culto que predica mirar al cielo como fe. Alma y Niko son capturados, pero logran escapar con la ayuda de Vika. Niko desarrolla un plan para usar espejos contra la luz mortal.",
    },
    {
      id: 4,
      nombreCap: "Lo que uno elige",
      imgPortada: "/assets/chapter_3.png",
      descripcion:
        "En el clímax dentro del templo derrumbado, Dante intenta consumar su visión frente a niños y seguidores. Alma lo enfrenta, Niko activa su sistema de espejos, y Vika observa en silencio. La caída de Dante marca el despertar de una nueva esperanza.",
    },
  ],
};

// ─────────────────────────────────────────────
// VISTA: HOME
// ─────────────────────────────────────────────
function HomeView({ onSelectCap }) {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-texto">
          <h1 className="hero-title">{comic.nombreComic}</h1>
          <p className="hero-desc">{comic.descripcion}</p>
        </div>
        <div className="hero-img-wrap">
          <img
            src="/assets/AA77030F-A5F1-4755-97AA-7AF9424E322E.PNG"
            alt="Portada del cómic"
            className="hero-img"
          />
        </div>
      </section>

      {/* Episodios */}
      <section className="episodios">
        <h2 className="episodios-title">Episodios</h2>
        <div className="grid">
          {comic.capitulos.map((cap) => (
            <div
              key={cap.id}
              className="card"
              onClick={() => onSelectCap(cap.id)}
            >
              <img src={cap.imgPortada} alt={cap.nombreCap} className="card-img" />
              <p className="card-title">{cap.nombreCap}</p>
              <p className="card-desc">{cap.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div>
          <h3 className="footer-title">CHROIT</h3>
          <p className="footer-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, officiis!
          </p>
          <ul className="socials">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 CHROIT | Todos los derechos reservados</p>
        </div>
      </footer>
    </>
  );
}

// ─────────────────────────────────────────────
// VISTA: CAPÍTULO
// ─────────────────────────────────────────────
function CapituloView({ capId, onSelectCap, onBack }) {
  const capitulo = comic.capitulos.find((c) => c.id === capId);

  if (!capitulo) {
    return (
      <div style={{ padding: 40 }}>
        <p>Capítulo no encontrado.</p>
        <button onClick={onBack} className="back-btn">← Volver</button>
      </div>
    );
  }

  return (
    <>
      <div style={{ position: "relative" }}>
        {/* Header flotante */}
        <header className="cap-header">
          <div>
            <img src="/assets/logo-chroit.png" alt="CHROIT" className="cap-logo-img" />
          </div>
          <nav>
            <ul className="nav-list">
              <li><a href="#" className="nav-link">Todos los cómics ▾</a></li>
              <li><a href="#" className="nav-link">Sobre nosotros</a></li>
              <li><a href="#" className="nav-link">Blog</a></li>
              <li><a href="#" className="nav-link">Suscribir</a></li>
              <li><a href="#" className="nav-link">Iniciar sesión</a></li>
            </ul>
          </nav>
        </header>

        {/* Imagen de fondo */}
        <img src={capitulo.imgPortada} alt={capitulo.nombreCap} className="cap-fondo" />

        {/* Texto sobre la imagen */}
        <div className="cap-cont-text">
          <h1 className="cap-title">{capitulo.nombreCap}</h1>
          <h4 className="cap-desc">{capitulo.descripcion}</h4>
          <a href="#" className="cap-btn">LEER</a>
        </div>

        {/* Barra de episodios */}
        <div className="cap-btn-bar">
          {comic.capitulos.map((cap) => (
            <button
              key={cap.id}
              onClick={() => onSelectCap(cap.id)}
              className={cap.id === capId ? "cap-ep-active" : "cap-ep"}
            >
              Episodio {cap.id - 1}
            </button>
          ))}
        </div>
      </div>

      {/* Volver */}
      <button onClick={onBack} className="back-btn">← Volver a episodios</button>
    </>
  );
}

// ─────────────────────────────────────────────
// EXPORT DEFAULT
// ─────────────────────────────────────────────
export default function Comic() {
  const [vista, setVista] = useState("home");
  const [capId, setCapId] = useState(null);

  function irACap(id) {
    setCapId(id);
    setVista("capitulo");
  }

  function irAHome() {
    setVista("home");
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fdfdfd", color: "#222" }}>
      {vista === "home" && <HomeView onSelectCap={irACap} />}
      {vista === "capitulo" && (
        <CapituloView capId={capId} onSelectCap={irACap} onBack={irAHome} />
      )}
    </div>
  );
}
