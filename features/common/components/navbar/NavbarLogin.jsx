import { Stack } from '@mui/material'
import { ContainerApp, NavbarApp } from 'components/common'

const NavbarLogin = () => (
  <NavbarApp>
    <ContainerApp>
      <Stack direction="row" gap={2} alignItems="center" justifyContent="flex-start">
        <NavbarApp.Logo widthMenu={false} />
      </Stack>
    </ContainerApp>
  </NavbarApp>
)
export default NavbarLogin
