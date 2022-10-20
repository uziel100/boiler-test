import { Box } from '@mui/material'
import { LayoutMain } from 'components/layouts'
import { HomePage } from 'features/home/pages'

const IndexPage = () => (
  <Box position="relative" overflow="hidden">
    <HomePage />
    <Box
      sx={{
        width: '50px',
        height: '110px',
        borderRadius: '100px 0px 0px 100px',
        bgcolor: 'secondary.300',
        position: 'absolute',
        top: '31%',
        right: 0,
        zIndex: -1
      }}
    />
    <Box
      sx={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        bgcolor: 'secondary.100',
        position: 'absolute',
        top: '36%',
        right: 40,
        zIndex: -1
      }}
    />
    <Box
      sx={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        bgcolor: 'secondary.300',
        position: 'absolute',
        top: '34%',
        right: 120,
        zIndex: -1
      }}
    />
  </Box>
)

IndexPage.getLayout = function getLayout(page) {
  return <LayoutMain>{page}</LayoutMain>
}

export default IndexPage
