import { useState } from 'react'
import {
  Box,
  CardContent,
  Collapse,
  Dialog,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Tab,
  Tabs
} from '@mui/material'
import { InputDatePickerDesktop } from 'components/common'
import { IconHome, IconPlaceLocation, IconSearch } from 'components/icons'
import { BpTextField, BpTransitionSlideDown, BpTypography } from 'components/shared'
import { useRouter } from 'next/router'
import { parseFiltersUrlProducts } from 'features/products/utils'
import { useBreakpoint } from 'hooks'
import DialogHaveAPlace from './DialogHaveAPlace'
import DialogPlaceInUEY from './DialogPlaceInUEY'
import DialogContainerLocation from './DialogContainerLocation'
import FormHaveAPlace from './FormHaveAPlace'
import FormPlaceInUEY from './FormPlaceInUEY'

const TABS = [
  {
    id: 1,
    text: 'Productos'
  },
  {
    id: 2,
    text: 'Servicios'
  },
  {
    id: 3,
    text: 'Espacios'
  }
]

function ColorTabs() {
  const [value, setValue] = useState('Productos')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="secciones para buscar productos"
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
        sx={{
          '& .MuiTabs-indicator': {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent'
            // width: '20px !important',
            // height: '2px'
          },
          '& .MuiTabs-indicatorSpan': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: theme => theme.palette.primary.main
          }
        }}
      >
        {TABS.map(tab => (
          <Tab key={tab.id} value={tab.text} label={tab.text} />
        ))}
      </Tabs>
    </Box>
  )
}

