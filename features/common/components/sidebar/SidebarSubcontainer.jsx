import { List, ListItem, ListItemButton, ListItemIcon } from '@mui/material'
import { useSidebarAmazonContextProvider } from 'features/common/context'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import SidebarRow from './SidebarRow'
// import SidebarTitle from './SidebarTitle'

const SidebarSubcontainer = () => {
  const { setSubContainer, subContainerEntries } = useSidebarAmazonContextProvider()

  const handleClick = () => setSubContainer(false)

  return (
    <>
      <ListItem disableGutters>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon sx={{ minWidth: 40 }}>
            <ArrowBackIcon fontSize="small" />
          </ListItemIcon>
          Menu pricipal
        </ListItemButton>
      </ListItem>
      <List>
        {subContainerEntries?.children?.nodes?.map(category => (
          <div key={category.id}>
            <SidebarRow
              key={category.id}
              root={subContainerEntries.root}
              rootSlug={subContainerEntries.rootSlug}
              name={category.name}
              entry={category}
            />
            {/* <SidebarTitle name={`${category.name}-${subContainerEntries.root}`} />
            {category?.children?.nodes?.map(entry => (
              <SidebarRow key={entry.id} root={subContainerEntries.root} name={entry.name} entry={entry} />
            ))} */}
          </div>
        ))}
      </List>
    </>
  )
}
export default SidebarSubcontainer
