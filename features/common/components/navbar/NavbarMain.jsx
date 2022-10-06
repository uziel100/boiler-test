import { Box, IconButton, InputBase, Stack, TextField } from '@mui/material'
import { ContainerApp, NavbarApp } from 'components/common'
import { IconAccountUser, IconShoppingCart } from 'components/icons'
import { useState } from 'react'

const NavbarMain = () => {
  const [open, setOpen] = useState(false)

  const onOpenDrawer = () => setOpen(true)
  const onCloseDrawer = () => setOpen(false)

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
                      maxWidth: "160px"
                    }}
                  />
                </Stack>
                <NavbarApp.Search />
              </Stack>
            </Stack>
            <Stack direction="row" gap={1}>
              <IconButton>
                <IconAccountUser />
              </IconButton>
              <IconButton>
                <IconShoppingCart />
              </IconButton>
            </Stack>
          </Stack>
        </ContainerApp>
      </NavbarApp>
      <NavbarApp.Drawer open={open} onClose={onCloseDrawer} />
    </>
  )
}
export default NavbarMain