const MenuOptionsSearch = ({ anchorEl, setAnchorEl, onClose }) => {
  const open = Boolean(anchorEl)
  const router = useRouter()
  const { isDeviceXs } = useBreakpoint()
  const [anchorMenu, setAnchorMenu] = useState(null)
  const openMenu = Boolean(anchorMenu)
  const [openDialogHaveAplace, setOpenDialogHaveAplace] = useState(false)
  const [openDialogPlaceInUey, setOpenDialogPlaceInUey] = useState(false)
  const [currentLocationSection, setCurrentLocationSection] = useState('')

  const handleOpenModalMobilContainer = () => {
    setAnchorMenu(false)
    const customFilters = parseFiltersUrlProducts(router.query, { modal: 'CONTAINER-ROOT' }, false)
    router.push(
      {
        pathname: router.asPath.split('?').length > 0 ? router.asPath.split('?')[0] : router.pathname,
        query: customFilters
      },
      undefined,
      {
        shallow: true
      }
    )
  }

  // const handleOpenModalHaveAplace = () => {
  //   setAnchorMenu(false)
  //   setOpenDialogHaveAplace(true)
  // }

  // const handleOpenModalPlaceInUey = () => {
  //   setAnchorMenu(false)
  //   setOpenDialogPlaceInUey(true)
  // }

  const handleOpenModalHaveAplace = () => {
    setAnchorMenu(false)
    setCurrentLocationSection('sec2')
  }

  const handleOpenModalPlaceInUey = () => {
    setAnchorMenu(false)
    setCurrentLocationSection('sec1')
  }

  const clickToOpenMenu = event => {
    setAnchorMenu(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
    onClose()
  }

  const handleCloseMenu = () => {
    setAnchorMenu(null)
  }

  const [value, setValue] = useState(null)

  // todo: before
  // const LOCATION_OPTIONS = [
  //   {
  //     id: 1,
  //     icon: <IconHome color="primary" variant="main" />,
  //     text: 'Buscar un lugar en UEY',
  //     divider: true,
  //     click: !isDeviceXs ? handleOpenModalPlaceInUey : handleOpenModalMobilContainer
  //   },
  //   {
  //     id: 2,
  //     icon: <IconPlaceLocation color="primary" variant="main" />,
  //     text: 'Ya tengo un lugar',
  //     divider: false,
  //     click: !isDeviceXs ? handleOpenModalHaveAplace : handleOpenModalMobilContainer
  //   }
  // ]
  const LOCATION_OPTIONS = [
    {
      id: 1,
      icon: <IconHome color="primary" variant="main" />,
      text: 'Buscar un lugar en UEY',
      divider: true,
      click: !isDeviceXs ? handleOpenModalPlaceInUey : handleOpenModalMobilContainer
    },
    {
      id: 2,
      icon: <IconPlaceLocation color="primary" variant="main" />,
      text: 'Ya tengo un lugar',
      divider: false,
      click: !isDeviceXs ? handleOpenModalHaveAplace : handleOpenModalMobilContainer
    }
  ]

  return (
    <>
      <Dialog
        PaperProps={{
          sx: {
            position: 'fixed',
            top: { xs: '14%', sm: '12%', md: '4.5%' },
            maxWidth: '860px',
            boxShadow: '0px 1px 20px rgba(0, 0, 0, 0.07)'
            // border: '1px solid #ccc'
          },
          elevation: 0
        }}
        open={open}
        hideBackdrop
        onClose={handleClose}
        transitionDuration={300}
        TransitionComponent={BpTransitionSlideDown}
      >
        <CardContent sx={{ pt: 0 }}>
          <ColorTabs />
          <Grid mt={1} container spacing={2}>
            <Grid item xs={12} sm={3} md={3}>
              <InputDatePickerDesktop
                value={value}
                onChange={newValue => {
                  setValue(newValue)
                }}
                id="birthday"
                name="birthday"
                placeholder="Fecha"
                color="primary"
                views={['month', 'day']}
                onFocus={() => setCurrentLocationSection('')}
                minDate={new Date()}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <BpTextField
                placeholder="Ubicación"
                type="text"
                color="primary"
                readOnly
                onClick={clickToOpenMenu}
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconPlaceLocation color="grey" variant="600" />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Stack direction="row" alignItems="center" gap={2}>
                <BpTextField onFocus={() => setCurrentLocationSection('')} placeholder="Buscar aqui..." />
                <IconButton
                  sx={{
                    bgcolor: 'grey.200',
                    width: 48,
                    height: 48
                  }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <IconSearch color="primary" variant="main" height={26} width={27} />
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
          <br />
          {!isDeviceXs && (
            <Collapse exit unmountOnExit in={currentLocationSection !== ''}>
              <Divider />
              <Collapse sx={{ mt: 2 }} in={currentLocationSection === 'sec1'}>
                <Box mt={2} margin="0 auto" maxWidth={405}>
                  <FormHaveAPlace hiddenTitle={false} />
                </Box>
              </Collapse>
              <Collapse in={currentLocationSection === 'sec2'}>
                <Box mt={2} margin="0 auto" maxWidth={405}>
                  <FormPlaceInUEY hiddenTitle={false} />
                </Box>
              </Collapse>
            </Collapse>
          )}
        </CardContent>
      </Dialog>
      <Menu
        PaperProps={{ sx: { width: '328px' } }}
        anchorEl={anchorMenu}
        id="menu"
        open={openMenu}
        onClose={handleCloseMenu}
      >
        {LOCATION_OPTIONS.map(({ id, icon, text, divider, click }) => (
          <div>
            <MenuItem onClick={click} key={id}>
              <ListItemIcon>{icon}</ListItemIcon>
              <BpTypography fontWeight={500} color="grey.800" variant="body2">
                {text}
              </BpTypography>
            </MenuItem>
            {divider && <Divider />}
          </div>
        ))}
      </Menu>
      <DialogHaveAPlace open={openDialogHaveAplace} onClose={() => setOpenDialogHaveAplace(false)} />
      <DialogPlaceInUEY open={openDialogPlaceInUey} onClose={() => setOpenDialogPlaceInUey(false)} />
      <DialogContainerLocation open={router.query?.modal === 'CONTAINER-ROOT'} onClose={() => router.back()} />
    </>
  )
}
export default MenuOptionsSearch
