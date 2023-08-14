//
export function Contacto({ telefono, correo }) {
  return (
    <section className="contacto__contenedor">
      <h3 className="contacto__titulo">CONTACTO</h3>
      <ul className="contacto_lista">
        <li className="contacto__icon">
          {" "}
          <img src="src/assets/mail.svg" width="16px" /> {telefono}
        </li>
        <li className="contacto__icon">
          {" "}
          <img src="src/assets/telefono.svg" width="16px" /> {correo}
        </li>
      </ul>
    </section>
  );
}
