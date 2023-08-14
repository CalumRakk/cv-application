//
export function Pila({ lenguajeList }) {
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
