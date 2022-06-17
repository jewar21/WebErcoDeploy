// Responsive Variants

export const DeviceSize = {
  mobile: 768,
  tablet: 992,
  laptop: 1324,
  desktop: 2024
};

const regexNumeros = /[^0-9]+/g;
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-_ñÑáéíóúÁÉÍÓÚÜa-z]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const regexText = /[^A-Z a-zñÑáéíóúÁÉÍÓÚÜ]+/g;

export const remplaceInfo = (data, type) => {
  switch (type) {
    case 'text':
      return data.replace(regexText, '');
      
    case 'number':
      return data.replace(regexNumeros, '');
  
    default:
      return data;
  }
}

export const ValidateDataRequired = (data, type) => {
  let error = null
  let status = true

  switch (type) {
    case 'text':
      if(!data || data.length === 0) {
        status = false;
        error = 'Este campo es requerido.'
      }
      break;

    case 'email':
      if(!data || data.length === 0) {
        status = false;
        error = 'Este campo es requerido.'
      } else {
        const res = emailRegex.test(data)
        status = res;
        if(!res) {
          error = 'Formato invalido.'
        }
      }
      break;

    case 'number':
      if(!data || data.length === 0) {
        status = false;
        error = 'Este campo es requerido.'
      }
      break;

    case 'select':
      if(!data || data.length === 0) {
        status = false;
        error = 'Este campo es requerido.'
      }
      break;
  
    default:
      status = false;
      break
  }

  return { status, error };
}
