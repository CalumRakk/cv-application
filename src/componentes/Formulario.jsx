//

// const updateFieldChanged = (index, lenguajeList, setLenguajeList) => (e) => {
//   const { name, value } = e.target;
//   let newArr = [...lenguajeList];
//   newArr[index].nombre = value;
//   setLenguajeList(newArr);

//   // console.log(newArr);
//   // console.log(newArr[index].nombre);
//   // console.log(e.target.value);
// };

function PilaForm({ lenguajeList, setLenguajeList }) {
  return lenguajeList.map((lenguaje, index) => {
    return (
      <li key={lenguaje.nombre}>
        <section className="pila__elemento">
          <div className="PilaForm__textoYboton">
            <input
              type="text"
              className="form-input"
              placeholder={lenguaje.nombre}
            />
            <button type="button" className="button">
              <img width="20px" height="20px" src="src\assets\close.svg" />
            </button>
          </div>
          <input type="range" />
        </section>
      </li>
    );
  });
}

export function Formulario({
  fullnombre,
  profesion,
  telefono,
  correo,
  lenguajeList,
  handle_fullname_change,
  handle_profesion_change,
  handle_portadaURL_change,
  handle_telefono_change,
  handle_correo_change,
  setLenguajeList,
}) {
  return (
    <>
      <form className="form-encabezado">
        <div className="form-encabezado__fullnombreYprofesion">
          <section className="form-encabezado__elementos">
            <label className="form-encabezado_label">Nombre y Apellido</label>
            <input
              type="text"
              onChange={handle_fullname_change}
              placeholder={fullnombre}
            />
          </section>

          <section className="form-encabezado__elementos">
            <label className="form-encabezado_label">Profesión</label>
            <input
              type="text"
              onChange={handle_profesion_change}
              placeholder={profesion}
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
              onChange={handle_telefono_change}
              placeholder={telefono}
            />
          </section>

          <section className="form-encabezado__elementos">
            <label className="form-encabezado_label">Email</label>
            <input
              type="text"
              onChange={handle_correo_change}
              placeholder={correo}
            />
          </section>
        </div>
      </form>

      <form className="form-encabezado eliminar-border">
        <section className="form-encabezado__elementos">
          <div className="custom-file-input">
            <input
              type="file"
              onChange={handle_portadaURL_change}
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
                    placeholder="Python"
                  />
                  <button type="button" className="button">
                    <img src="src\assets\plus.svg" />
                  </button>
                </div>
                <input type="range" />
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
