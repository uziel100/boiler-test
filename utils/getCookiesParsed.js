import cookie from 'cookie'

const getCookiesParsed = req =>
  // eslint-disable-next-line no-nested-ternary
  cookie.parse(req ? req.headers.cookie || '' : typeof window === 'undefined' ? '' : document.cookie)

export default getCookiesParsed
