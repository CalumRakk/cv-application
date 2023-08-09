//
export function Formulario({
  fullnombre,
  profesion,
  telefono,
  correo,
  handle_fullname_change,
  handle_profesion_change,
  handle_portadaURL_change,
  handle_telefono_change,
  handle_correo_change
}) {
  return (
    <>
      <form className="form-encabezado">        
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
        <section className="form-encabezado__elementos">
          {/* <label className="form-encabezado_label">Imagen</label>
          <input type="file" onChange={handle_portadaURL_change} /> */}
          <div className="custom-file-input">
            <input type="file" onChange={handle_portadaURL_change} id="fileInput" style={{display: "none"}}/>
            <label htmlFor="fileInput">Seleccionar archivo</label>
          </div>
        </section>
      </form>

      <form className="form-encabezado">        
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
      </form>
    
    </>
  );
}
