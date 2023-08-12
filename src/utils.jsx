//

export const handle_change = (funcionModificadora) => (e) => {
  funcionModificadora(e.target.value);
};
export const handle_portadaURL_change = (funcionModificadora) => (e) => {
  const selectedFile = e.target.files[0];
  if (selectedFile) {
    const mime = selectedFile.type.split("/")[0];
    if (mime !== "image") {
      alert("Solo se permiten imagenes");
      return;
    }
    const fondoURL = URL.createObjectURL(selectedFile);
    funcionModificadora(fondoURL);
  }
};

export const agrega_elemento_a_LenguajeList =
  (lenguajeList, SetLenguajeList, nombre_input, rango_input, setNotificacion) =>
  () => {
    const comprueba_si_nombre_input_esta_en_LenguajeList = (element) =>
      element.nombre.toLowerCase() === nombre_input.toLowerCase();
    const isTrue = lenguajeList.some(
      comprueba_si_nombre_input_esta_en_LenguajeList
    );

    if (isTrue === false) {
      SetLenguajeList([
        ...lenguajeList,
        {
          nombre: nombre_input,
          rango: rango_input,
          id: window.crypto.randomUUID(),
        },
      ]);
    } else {
      setNotificacion(true);
      setTimeout(() => {
        setNotificacion(false);
      }, 1000);
    }
  };
