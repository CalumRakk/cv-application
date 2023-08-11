//
import { useState } from "react";

function PilaForm({ lenguajeList, setLenguajeList }) {
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

export function Formulario({ datosPersonales, lenguajeList, setLenguajeList }) {
  const [addLenguaje, setAddLenguaje] = useState({
    nombre: "Python",
    rango: 36,
  });

  const handle_rango_change = (e) => {
    setAddLenguaje({ ...addLenguaje, rango: e.target.value });
  };
  const handle_input_change = (e) => {
    setAddLenguaje({
      ...addLenguaje,
      nombre: e.target.value,
      id: window.crypto.randomUUID(),
    });
  };
  const handle_addLenguaje = (e) => {
    const test = (element) => element.nombre === addLenguaje.nombre;
    const variable = lenguajeList.some(test);
    if (variable) {
      setNotificacion(true);
      setTimeout(() => {
        setNotificacion(false);
      }, 1000);
    } else {
      setLenguajeList([...lenguajeList, addLenguaje]);
    }
  };
  const isDisabled = () => lenguajeList.length >= 5;
  const [notificacion, setNotificacion] = useState(false);

  return (
    <>
      <form className="form-encabezado">
        <div className="form-encabezado__fullnombreYprofesion">
          <section className="form-encabezado__elementos">
            <label className="form-encabezado_label">Nombre y Apellido</label>
            <input
              type="text"
              onChange={datosPersonales.set_fullnombre}
              placeholder={datosPersonales.fullnombre}
            />
          </section>

          <section className="form-encabezado__elementos">
            <label className="form-encabezado_label">Profesión</label>
            <input
              type="text"
              onChange={datosPersonales.set_profesion}
              placeholder={datosPersonales.profesion}
            />
          </section>
        </div>
      </form>

      <form className="form-encabezado eliminar-border">
        <div className="form-encabezado__fullnombreYprofesion">
          <section className="form-encabezado__elementos">
            <label className="form-encabezado_label">Telefono</label>
            <input
              type="text"
              onChange={datosPersonales.set_telefono}
              placeholder={datosPersonales.telefono}
            />
          </section>

          <section className="form-encabezado__elementos">
            <label className="form-encabezado_label">Email</label>
            <input
              type="text"
              onChange={datosPersonales.set_correo}
              placeholder={datosPersonales.correo}
            />
          </section>
        </div>
      </form>

      <form className="form-encabezado eliminar-border">
        <section className="form-encabezado__elementos">
          <div className="custom-file-input">
            <input
              type="file"
              onChange={datosPersonales.set_portadaURL}
              id="fileInput"
              style={{ display: "none" }}
            />
            <label htmlFor="fileInput">Seleccionar archivo</label>
          </div>
        </section>
      </form>

      <form>
        <div className="form-encabezado">
          <div className="form-encabezado__fullnombreYprofesion">
            <div className="pila">
              <section className="pila__input">
                <label className="form-encabezado_label">
                  Lenguajes de Programación
                </label>
                <div>
                  <input
                    type="text"
                    name="lenguaje"
                    className="form-input"
                    placeholder={addLenguaje.nombre}
                    onChange={handle_input_change}
                    value={addLenguaje.nombre}
                  />
                  <button
                    type="button"
                    className={`button_verde ${
                      isDisabled() ? "button_disabled" : ""
                    } ${notificacion ? "button_disabled" : ""} `}
                    onClick={handle_addLenguaje}
                    disabled={isDisabled()}
                  >
                    <img width="15px" height="15px" src="src\assets\add.svg" />
                  </button>
                </div>
                <input
                  type="range"
                  value={addLenguaje.rango}
                  onChange={handle_rango_change}
                />
              </section>

              <ul>
                <PilaForm
                  lenguajeList={lenguajeList}
                  setLenguajeList={setLenguajeList}
                />
              </ul>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
