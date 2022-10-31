import { Badge, Box, IconButton, Stack, Tooltip } from '@mui/material'
import { ContainerApp, NavbarApp, SkeletonUserNav } from 'components/common'
import { IconAccountUser, IconShoppingCart } from 'components/icons'
import { BpTypography } from 'components/shared'
import { MenuShoppingCart } from 'features/cart/components'
import { useShoppingCart } from 'features/cart/hooks'
import { SidebarAmazonProvider } from 'features/common/context'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeDrawer, openDrawer } from 'store/states/ui'
import { SidebarNav } from '../sidebar'

const NavbarMain = () => {
  const { openDrawer: openSidebar } = useSelector(store => store.ui)
  const dispatcher = useDispatch()
  const { totalProducts } = useShoppingCart()
  const session = useSession()

  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorCartShoppingEl, setAnchorCartShoppingEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const openMenuShoppingCart = event => setAnchorCartShoppingEl(event.currentTarget)

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
            </Stack>
            <Stack direction="row" alignItems="center" gap={1}>
              {/* <Stack
                  direction="row"
                  alignItems="center"
                  gap={1}
                  sx={{
                    display: {
                      xs: 'none',
                      sm: 'flex'
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: '1rem',
                      height: '1rem',
                      borderRadius: '2rem',
                      bgcolor: 'primary.main'
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
                </Stack> */}
              <NavbarApp.Search />
            </Stack>
            <Stack direction="row" gap={1}>
              {session.status === 'loading' ? (
                <SkeletonUserNav />
              ) : (
                <Tooltip title="Perfil">
                  <IconButton
                    onClick={handleClick}
                    sx={{
                      borderRadius: session?.data ? 2 : 'auto'
                    }}
                  >
                    <IconAccountUser />
                    {session?.data && (
                      <BpTypography sx={{ ml: 1 }} variant="body2">
                        {session.data.user.fullName}
                      </BpTypography>
                    )}
                  </IconButton>
                </Tooltip>
              )}
              <IconButton onClick={openMenuShoppingCart}>
                <Badge color="secondary" badgeContent={totalProducts} max={99}>
                  <IconShoppingCart />
                </Badge>
              </IconButton>
            </Stack>
          </Stack>
        </ContainerApp>
      </NavbarApp>
      <NavbarApp.MenuAccount anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
      <MenuShoppingCart anchorEl={anchorCartShoppingEl} setAnchorEl={setAnchorCartShoppingEl} />
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
