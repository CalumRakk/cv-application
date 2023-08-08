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
        <section class="form-encabezado__elementos">
          <label class="form-encabezado_label">Nombre y Apellido</label>
          <input
            type="text"
            onChange={handle_fullname_change}
            placeholder={fullnombre}
          />
        </section>

        <section class="form-encabezado__elementos">
          <label class="form-encabezado_label">Profesión</label>
          <input
            type="text"
            onChange={handle_profesion_change}
            placeholder={profesion}
          />
        </section>
        <section class="form-encabezado__elementos">
          <label class="form-encabezado_label">Imagen</label>
          <input type="file" onChange={handle_portadaURL_change} />
        </section>
      </form>

      <form className="form-encabezado">        
        <section class="form-encabezado__elementos">
          <label class="form-encabezado_label">Telefono</label>
          <input
            type="text"
            onChange={handle_telefono_change}
            placeholder={telefono}
          />
        </section>

        <section class="form-encabezado__elementos">
          <label class="form-encabezado_label">Email</label>
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
