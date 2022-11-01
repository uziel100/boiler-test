import { useSidebarAmazonContextProvider } from 'features/common/context'
import { Box, List, ListItem, ListItemButton, ListItemText, MenuList, Stack } from '@mui/material'
import { IconLogoUey } from 'components/icons'
import { BpButton, BpTypography } from 'components/shared'
import { ButtonLogout } from 'components/common'
import SkeletonDrawer from 'components/common/feedback/SkeletonDrawer'
import useSessionApp from 'hooks/useSessionApp'
import SidebarTitle from './SidebarTitle'
import SidebarRow from './SidebarRow'
import SidebarTitleButton from './SidebarTitleButton'

const SidebarContent = () => {
  const { entryStore, loading } = useSidebarAmazonContextProvider()
  const { session } = useSessionApp()

  return (
    <Box pb={4}>
      <Stack pl={2} direction="row" mt={2} gap={1} mb={2}>
        <IconLogoUey width={50} height={30} />
        <BpTypography fontWeight={600} color="grey.800" variant="h6">
          ¡Bienvenido!
        </BpTypography>
      </Stack>
      {loading && <SkeletonDrawer />}
      {!loading && (
        <>
          <MenuList>
            {entryStore?.map(category => (
              <div key={category.id}>
                <SidebarTitle name={category.name} />
                {category?.children?.nodes?.map(entry => (
                  <SidebarRow
                    rootSlug={category.slug}
                    key={entry.id}
                    root={category.id}
                    name={entry.name}
                    entry={entry}
                  />
                ))}
              </div>
            ))}
            <br />
            <SidebarTitleButton name="Espacios" isUpperCase={false} />
            <SidebarTitleButton name="Experiencias" isUpperCase={false} />
            <SidebarTitleButton name="Proveedores" isUpperCase={false} />
          </MenuList>

          <Stack pl={2} mt={2} direction="column" alignItems="flex-start">
            <Box mb={2}>
              <BpTypography
                fontWeight={600}
                color="grey.700"
                variant="subtitle1"
                isUpperCase
                label="¡ASOCIATE CON UEY!"
              />
              <BpTypography sx={{ maxWidth: '300px', mt: 1 }} fontWeight={400} color="grey.600" variant="body2">
                Lorem ipsum dolor sit amet, conse adipiscing elit ut aliquam, purus sit amet luctus venenatis
              </BpTypography>
            </Box>
            <BpButton sx={{ height: '36px', ml: '12%' }} color="primary" fullWidth={false}>
              Convertirse en proveedor
            </BpButton>
          </Stack>
          <List sx={{ mt: 2 }}>
            <ListItem>
              <ListItemText sx={{ pl: 1 }}>
                <BpTypography
                  fontWeight={600}
                  color="grey.700"
                  variant="subtitle1"
                  isUpperCase
                  label="AYUDA Y CONFIGURACIÓN"
                />
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ pl: 3 }}>
                <BpTypography fontWeight={400} color="grey.700" variant="body1" label="Mi cuenta" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ pl: 3 }}>
                <BpTypography fontWeight={400} color="grey.700" variant="body1" label="Ayuda" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ pl: 3 }}>
                <BpTypography fontWeight={500} color="grey.700" variant="body1" label="Cotización personalizada" />
              </ListItemButton>
            </ListItem>
          </List>
          {session.data && (
            <Box
              sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                background: '#fff',
                width: { xs: '300px', sm: '340px', md: '350px' },
                padding: '0.5rem 1rem'
              }}
            >
              <ButtonLogout />
            </Box>
          )}
        </>
      )}
    </Box>
  )
}
export default SidebarContent
