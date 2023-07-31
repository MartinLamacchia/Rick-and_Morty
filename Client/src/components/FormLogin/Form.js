const validarLogin = (form) => {
  const errors = {}

  let largoEmail
  if (form.email) largoEmail = form.email.split('')
  
  let largoPass
  if (form.contraseña) largoPass = form.contraseña.split('')

  if (form.email === "") errors.email = "El mail esta vacio"
  else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email)) errors.email = "El mail es invalido"
  else if(largoEmail.length >= 35) errors.email = "El mail es demacido largo"
  
  else if (form.contraseña === "") errors.contraseña = "La contraseña esta vacia"
  else if (!/\d/.test(form.contraseña)) errors.contraseña = "La contraseña debe tener al menos un numero"
  else if (largoPass.length < 6 || largoPass.length > 10) errors.contraseña = "La contraseña debe tener entre 6 y 10 caracteres"

  return errors
}

export const validadDB = (email, pass) => {
  
  const USUARIOS = {
    email: 'martinjiro22@gmail.com',
    contraseña: 'Pass123'
  }

  if (USUARIOS.email === email && USUARIOS.contraseña === pass) {
    return 1
  }else{
    return 0
  }

  
}

export default validarLogin