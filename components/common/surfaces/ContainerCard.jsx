import { Box, Card } from '@mui/material'

const ContainerCard = ({ children }) => (
  <Box component={Card} elevation={0} borderRadius="0.75rem" border="1px solid #EAE9EA">
    {children}
  </Box>
)
export default ContainerCard
