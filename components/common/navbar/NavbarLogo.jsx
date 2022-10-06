import { IconButton, Stack } from "@mui/material"
import Menu from '@mui/icons-material/Menu'
import Image from "next/image"

const NavbarLogo = ({ openDrawer, widthMenu = true }) => {
  return (
    <Stack direction="row" alignItems="center">
      {widthMenu && (
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={openDrawer}>
          <Menu />
        </IconButton>
      )}
      <Image src="/images/logo-uey.svg" alt="Logo de la empresa uey" width={49} height={29} />
    </Stack>
  )
}
export default NavbarLogo
