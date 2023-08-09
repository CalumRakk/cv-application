//

export const handle_fullname_change = (e, setFullnombre) => {
  setFullnombre(e.target.value);
};


export const handle_profesion_change = (e, setprofesion) => {
  setprofesion(e.target.value);
};

export const handle_portadaURL_change = (e, setportadaURL) => {
  const selectedFile = e.target.files[0];
  if (selectedFile) {   
    const mime = selectedFile.type.split('/')[0]  
    if (mime !== 'image') {
      alert('Solo se permiten imagenes');
      return;
    }
    const fondoURL = URL.createObjectURL(selectedFile);      
    setportadaURL(fondoURL);
  }
};

export const handle_telefono_change = (e, setTelefono) => {
  setTelefono(e.target.value);
};

export const handle_correo_change = (e, setCorreo) => {
  setCorreo(e.target.value);
};
