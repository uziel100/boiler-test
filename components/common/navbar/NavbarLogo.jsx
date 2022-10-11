import PropTypes from 'prop-types'
import { ButtonBase, IconButton, Stack } from '@mui/material'
import Menu from '@mui/icons-material/Menu'
import { IconLogoUey } from 'components/icons'
import { useRouter } from 'next/router'

const NavbarLogo = ({ openDrawer, widthMenu }) => {

  const router = useRouter();

  return (
    <Stack direction="row" alignItems="center">
      {widthMenu && (
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={openDrawer}>
          <Menu />
        </IconButton>
      )}
      {/* <Link href="/"> */}
      <ButtonBase onClick={() => router.push("/") }>
        <IconLogoUey width={49} height={29} priority />
      </ButtonBase>
      {/* </Link> */}
    </Stack>
  )
}

NavbarLogo.propTypes = {
  openDrawer: PropTypes.func,
  widthMenu: PropTypes.bool
}

NavbarLogo.defaultProps = {
  widthMenu: true,
  openDrawer: () => {}
}

export default NavbarLogo
