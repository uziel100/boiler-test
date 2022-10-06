import cookie from 'cookie'

const getCookiesParsed = req => cookie.parse(req ? req.headers.cookie || '' : document.cookie)

export default getCookiesParsed
