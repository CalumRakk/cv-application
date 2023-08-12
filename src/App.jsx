import { useState } from "react";
import "./style.css";
import { Encebezado } from "./componentes/Encebezado.jsx";
import { Formulario } from "./componentes/Formulario.jsx";
import { Contacto } from "./componentes/Contacto.jsx";
import Habilidades from "./componentes/Habilidades.jsx";
import { handle_change, handle_portadaURL_change } from "./utils";

function App() {
  const [fullnombre, setFullName] = useState("Leonardo C.");
  const [profesion, setProfesion] = useState("Programador");
  const [telefono, setTelefono] = useState("+5731234567");
  const [correo, setCorreo] = useState("Leoca34@gmail.com");
  const [portadaURL, setPortadaURL] = useState(
    "img/Carpincho esperando frente a un rio.png"
  );

  const [lenguajeList, setLenguajeList] = useState([
    { id: window.crypto.randomUUID(), nombre: "Python", rango: 36 },
  ]);

  const [programaList, setProgramaList] = useState([
    { id: window.crypto.randomUUID(), nombre: "Excel", rango: 36 },
    { id: window.crypto.randomUUID(), nombre: "PowerPoint", rango: 45 },
  ]);

  const datosPersonales = {
    fullnombre,
    profesion,
    telefono,
    correo,
    portadaURL,
    set_fullnombre: handle_change(setFullName),
    set_profesion: handle_change(setProfesion),
    set_telefono: handle_change(setTelefono),
    set_correo: handle_change(setCorreo),
    set_portadaURL: handle_portadaURL_change(setPortadaURL),
  };

  return (
    <>
      <main>
        <aside className="formulario">
          <Formulario
            datosPersonales={datosPersonales}
            lenguajeList={lenguajeList}
            setLenguajeList={setLenguajeList}
            programaList={programaList}
            setProgramaList={setProgramaList}
          />
        </aside>

        <aside className="cv">
          <Encebezado
            fullnombre={fullnombre}
            profesion={profesion}
            portadaURL={portadaURL}
          />

          <div className="cv__izquierdo">
            <Contacto telefono={telefono} correo={correo} />
            <Habilidades
              lenguajeList={lenguajeList}
              programaList={programaList}
            />

            <section className="contacto__contenedor">
              <h3 className="contacto__titulo">LANGUAGE</h3>
              <ul className="contacto_lista">
                <li>
                  <span>Ingles</span>
                  <div className="progress">
                    <div className="progress-bar">35%</div>
                  </div>
                </li>
                <li>
                  <span>Arabe</span>
                  <div className="progress">
                    <div className="progress-bar">35%</div>
                  </div>
                </li>
              </ul>
            </section>

            <section className="contacto__contenedor">
              <h3 className="contacto__titulo">PORTAFOLIO</h3>
              <span>www.ejemplo.com </span>
            </section>
          </div>

          <div className="cv__derecho">
            Breve presentación y descripción de tus fortalezas y cualidades que
            te hacen un buen postulante al empleo.
            ******************************************************************************************************************
            <div className="experienciaLaboral">
              <section className="experienciaLaboral__elementos">
                <h3 className="experienciaLaboral__titulo">
                  Experiencia Laboral
                </h3>
                <section>
                  <h4 className="experienciaLaboral__subtitulo">
                    Nombre de la empresa, Lugar
                  </h4>
                  <ul>
                    <li>
                      Puesto desempeñado, fecha de inicio - fecha de salida
                    </li>
                  </ul>
                </section>
                <section>
                  <h4 className="experienciaLaboral__subtitulo">
                    Nombre de la empresa, Lugar
                  </h4>
                  <ul>
                    <li>
                      Puesto desempeñado, fecha de inicio - fecha de salida
                    </li>
                  </ul>
                </section>
                <section>
                  <h4 className="experienciaLaboral__subtitulo">
                    Nombre de la empresa, Lugar
                  </h4>
                  <ul>
                    <li>
                      Puesto desempeñado, fecha de inicio - fecha de salida
                    </li>
                  </ul>
                </section>
              </section>

              <section className="experienciaLaboral__elementos">
                <h3 className="experienciaLaboral__titulo">Educación</h3>
                <section>
                  <h4 className="experienciaLaboral__subtitulo">
                    Nombre del cv de estudios, Lugar
                  </h4>
                  <p>Nombre de la carrera , año de inicio</p>
                </section>
                <section>
                  <h4 className="experienciaLaboral__subtitulo">
                    Nombre del cv de estudios, Lugar
                  </h4>
                  <p>Nombre de la carrera , año de inicio</p>
                </section>
                <section>
                  <h4 className="experienciaLaboral__subtitulo">
                    Nombre del cv de estudios, Lugar
                  </h4>
                  <p>Nombre de la carrera , año de inicio</p>
                </section>
              </section>

              <section className="experienciaLaboral__elementos">
                <h3 className="experienciaLaboral__titulo">
                  Cursos y Capacitaciones
                </h3>
                <ul>
                  <li>Cursos tomados y certificados</li>
                  <li>Capacitaciones tomadas y certificados</li>
                  <li>Cursos tomados y certificados</li>
                </ul>
              </section>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
}

export default App;
