import { ListItem, ListItemButton } from '@mui/material'
import { BpTypography } from 'components/shared'

const SidebarTitleButton = ({ name, isUpperCase = true }) => (
  <ListItem disablePadding>
    <ListItemButton>
      <BpTypography variant="body1" fontWeight={600} color="primary.main" isUpperCase={isUpperCase} label={name} />
    </ListItemButton>
  </ListItem>
)

export default SidebarTitleButton
