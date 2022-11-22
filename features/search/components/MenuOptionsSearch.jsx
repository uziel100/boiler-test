import { useState } from 'react'
import {
  Box,
  CardContent,
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
  Tabs,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { InputDatePickerDesktop } from 'components/common'
import { IconHome, IconPlaceLocation, IconSearch } from 'components/icons'
import { BpTextField, BpTransitionSlideDown, BpTypography } from 'components/shared'
import DialogHaveAPlace from './DialogHaveAPlace'
import DialogPlaceInUEY from './DialogPlaceInUEY'
import DialogContainerLocation from './DialogContainerLocation'

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
  const themeMui = useTheme()
  const isDeviceXs = useMediaQuery(themeMui.breakpoints.down('sm'))
  const [anchorMenu, setAnchorMenu] = useState(null)
  const openMenu = Boolean(anchorMenu)
  const [openDialogHaveAplace, setOpenDialogHaveAplace] = useState(false)
  const [openDialogPlaceInUey, setOpenDialogPlaceInUey] = useState(false)
  const [openDialogMobilContainer, setOpenDialogMobilContainer] = useState(false)

  const handleOpenModalMobilContainer = () => {
    setAnchorMenu(false)
    setOpenDialogMobilContainer(true)
  }

  const handleOpenModalHaveAplace = () => {
    setAnchorMenu(false)
    setOpenDialogHaveAplace(true)
  }

  const handleOpenModalPlaceInUey = () => {
    setAnchorMenu(false)
    setOpenDialogPlaceInUey(true)
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
            border: '1px solid #ccc'
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
                <BpTextField placeholder="Buscar aqui..." />
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
      <DialogContainerLocation open={openDialogMobilContainer} onClose={() => setOpenDialogMobilContainer(false)} />
    </>
  )
}
export default MenuOptionsSearch
