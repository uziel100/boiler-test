import PropTypes from 'prop-types'
import { IconButton, Stack } from '@mui/material'
import Menu from '@mui/icons-material/Menu'
import { IconLogoUey } from 'components/icons'

const NavbarLogo = ({ openDrawer, widthMenu }) => (
  <Stack direction="row" alignItems="center">
    {widthMenu && (
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={openDrawer}>
        <Menu />
      </IconButton>
    )}
    {/* <Link href="/"> */}
    <IconLogoUey width={49} height={29} priority />
    {/* </Link> */}
  </Stack>
)

NavbarLogo.propTypes = {
  openDrawer: PropTypes.func,
  widthMenu: PropTypes.bool
}

NavbarLogo.defaultProps = {
  widthMenu: true,
  openDrawer: () => {}
}

export default NavbarLogo
