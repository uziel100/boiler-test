import PropTypes from 'prop-types'
import { AppBar, Toolbar } from '@mui/material'
import HideOnScroll from './HideOnScroll'

const Navbar = ({ children }) => (
  <HideOnScroll>
    <AppBar
      sx={{ zIndex: 999, boxShadow: '0px 1px 0px rgba(155, 173, 211, 0.2)' }}
      position="sticky"
      color="default"
      elevation={0}
    >
      <Toolbar>{children}</Toolbar>
    </AppBar>
  </HideOnScroll>
)

Navbar.propTypes = {
  children: PropTypes.node
}

Navbar.defaultProps = {
  children: null
}

export default Navbar
