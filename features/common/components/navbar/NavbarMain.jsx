import { Badge, Box, IconButton, Stack, Tooltip, useMediaQuery, useTheme } from '@mui/material'
import { ContainerApp, NavbarApp, SkeletonUserNav } from 'components/common'
import { IconAccountUser, IconShoppingCart } from 'components/icons'
import { BpTypography } from 'components/shared'
import { MenuShoppingCart } from 'features/cart/components'
import { useShoppingCart } from 'features/cart/hooks'
import { SidebarAmazonProvider } from 'features/common/context'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeDrawer, closeDrawerShoppingCart, openDrawer, openDrawerShoppingCart } from 'store/states/ui'
import { SidebarNav } from '../sidebar'
import SidebarShoppingCart from '../sidebarShoppingCart/SidebarShoppingCart'

const NavbarMain = () => {
  const { openDrawer: openSidebar, openMenuShoppingCart: openSidebarCart } = useSelector(store => store.ui)
  const dispatcher = useDispatch()
  const { totalProducts } = useShoppingCart()
  const session = useSession()

  const theme = useTheme()
  const isDeviceSm = useMediaQuery(theme.breakpoints.down('md'))
  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorCartShoppingEl, setAnchorCartShoppingEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const onOpenDrawer = () => {
    dispatcher(openDrawer())
  }
  const onCloseDrawer = () => {
    dispatcher(closeDrawer())
  }

  const onOpenDrawerShoppingCart = () => {
    dispatcher(openDrawerShoppingCart())
  }
  const onCloseDrawerShoppingCart = () => {
    dispatcher(closeDrawerShoppingCart())
  }

  const openMenuShoppingCart = event => {
    if (!isDeviceSm) setAnchorCartShoppingEl(event.currentTarget)
    else onOpenDrawerShoppingCart()
  }

  return (
    <>
      <NavbarApp>
        <ContainerApp sx={{ px: 0 }}>
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
      {!isDeviceSm && <MenuShoppingCart anchorEl={anchorCartShoppingEl} setAnchorEl={setAnchorCartShoppingEl} />}
      {openSidebarCart && isDeviceSm && (
        <NavbarApp.Drawer type="shoppingCart" anchor="right" open={openSidebarCart} onClose={onCloseDrawerShoppingCart}>
          <SidebarShoppingCart />
        </NavbarApp.Drawer>
      )}
      {openSidebar && (
        <NavbarApp.Drawer open={openSidebar} onClose={onCloseDrawer}>
          <SidebarAmazonProvider>
            <Box component="nav" position="relative" padding="1rem 0 1rem 0">
              <SidebarNav />
            </Box>
          </SidebarAmazonProvider>
        </NavbarApp.Drawer>
      )}
    </>
  )
}
export default NavbarMain
