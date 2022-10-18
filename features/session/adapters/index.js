import { SHA256 } from 'crypto-js'

export const mapperUserAdaper = data => ({
  id: data.user.id,
  token: data.authToken,
  // fullName: data.user.fullName,
  fullName: `${data.user.firstName} ${data.user.lastName}`,
  firstName: data.user.firstName,
  lastName: data.user.lastName,
  email: data.user.email
  // birthday: data.user?.birthday
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
