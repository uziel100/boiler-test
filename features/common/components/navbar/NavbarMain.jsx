import { Box, IconButton, InputBase, Stack } from '@mui/material'
import { ContainerApp, NavbarApp } from 'components/common'
import { IconAccountUser, IconShoppingCart } from 'components/icons'
import { SidebarAmazonProvider } from 'features/common/context'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { closeDrawer, openDrawer } from 'store/states/ui'
import { SidebarNav } from '../sidebar'

const NavbarMain = () => {
  const { openDrawer: openSidebar } = useSelector(store => store.ui)
  const dispatcher = useDispatch()
  const router = useRouter()

  const onOpenDrawer = () => {
    dispatcher(openDrawer())
  }
  const onCloseDrawer = () => {
    dispatcher(closeDrawer())
  }

  return (
    <>
      <NavbarApp>
        <ContainerApp>
          <Stack direction="row" gap={2} alignItems="center" justifyContent="space-between">
            <Stack direction="row" gap={4}>
              <NavbarApp.Logo openDrawer={onOpenDrawer} />
              <Stack direction="row" alignItems="center" gap={1}>
                <Stack direction="row" alignItems="center" gap={1}>
                  <Box
                    sx={{
                      width: '1rem',
                      height: '1rem',
                      borderRadius: '2rem',
                      bgcolor: 'secondary.main'
                    }}
                  />
                  <InputBase
                    placeholder="Crea tu primera lista"
                    inputProps={{ 'aria-label': 'Crea tu primera lista' }}
                    sx={{
                      fontFamily: 'Poppins',
                      fontWeight: 500,
                      fontSize: '0.875rem',
                      maxWidth: '160px'
                    }}
                  />
                </Stack>
                <NavbarApp.Search />
              </Stack>
            </Stack>
            <Stack direction="row" gap={1}>
              <IconButton onClick={() => router.push('/login')}>
                <IconAccountUser />
              </IconButton>
              <IconButton>
                <IconShoppingCart />
              </IconButton>
            </Stack>
          </Stack>
        </ContainerApp>
      </NavbarApp>
      <NavbarApp.Drawer open={openSidebar} onClose={onCloseDrawer}>
        <SidebarAmazonProvider>
          <Box component="nav" position="relative" padding="1rem 0 1rem 0">
            <SidebarNav />
          </Box>
        </SidebarAmazonProvider>
      </NavbarApp.Drawer>
    </>
  )
}
export default NavbarMain
