import PropTypes from 'prop-types'
import { ButtonBase, IconButton, Stack } from '@mui/material'
import Menu from '@mui/icons-material/Menu'
import { IconLogoUey } from 'components/icons'
import Link from 'next/link'

const NavbarLogo = ({ openDrawer, widthMenu }) => (
  <Stack direction="row" alignItems="center">
    {widthMenu && (
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={openDrawer}>
        <Menu />
      </IconButton>
    )}
    <Link href="/" to="/">
      <a>
        <ButtonBase disableTouchRipple>
          <IconLogoUey width={50} height={27} />
        </ButtonBase>
      </a>
    </Link>
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
