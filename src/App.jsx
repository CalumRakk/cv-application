import { useState } from "react";
import "./style.css";
import { Encebezado } from "./componentes/Encebezado.jsx";
import { Formulario } from "./componentes/Formulario.jsx";
import {Contacto } from "./componentes/Contacto.jsx";
import {
  handle_fullname_change,
  handle_profesion_change,
  handle_portadaURL_change,
  handle_telefono_change,
  handle_correo_change
} from "./utils";


const FormularioSeccion = ({ isOpen, children }) => {
  return (
    <div className={`formulario-seccion ${isOpen ? 'open' : ''}`}>
      {children}      
    </div>
  );
};

function App() {
  const [fullnombre, setfullnombre] = useState("Leonardo C.");
  const [profesion, setprofesion] = useState("Programador");
  const [portadaURL, setportadaURL] = useState(
    "img/Carpincho esperando frente a un rio.png"
  );

  const [telefono, setTelefono] = useState("+5731234567");
  const [correo, setCorreo] = useState("Leoca34@gmail.com");

  const [formularioVisible, setFormularioVisible] = useState(true);

  return (
    <>
      <main>
        <aside className="formulario">
          <Formulario
            fullnombre={fullnombre}
            profesion={profesion}
            telefono={telefono}
            correo={correo}
            handle_fullname_change={(e) =>
              handle_fullname_change(e, setfullnombre)
            }
            handle_profesion_change={(e) =>
              handle_profesion_change(e, setprofesion)
            }
            handle_portadaURL_change={(e) =>
              handle_portadaURL_change(e, setportadaURL)
            }
            handle_telefono_change={(e) =>
              handle_telefono_change(e, setTelefono)
            }
            handle_correo_change={(e) =>
              handle_correo_change(e, setCorreo)
            }
          />

          <button onClick={() => setFormularioVisible(!formularioVisible)}> {formularioVisible ? 'Cerrar' : 'Abrir'} Formulario</button>          
          <FormularioSeccion isOpen={formularioVisible}>            
            <form className="form-encabezado">
              <input type="text" placeholder="prueba"/>
            </form>
         </FormularioSeccion>

        </aside>

        <aside className="cv">
          <Encebezado
            fullnombre={fullnombre}
            profesion={profesion}
            portadaURL={portadaURL}
          />

          <div className="cv__izquierdo">
            <Contacto
              telefono={telefono}
              correo={correo}
            />
            <section className="contacto__contenedor">
              <h3 className="contacto__titulo">HABILIDADES</h3>
              <h4 className="contacto__subtitulo">Lenguajes de Programación</h4>
              <ul className="contacto_lista">
                <li>
                  <span>Python</span>
                  <div className="progress">
                    <div className="progress-bar">35%</div>
                  </div>
                </li>
                <li>
                  <span>C++</span>
                  <div className="progress">
                    <div className="progress-bar">35%</div>
                  </div>
                </li>
              </ul>

              <h4 className="contacto__subtitulo">Otros programas</h4>
              <ul className="contacto_lista">
                <li>
                  <span>DOM</span>
                  <div className="progress">
                    <div className="progress-bar">35%</div>
                  </div>
                </li>
                <li>
                  <span>Excel</span>
                  <div className="progress">
                    <div className="progress-bar">35%</div>
                  </div>
                </li>
              </ul>
            </section>

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
