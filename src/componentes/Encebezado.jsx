//
export function Encebezado({
  profesion = "Programador",
  fullnombre,
  portadaURL,
}) {
  return (
    <div className="cv__encabezado">
      <div className="encabezado_contenedor">
        {/* <div className="encabezado__portada" style={cvStyle}></div> */}
        <img className="encabezado__portada" src={portadaURL} alt="Vite logo" />
        <div className="encabezado_nombresYprofesion">
          <h1 className="encabezado__nombre" id="fname">
            {fullnombre}
          </h1>
          <span className="encabezado__profesion">{profesion}</span>
        </div>
      </div>
    </div>
  );
}
