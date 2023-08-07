import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'

function Encebezado({ profesion="Programador", fullnombre, portadaURL  }) {
  return (
    <div className="cv__encabezado">
      <div className="encabezado_contenedor">
        {/* <div className="encabezado__portada" style={cvStyle}></div> */}
        <img className="encabezado__portada" src={portadaURL} alt="Vite logo" />
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
  const [profesion, setprofesion] = useState('Programador');
  const [portadaURL, setportadaURL] = useState('img/Carpincho\ esperando\ frente\ a\ un\ rio.png');

  function handle_fullname_change (e) {
    setfullnombre(e.target.value);
  };
  function handle_profesion_change (e) {
    setprofesion(e.target.value);
  };
  function handle_portadaURL_change (e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const fondoURL = URL.createObjectURL(selectedFile);      
      setportadaURL(fondoURL);
    }
    
    
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
            <section>
              <label for="fname">Profesión</label>                     
              <input type="text" onChange={handle_profesion_change} placeholder={profesion}/>
            </section>
            <section>
              <label for="myfile">Imagen</label>
              <input type="file" onChange={handle_portadaURL_change} />
            </section>
          </form>  


        </aside>  

             
        <aside className="cv">
          <Encebezado fullnombre={fullnombre} profesion={profesion} portadaURL={portadaURL}/>
          
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
