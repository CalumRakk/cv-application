//
import { Pila } from "./CvIzquierdo.Pila.jsx";
import { Contacto } from "./CvIzquierdo.Contacto.jsx";
export function CvIzquierdo({
  datosPersonales,
  lenguajeList,
  programaList,
  idiomaList,
}) {
  return (
    <>
      <div className="cv__izquierdo">
        <Contacto
          telefono={datosPersonales.telefono}
          correo={datosPersonales.correo}
        />
        <section className="contacto__contenedor">
          <h3 className="contacto__titulo">HABILIDADES</h3>
          <h4 className="contacto__subtitulo">Lenguajes de Programación</h4>
          <Pila lenguajeList={lenguajeList} />

          <h4 className="contacto__subtitulo">Otros programas</h4>
          <Pila lenguajeList={programaList} />
        </section>

        <section className="contacto__contenedor">
          <h3 className="contacto__titulo">Idioma</h3>
          <Pila lenguajeList={idiomaList} />
        </section>

        <section className="contacto__contenedor">
          <h3 className="contacto__titulo">PORTAFOLIO</h3>
          <span>{datosPersonales.portafolio} </span>
        </section>
      </div>
    </>
  );
}
