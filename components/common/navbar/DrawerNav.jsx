import { Drawer } from '@mui/material'

const DrawerNav = ({ open, onClose, children }) => {
  return (
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
}
export default DrawerNav
