//
import { useState } from "react";
import { handle_change, agrega_elemento_a_LenguajeList } from "../utils";
import { PilaForm } from "./PilaForm.jsx";

export function Formulario({
  datosPersonales,
  lenguajeList,
  setLenguajeList,
  programaList,
  setProgramaList,
}) {
  const { nombre, rango } = { ...lenguajeList[0] };

  const [nombre_de_lenguaje, setNombre_de_lenguaje] = useState(nombre);
  const [rango_de_lenguaje, setRango_de_lenguaje] = useState(rango);

  const [nombre_de_programa, setNombre_de_programa] = useState("Excel");
  const [rango_de_programa, setRango_de_programa] = useState(30);

  const isDisabled = () => lenguajeList.length >= 5;
  const [notificacion, setNotificacion] = useState(false);

  return (
    <>
      <div className="form-encabezado">
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
      </div>

      <div className="form-encabezado eliminar-border">
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
      </div>

      <div className="form-encabezado eliminar-border">
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
      </div>

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
                  name="nombre"
                  className="form-input"
                  placeholder={nombre_de_lenguaje}
                  onChange={handle_change(setNombre_de_lenguaje)}
                />
                <button
                  type="button"
                  className={`button_verde ${
                    isDisabled() ? "button_disabled" : ""
                  } ${notificacion ? "button_disabled" : ""} `}
                  onClick={agrega_elemento_a_LenguajeList(
                    lenguajeList,
                    setLenguajeList,
                    nombre_de_lenguaje,
                    rango_de_lenguaje,
                    setNotificacion
                  )}
                  disabled={isDisabled()}
                >
                  <img width="15px" height="15px" src="src\assets\add.svg" />
                </button>
              </div>
              <input
                type="range"
                name="rango"
                value={rango_de_lenguaje}
                onChange={handle_change(setRango_de_lenguaje)}
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
                  name="nombre"
                  className="form-input"
                  placeholder={nombre_de_programa}
                  onChange={handle_change(setNombre_de_programa)}
                />
                <button
                  type="button"
                  className={`button_verde ${
                    isDisabled() ? "button_disabled" : ""
                  } ${notificacion ? "button_disabled" : ""} `}
                  onClick={agrega_elemento_a_LenguajeList(
                    programaList,
                    setProgramaList,
                    nombre_de_programa,
                    rango_de_programa,
                    setNotificacion
                  )}
                  disabled={isDisabled()}
                >
                  <img width="15px" height="15px" src="src\assets\add.svg" />
                </button>
              </div>
              <input
                type="range"
                name="rango"
                value={rango_de_programa}
                onChange={handle_change(setRango_de_programa)}
              />
            </section>
            <ul>
              <PilaForm
                lenguajeList={programaList}
                setLenguajeList={setProgramaList}
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
