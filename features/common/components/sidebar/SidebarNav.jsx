import { Box, Slide } from '@mui/material'
import { useSidebarAmazonContextProvider } from 'features/common/context'
import SidebarSubcontainer from './SidebarSubcontainer'
import SidebarContent from './SidebarContent'

const SidebarNav = () => {
  const { subContainer } = useSidebarAmazonContextProvider()

  return (
    <>
      <Slide in={!subContainer} direction="right" timeout={!subContainer ? 300 : 250} unmountOnExit mountOnEnter>
        <Box>{!subContainer && <SidebarContent />}</Box>
      </Slide>
      <Slide in={subContainer} direction="right" timeout={subContainer ? 300 : 150} unmountOnExit mountOnEnter>
        <Box>{subContainer && <SidebarSubcontainer />}</Box>
      </Slide>
    </>
  )
}
export default SidebarNav
