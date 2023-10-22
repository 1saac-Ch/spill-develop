export const regex = {
  noHp: /^(\+62|62|0)(\d{3,4}-?){2}\d{3,4}$/,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  password: /^(?=.*[a-zA-Z])(?=.*\d).{8,16}$/,
  number: /^\d+$/,
  alphabet: /^[a-zA-Z]+$/,
  fullname: /^.{6,}$/,
  username: /^[a-zA-Z0-9\s]+$/,
}
