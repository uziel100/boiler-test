import PropTypes from 'prop-types'
import { Drawer } from '@mui/material'

const DrawerNav = ({ open, onClose, children }) => (
  <Drawer
    anchor="left"
    open={open}
    PaperProps={{
      sx: {
        width: { xs: '300px', sm: '340px', md: '365px' },
        overflow: 'inherit'
      }
    }}
    sx={{ zIndex: 9999 }}
    onClose={onClose}
  >
    {children}
  </Drawer>
)

DrawerNav.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default DrawerNav
