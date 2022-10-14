import { ListItem, ListItemButton, ListItemIcon } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { useSidebarAmazonContextProvider } from 'features/common/context'
import { BpTypography } from 'components/shared'

const SidebarRow = ({ root, name, entry }) => {
  const { setSubContainer, setSubContainerEntries } = useSidebarAmazonContextProvider()

  const handleClick = () => {
    setSubContainer(true)
    setSubContainerEntries({ root, ...entry })
  }

  return (
    <ListItem disablePadding onClick={handleClick}>
      <ListItemButton sx={{ justifyContent: 'space-between' }}>
        <BpTypography variant="body1" fontWeight={400} color="grey.700" label={name} />
        {entry?.categories?.length > 0 && (
          <ListItemIcon sx={{ minWidth: 22 }}>
            <KeyboardArrowRightIcon fontSize="small" />
          </ListItemIcon>
        )}
      </ListItemButton>
    </ListItem>
  )
}
export default SidebarRow
