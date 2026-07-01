import { useState, useRef, useEffect } from "react";
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
      nombreCap: "Prologo",
      imgPortada: "/assets/chapter_2.png",
      descripcion:
        "Un ritual maya intenta sellar una fuerza oscura. Siglos después, la niña Selma rompe la barrera y libera la Fractura, un fenómeno que desata el miedo más profundo de cada persona.",
      vinetas: [
        {
          id: 1,
          src: "/vinetas/Viñeta_n°1/index.html",
          audio: "/assets/audios/audio1.mp3",
          subtitulo:
            "Hace miles de años, en lo más profundo de la selva maya, los sacerdotes de una antigua civilización llevaron a cabo un ritual prohibido. No era para invocar a los dioses, sino para sellar una fuerza. Una presencia oscura que no tenía cuerpo, pero sí conciencia. Una energía que se metía en la mente de los hombres… y les mostraba lo que más temían. Uno de los sacerdotes se planteaba qué tan capacitado estaba para realizar el ritual y se encontraba dudoso de lo que hacía.",
        },
        {
          id: 2,
          src: "/vinetas/Viñeta_n°2/index.html",
          audio: "/assets/audios/audio2.mp3",
          subtitulo: "Uno por el cuerpo.\nUno por el espíritu.\nUno por el miedo.",
        },
        {
          id: 3,
          src: "/vinetas/Viñeta_n°3/index.html",
          audio: "/assets/audios/audio3.mp3",
          subtitulo: "Debido a que el sacerdote dudó, el ritual no fue completado.",
        },
        {
          id: 4,
          src: "/vinetas/Viñeta_n°4/index.html",
          audio: "/assets/audios/audio4.mp3",
          subtitulo:
            "Con los siglos, fue olvidada la entidad. Enterrada por el tiempo. Y el mundo siguió, sin saber lo que dormía bajo sus pies. Hasta que una niña pequeña, Selma, la despertó.",
        },
      ],
    },
    {
      id: 2,
      nombreCap: "Lo que no se dice",
      imgPortada: "/assets/chapter_0.png",
      descripcion:
        "Cinco años tras la Fractura, Alma protege a un pequeño grupo en un refugio subterráneo. Niko, un adolescente impulsivo, busca demostrar su valor. Afuera, la misteriosa Vika aparece sin protección, desafiando las reglas del nuevo mundo.",
      vinetas: [
        {
          id: 5,
          src: "/vinetas/Viñeta_n°5/index.html",
          audio: "/assets/audios/audio5.mp3",
          subtitulo: 'SELMA: "Es solo un libro viejo."',
        },
        {
          id: 6,
          src: "/vinetas/Viñeta_n°6/index.html",
          audio: "/assets/audios/audio6.mp3",
          subtitulo:
            "El manuscrito es guardado en su mochila sin mayor cuidado. Pero con eso bastó. La barrera se rompió. La oscuridad fue liberada.",
        },
        {
          id: 7,
          src: "/vinetas/Viñeta_n°7/index.html",
          audio: "/assets/audios/audio7.mp3",
          subtitulo:
            "El manuscrito es guardado en su mochila sin mayor cuidado. Pero con eso bastó. La barrera se rompió. La oscuridad fue liberada.",
        },
        {
          id: 8,
          src: "/vinetas/Viñeta_n°8/index.html",
          audio: "/assets/audios/audio8.mp3",
          subtitulo:
            "Las personas empezaron a ver cosas. No criaturas. No monstruos. Lo peor de sí mismos. Su trauma. Su miedo. Su culpa. Sus pesadillas más profundas.",
        },
        {
          id: 10,
          src: "/vinetas/Viñeta_n°10/index.html",
          audio: "/assets/audios/audio9.mp3",
          subtitulo:
            "Y entonces… empezaron a morir. Sin explicación. Sin sangre. Solo… con los ojos abiertos.",
        },
      ],
    },
    {
      id: 3,
      nombreCap: "EN CONSTRUCCION...",
      imgPortada: "/assets/chapter_3.png",
      
      vinetas: [],
    },
    {
      id: 4,
      nombreCap: "EN CONSTRUCCION...",
      imgPortada: "/assets/chapter_1.png",
      
      vinetas: [],
    },
  ],
};

