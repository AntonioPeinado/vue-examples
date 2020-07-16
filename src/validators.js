export const isEmail = (msg = 'Formato de email incorrecto') => (value) => {
    const isValidEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
    return isValidEmail ? '' : msg;
}

export const required = (msg = 'El campo es requerido') =>  (value) => {
    return value && value.length ? '' : msg;
}

export const minLength = (min, msg = `El campo debe contener al menos ${min} caracteres`) => (value) => {
    return value &&  value.length >= min ? '' : msg;
}

export const validate = (value, ...validators) => {
    for (let validator of validators) {
        const result = validator(value);
        if (result) {
            return result;
        }
    }
    return '';
}