import { useState } from "react";
import "./AuthPanel.css";

export default function AuthPanel() {
  const [modo, setModo] = useState("login");
  const esRegistro = modo === "register";

  return (
    <div className="auth-wrapper">
      <div className={`auth-box ${esRegistro ? "show-register" : ""}`}>

        {/* ── FORMULARIO LOGIN ── */}
        <div className="auth-form-panel panel-login">
          <h2 className="auth-title">Iniciar sesión</h2>
          <p className="auth-subtitle">o usa tu cuenta</p>
          <div className="auth-socials">
            <button className="auth-social-btn">G</button>
            <button className="auth-social-btn">f</button>
            <button className="auth-social-btn">𝕏</button>
            <button className="auth-social-btn">in</button>
          </div>
          <span className="auth-divider">o usa tu email</span>
          <input className="auth-input" type="email" placeholder="Email" />
          <input className="auth-input" type="password" placeholder="Contraseña" />
          <a href="#" className="auth-forgot">¿Olvidaste tu contraseña?</a>
          <button className="auth-btn">INGRESAR</button>
        </div>

        {/* ── FORMULARIO REGISTRO ── */}
        <div className="auth-form-panel panel-register">
          <h2 className="auth-title">Crear cuenta</h2>
          <p className="auth-subtitle">o usa tu email para registrarte</p>
          <div className="auth-socials">
            <button className="auth-social-btn">G</button>
            <button className="auth-social-btn">f</button>
            <button className="auth-social-btn">𝕏</button>
            <button className="auth-social-btn">in</button>
          </div>
          <span className="auth-divider">o usa tu email</span>
          <input className="auth-input" type="text" placeholder="Nombre" />
          <input className="auth-input" type="email" placeholder="Email" />
          <input className="auth-input" type="password" placeholder="Contraseña" />
          <button className="auth-btn">REGISTRARSE</button>
        </div>

        {/* ── OVERLAY MORADO ── */}
        <div className="auth-overlay">
          <div className="overlay-left">
            <h2>¡Bienvenido de vuelta!</h2>
            <p>Para seguir conectado, inicia sesión con tu información personal.</p>
            <button className="auth-overlay-btn" onClick={() => setModo("login")}>
              INGRESAR
            </button>
          </div>
          <div className="overlay-right">
            <h2>¡Hola, bienvenido!</h2>
            <p>Ingresa tus datos personales y comienza tu viaje con nosotros.</p>
            <button className="auth-overlay-btn" onClick={() => setModo("register")}>
              REGISTRARSE
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
