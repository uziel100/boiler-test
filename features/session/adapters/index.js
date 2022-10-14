import { SHA256 } from 'crypto-js'

export const mapperUserAdaper = data => ({
  id: data.id,
  token: data.token,
  fullName: data.user.fullName,
  firstName: data.user.firstName,
  email: data.user.email,
  birthday: data.user.birthday
})

export const loginNormalAdapter = data => ({
  input: {
    username: data.email,
    password: `${data.password}`
  }
})

export const mapperRecoveryCodeAdapter = data => ({
  code: data.code,
  redeemAt: data.redeemAt,
  email: data.user.email
})

export const changePasswordPayloadAdapter = data => ({
  input: {
    email: data.email,
    code: data.code,
    password: SHA256(`${data.password}`).toString()
  }
})

export const registerUserPayloadAdapter = data => ({
  input: {
    firstName: data.name,
    lastName: data.lastName,
    email: data.email,
    password: SHA256(`${data.password}`).toString(),
    birthday: data.birthday
  }
})
