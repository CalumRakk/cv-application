//
function PilaCv({ lenguajeList }) {
  return (
    <ul className="contacto_lista">
      {lenguajeList.map((lenguaje) => {
        return (
          <li key={lenguaje.nombre}>
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

export default function Habilidades({ lenguajeList }) {
  return (
    <section className="contacto__contenedor">
      <h3 className="contacto__titulo">HABILIDADES</h3>
      <h4 className="contacto__subtitulo">Lenguajes de Programación</h4>
      <PilaCv lenguajeList={lenguajeList} />

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
  );
}
