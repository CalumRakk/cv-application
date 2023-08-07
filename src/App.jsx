import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'

function Encebezado({ profesion="Programador", fullnombre  }) {
  return (
    <div className="cv__encabezado">
      <div className="encabezado_contenedor">
        <div className="encabezado__portada"></div>
        <div className="encabezado_nombresYprofesion">
          <h1 className="encabezado__nombre" id="fname">{fullnombre}</h1>
          <span className="encabezado__profesion">{profesion}</span>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [fullnombre, setfullnombre] = useState('Leonardo C.');

  function handle_fullname_change (e) {
    setfullnombre(e.target.value);
  };


  return (
    <>
      <main> 
        <aside className="formulario">
          <form className="form-encabezado"> 
            <section>
              <label for="fname">Nombre y Apellido</label>                     
              <input type="text" onChange={handle_fullname_change} placeholder={fullnombre}/>
            </section>
          </form>  


        </aside>  

             
        <aside className="cv">
          <Encebezado fullnombre={fullnombre}/>
          
          <div className="cv__izquierdo">
            <section className="contacto__contenedor">
              <h3 className="contacto__titulo">CONTACTO</h3>
              <ul className="contacto_lista">
                <li className="contacto__icon"> <img src="src/assets/mail.svg" width="16px"/> +51</li>
                <li className="contacto__icon"> <img src="src/assets/telefono.svg" width="16px"/> ejemplo@ejemplo.com</li>
              </ul>
            </section>

            <section className="contacto__contenedor">
              <h3 className="contacto__titulo">HABILIDADES</h3>
              <h4 className="contacto__subtitulo">Lenguajes de Programación</h4>
              <ul className="contacto_lista">
                <li>
                  <span>Python</span>
                  <div className="progress" >
                    <div className="progress-bar">35%</div>
                  </div>
                </li>
                <li>
                  <span>C++</span>
                  <div className="progress" >
                    <div className="progress-bar">35%</div>
                  </div>
                </li>
              </ul>

            <h4 className="contacto__subtitulo">Otros programas</h4>
              <ul className="contacto_lista">
                <li>
                  <span>DOM</span>
                  <div className="progress" >
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
                  <div className="progress" >
                    <div className="progress-bar">35%</div>
                  </div>
                </li>
                <li>
                  <span>Arabe</span>
                  <div className="progress" >
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

          <div class="cv__derecho">
            Breve presentación y descripción de tus fortalezas y cualidades que te hacen un  buen postulante al empleo.
  ******************************************************************************************************************
            <div class="experienciaLaboral">
              <section class="experienciaLaboral__elementos">
                <h3 class="experienciaLaboral__titulo">Experiencia Laboral</h3>
                <section>
                  <h4 class="experienciaLaboral__subtitulo">Nombre de la empresa, Lugar</h4>
                  <ul>
                    <li>Puesto desempeñado, fecha de inicio - fecha de salida</li>
                  </ul>
                </section>
                <section>
                  <h4 class="experienciaLaboral__subtitulo">Nombre de la empresa, Lugar</h4>
                  <ul>
                    <li>Puesto desempeñado, fecha de inicio - fecha de salida</li>
                  </ul>
                </section>
                <section>
                  <h4 class="experienciaLaboral__subtitulo">Nombre de la empresa, Lugar</h4>
                  <ul>
                    <li>Puesto desempeñado, fecha de inicio - fecha de salida</li>
                  </ul>
                </section>
              </section> 
    
              
              <section class="experienciaLaboral__elementos">
                <h3 class="experienciaLaboral__titulo">Educación</h3>
                <section>
                  <h4 class="experienciaLaboral__subtitulo">Nombre del cv de estudios, Lugar</h4>
                  <p>Nombre de la carrera , año de inicio</p>
                </section>
                <section>
                  <h4 class="experienciaLaboral__subtitulo">Nombre del cv de estudios, Lugar</h4>
                  <p>Nombre de la carrera , año de inicio</p>
                </section>
                <section>
                  <h4 class="experienciaLaboral__subtitulo">Nombre del cv de estudios, Lugar</h4>
                  <p>Nombre de la carrera , año de inicio</p>
                </section>
              </section>
              
              <section class="experienciaLaboral__elementos">
                <h3 class="experienciaLaboral__titulo">Cursos y Capacitaciones</h3>
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
  )
}

export default App
