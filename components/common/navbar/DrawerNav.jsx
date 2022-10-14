import PropTypes from 'prop-types'
import { Drawer } from '@mui/material'
import ButtonCloseFixed from './ButtonCloseFixed'

const DrawerNav = ({ open, onClose, children }) => (
  <Drawer
    anchor="left"
    open={open}
    PaperProps={{
      sx: {
        width: { xs: '300px', sm: '340px', md: '350px' },
        overflowY: 'scroll',
        overflowX: 'hidden'
      }
    }}
    sx={{ zIndex: 9999 }}
    onClose={onClose}
  >
    <ButtonCloseFixed onClose={onClose} />
    {children}
  </Drawer>
)

DrawerNav.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default DrawerNav
