//
import { Pila } from "./CvIzquierdo.Pila.jsx";
import { Contacto } from "./CvIzquierdo.Contacto.jsx";
export function CvIzquierdo({ lenguajeList, programaList }) {
  return (
    <>
      <div className="cv__izquierdo">
        <section className="contacto__contenedor">
          <h3 className="contacto__titulo">HABILIDADES</h3>
          <h4 className="contacto__subtitulo">Lenguajes de Programación</h4>
          <Pila lenguajeList={lenguajeList} />

          <h4 className="contacto__subtitulo">Otros programas</h4>
          <Pila lenguajeList={programaList} />
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
    </>
  );
}
