import { ListItem, ListItemButton, ListItemIcon } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { useSidebarAmazonContextProvider } from 'features/common/context'
import { BpTypography } from 'components/shared'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { closeDrawer } from 'store/states/ui'

const SidebarRow = ({ root, rootSlug, name, entry }) => {
  const dispatcher = useDispatch()

  const onCloseDrawer = () => {
    dispatcher(closeDrawer())
  }

  const { setSubContainer, setSubContainerEntries } = useSidebarAmazonContextProvider()
  const router = useRouter()

  const handleClick = () => {
    // console.log({ root, entry })
    if (!entry?.children?.nodes?.length) {
      if (router.query?.ctg === entry.id) {
        onCloseDrawer()
        return
      }
      // console.log({ query: router.query, rootSlug, entry })
      // console.log({
      //   base: router.query?.base,
      //   ctg: entry?.slug,
      //   entry
      // })
      const customQuery =
        router.query?.base === root
          ? { ...router.query, base: root, ctg: entry?.slug }
          : { base: root, ctg: entry?.slug }
      // console.log({ customQuery })
      return router
        .push(
          {
            pathname: `/category/${rootSlug}`,
            query: customQuery
          },
          undefined,
          { shallow: router.query?.base === root }
        )
        .then(() => {
          onCloseDrawer()
        })
    }
    setSubContainer(true)
    setSubContainerEntries({ root, rootSlug, ...entry })
  }

  return (
    <ListItem disablePadding onClick={handleClick}>
      <ListItemButton sx={{ justifyContent: 'space-between' }}>
        <BpTypography variant="body1" fontWeight={400} color="grey.700" label={name} />
        {entry?.children?.nodes?.length > 0 && (
          <ListItemIcon sx={{ minWidth: 22 }}>
            <KeyboardArrowRightIcon fontSize="small" />
          </ListItemIcon>
        )}
      </ListItemButton>
    </ListItem>
  )
}
export default SidebarRow
