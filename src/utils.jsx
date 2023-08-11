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
