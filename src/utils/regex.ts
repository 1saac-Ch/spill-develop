export const regex = {
  noHp: /^(\+62|62|0)(\d{3,4}-?){2}\d{3,4}$/,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
  number: /^\d+$/,
  alphabet: /^[a-zA-Z]+$/,
  
};