// ─────────────────────────────────────────────
// VISTA: HOME
// ─────────────────────────────────────────────
function HomeView({ onSelectCap }) {
  return (
    <>
      <section className="hero">
        <div className="hero-texto">
          <h1 className="hero-title">{comic.nombreComic}</h1>
          <p className="hero-desc">{comic.descripcion}</p>
        </div>
      </section>

      <section className="episodios">
        <h2 className="episodios-title">Episodios</h2>
        <div className="grid">
          {comic.capitulos.map((cap) => (
            <div key={cap.id} className="card" onClick={() => onSelectCap(cap.id)}>
              <img src={cap.imgPortada} alt={cap.nombreCap} className="card-img" />
              <p className="card-title">{cap.nombreCap}</p>
              <p className="card-desc">{cap.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div>
          <h3 className="footer-title">CHROIT</h3>
          <p className="footer-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
function CapituloView({ capId, onSelectCap, onBack, onLeer }) {
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
        <header className="cap-header">
          <div>
            <img src="/assets/reloj_completo.png" alt="CHROIT" className="cap-logo-img" />
          </div>
          <nav>
            <ul className="nav-list">
              <li><a href="#" className="nav-link">Sobre nosotros</a></li>
              <li><a href="#" className="nav-link">Blog</a></li>
              <li><a href="#" className="nav-link">Suscribir</a></li>
              <li><a href="#" className="nav-link">Iniciar sesión</a></li>
            </ul>
          </nav>
        </header>

        <img src={capitulo.imgPortada} alt={capitulo.nombreCap} className="cap-fondo" />

        <div className="cap-cont-text">
          <h1 className="cap-title">{capitulo.nombreCap}</h1>
          <h4 className="cap-desc">{capitulo.descripcion}</h4>
          {capitulo.vinetas.length > 0 && (
            <button className="cap-btn" onClick={() => onLeer(capId)}>LEER</button>
          )}
        </div>

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

      <button onClick={onBack} className="back-btn">← Volver a episodios</button>
    </>
  );
}

// ─────────────────────────────────────────────
// VISTA: VISOR DE VIÑETAS
// ─────────────────────────────────────────────
function VisorView({ capId, onBack }) {
  const capitulo = comic.capitulos.find((c) => c.id === capId);
  const vinetas = capitulo?.vinetas || [];

  const [indice, setIndice] = useState(0);
  const [sonidoActivo, setSonidoActivo] = useState(true);
  const [subtitulosActivos, setSubtitulosActivos] = useState(true);
  const audioRef = useRef(null);

  const vinetaActual = vinetas[indice];
  const esUltima = indice === vinetas.length - 1;
  const esPrimera = indice === 0;

  // Cada vez que cambia la viñeta, carga su audio correspondiente
  useEffect(() => {
    if (audioRef.current && vinetaActual) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.load();
      if (sonidoActivo) {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [indice]);

  // Pausa o reanuda sin cambiar de viñeta
  useEffect(() => {
    if (audioRef.current) {
      if (sonidoActivo) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [sonidoActivo]);

  if (vinetas.length === 0) {
    return (
      <div className="visor-vacio">
        <p>Este capítulo aún no tiene viñetas.</p>
        <button onClick={onBack} className="back-btn">← Volver</button>
      </div>
    );
  }

  return (
    <div className="visor-container">

      {/* Audio de la viñeta actual */}
      <audio ref={audioRef} key={vinetaActual.audio}>
        <source src={vinetaActual.audio} type="audio/mp3" />
      </audio>

      {/* Layout principal */}
      <div className="visor-layout">

        {/* Columna central — viñeta + subtítulo */}
        <div className="visor-centro">
          <div className="visor-frame-wrap">
            <iframe
              key={vinetaActual.src}
              src={vinetaActual.src}
              className="visor-iframe"
              title={`Viñeta ${vinetaActual.id}`}
              scrolling="no"
            />
          </div>

          {/* Subtítulo debajo de la viñeta */}
          {subtitulosActivos && (
            <div className="visor-subtitulo">
              <p>{vinetaActual.subtitulo}</p>
            </div>
          )}

          {/* Fin del capítulo */}
          {esUltima && (
            <div className="visor-fin">
              <p>— Fin del capítulo —</p>
              <button className="back-btn" onClick={onBack}>Volver a episodios</button>
            </div>
          )}

          {/* Indicador de puntos */}
          <div className="visor-indicador">
            {vinetas.map((_, i) => (
              <span
                key={i}
                className={`visor-punto ${i === indice ? "activo" : ""}`}
                onClick={() => setIndice(i)}
              />
            ))}
          </div>
        </div>

        {/* Columna derecha — botones */}
        <div className="visor-sidebar">

          {/* Inicio */}
          <button className="visor-icono" onClick={onBack} title="Volver al inicio">
            🏠
          </button>

          {/* Subtítulos */}
          <button
            className={`visor-icono ${subtitulosActivos ? "activo" : ""}`}
            onClick={() => setSubtitulosActivos(!subtitulosActivos)}
            title={subtitulosActivos ? "Ocultar subtítulos" : "Mostrar subtítulos"}
          >
            💬
          </button>

          {/* Sonido */}
          <button
            className={`visor-icono ${sonidoActivo ? "activo" : ""}`}
            onClick={() => setSonidoActivo(!sonidoActivo)}
            title={sonidoActivo ? "Silenciar" : "Activar sonido"}
          >
            {sonidoActivo ? "🔊" : "🔇"}
          </button>

          {/* Separador */}
          <div className="visor-separador" />

          {/* Anterior */}
          <button
            className={`visor-icono visor-flecha ${esPrimera ? "desactivado" : ""}`}
            onClick={() => !esPrimera && setIndice(indice - 1)}
            title="Viñeta anterior"
          >
            ‹
          </button>

          {/* Siguiente */}
          <button
            className={`visor-icono visor-flecha ${esUltima ? "desactivado" : ""}`}
            onClick={() => !esUltima && setIndice(indice + 1)}
            title="Viñeta siguiente"
          >
            ›
          </button>

        </div>
      </div>
    </div>
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

  function irAVisor(id) {
    setCapId(id);
    setVista("visor");
  }

  function irAHome() {
    setVista("home");
    setCapId(null);
  }

  function irACapDesdeVisor() {
    setVista("capitulo");
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fdfdfd", color: "#222" }}>
      {vista === "home" && <HomeView onSelectCap={irACap} />}
      {vista === "capitulo" && (
        <CapituloView
          capId={capId}
          onSelectCap={irACap}
          onBack={irAHome}
          onLeer={irAVisor}
        />
      )}
      {vista === "visor" && (
        <VisorView capId={capId} onBack={irACapDesdeVisor} />
      )}
    </div>
  );
}
