import PropTypes from 'prop-types'
import Container from '@mui/material/Container'

const ContainerApp = ({ maxWidth = 'lg', children, component = 'div', disableGutters = false, sx={}, ...props }) => {
  return (
    <Container maxWidth={maxWidth} component={component} disableGutters={disableGutters} sx={sx} {...props}>
      {children}
    </Container>
  )
}

ContainerApp.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  component: PropTypes.elementType,
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
}

export default ContainerApp
