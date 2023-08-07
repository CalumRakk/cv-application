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
    const fondoURL = URL.createObjectURL(selectedFile);      
    setportadaURL(fondoURL);
  }
};
