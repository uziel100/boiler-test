import PropTypes from 'prop-types'
import { Drawer } from '@mui/material'
import ButtonCloseFixed from './ButtonCloseFixed'

const WIDTH_TYPE = {
  menu: { xs: '300px', sm: '340px', md: '350px' },
  shoppingCart: { xs: '310px', sm: '420px' }
}

const DrawerNav = ({ open, onClose, children, type = 'menu', anchor = 'left' }) => (
  <Drawer
    anchor={anchor}
    open={open}
    PaperProps={{
      sx: {
        width: WIDTH_TYPE[type],
        overflowY: 'scroll',
        overflowX: 'hidden'
      }
    }}
    sx={{ zIndex: 9999, transition: 'backdropFilter 300ms ease', backdropFilter: 'blur(4px)' }}
    onClose={onClose}
  >
    <ButtonCloseFixed direction={anchor} onClose={onClose} />
    {children}
  </Drawer>
)

DrawerNav.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default DrawerNav
