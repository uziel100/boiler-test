import PropTypes from 'prop-types'
import Image from 'next/image'

const IconLogoUey = ({ width, height, priority = true }) => (
  <Image
    fixed="1x"
    src="/images/logo-uey.svg"
    alt="Logo de la empresa UEY"
    width={width}
    height={height}
    priority={priority}
  />
)

IconLogoUey.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

export default IconLogoUey
