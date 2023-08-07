//
export function Formulario({
  fullnombre,
  profesion,
  handle_fullname_change,
  handle_profesion_change,
  handle_portadaURL_change,
}) {
  return (
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
  );
}
