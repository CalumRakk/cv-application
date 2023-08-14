//

export default function Habilidades({ lenguajeList, programaList }) {
  return (
    <section className="contacto__contenedor">
      <h3 className="contacto__titulo">HABILIDADES</h3>
      <h4 className="contacto__subtitulo">Lenguajes de Programación</h4>
      <PilaCv lenguajeList={lenguajeList} />

      <h4 className="contacto__subtitulo">Otros programas</h4>
      <PilaCv lenguajeList={programaList} />
    </section>
  );
}
