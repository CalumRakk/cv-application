//
function PilaCv({ lenguajeList }) {
  return (
    <ul className="contacto_lista">
      {lenguajeList.map((lenguaje) => {
        return (
          <li key={lenguaje.id}>
            <span>{lenguaje.nombre}</span>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: `${lenguaje.rango}%` }}
              >
                {lenguaje.rango}%
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default function Habilidades({ lenguajeList, programaList }) {
  return (
    <section className="contacto__contenedor">
      <h3 className="contacto__titulo">HABILIDADES</h3>
      <h4 className="contacto__subtitulo">Lenguajes de Programación</h4>
      <PilaCv lenguajeList={lenguajeList} />

      <h4 className="contacto__subtitulo">Otros programas</h4>
      <PilaCv lenguajeList={programaList} />
    </section>
  );
}
