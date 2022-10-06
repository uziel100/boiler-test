const isANumberPhoneValid = phone => {
  const regex = /^[0-9]{10}$/
  return regex.test(phone)
}

export default isANumberPhoneValid
