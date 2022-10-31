const formatMoney = (value, currency = 'MXN', maxDigits = undefined) =>
  value
    .toLocaleString('en', {
      style: 'currency',
      currency,
      maximumSignificantDigits: maxDigits
    })
    .replace('MX', '')

export default formatMoney
