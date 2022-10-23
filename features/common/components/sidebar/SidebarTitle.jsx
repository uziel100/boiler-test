import { ListItem, ListItemText } from '@mui/material'
import { BpTypography } from 'components/shared'

const SidebarTitle = ({ name, isUpperCase = true }) => (
  <ListItem>
    <ListItemText>
      <BpTypography variant="body1" fontWeight={600} color="primary.main" isUpperCase={isUpperCase} label={name} />
    </ListItemText>
  </ListItem>
)

export default SidebarTitle
