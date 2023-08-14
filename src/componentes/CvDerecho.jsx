//
//
export function CvDerecho({ datosPersonales }) {
  return (
    <>
      <div className="cv__derecho">
        {datosPersonales.descripcion}
        <div className="experienciaLaboral">
          <section className="experienciaLaboral__elementos">
            <h3 className="experienciaLaboral__titulo">Experiencia Laboral</h3>
            <section>
              <h4 className="experienciaLaboral__subtitulo">
                Nombre de la empresa, Lugar
              </h4>
              <ul>
                <li>Puesto desempeñado, fecha de inicio - fecha de salida</li>
              </ul>
            </section>
            <section>
              <h4 className="experienciaLaboral__subtitulo">
                Caotic Web, Inglaterra
              </h4>
              <ul>
                <li>Programador Full Stack, 2018/2019</li>
              </ul>
            </section>
          </section>

          <section className="experienciaLaboral__elementos">
            <h3 className="experienciaLaboral__titulo">Educación</h3>
            <section>
              <h4 className="experienciaLaboral__subtitulo">
                Nombre del cv de estudios, Lugar
              </h4>
              <p>Nombre de la carrera , año de inicio</p>
            </section>
            <section>
              <h4 className="experienciaLaboral__subtitulo">
                Universidad de Buenos Aires, Argentina.
              </h4>
              <p>Diseño de software , 2017</p>
            </section>
          </section>

          <section className="experienciaLaboral__elementos">
            <h3 className="experienciaLaboral__titulo">
              Cursos y Capacitaciones
            </h3>
            <ul>
              <li>Cursos tomados y certificados</li>
              <li>Adobe para diseñadores gráficos, Adobe online</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
