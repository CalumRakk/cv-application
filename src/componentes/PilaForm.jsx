//
export function PilaForm({ lenguajeList, setLenguajeList }) {
  const hardle_Change = (index) => (e) => {
    const { name, value } = e.target;

    const updateLenguaje = lenguajeList.map((lenguaje) =>
      index === lenguaje.id ? { ...lenguaje, [name]: value } : lenguaje
    );
    setLenguajeList(updateLenguaje);
  };

  const removeLenguajeList = (index) => (e) => {
    setLenguajeList(
      lenguajeList.filter((lenguaje) => {
        return index !== lenguaje.id;
      })
    );
  };

  return lenguajeList.map((lenguaje) => {
    return (
      <li key={lenguaje.id}>
        <section className="pila__elemento">
          <div className="PilaForm__textoYboton">
            <input
              type="text"
              className="form-input"
              placeholder={lenguaje.nombre}
              name="nombre"
              value={lenguaje.nombre}
              onChange={hardle_Change(lenguaje.id)}
            />
            <button
              type="button"
              className="button_rojo"
              onClick={removeLenguajeList(lenguaje.id)}
            >
              <img width="20px" height="20px" src="src\assets\close.svg" />
            </button>
          </div>
          <input
            type="range"
            name="rango"
            onChange={hardle_Change(lenguaje.id)}
          />
        </section>
      </li>
    );
  });
}
