import { Box, Grid, Stack } from "@mui/material"
import { BpTypography } from "components/shared"
import { CardAboutList } from "."

const About = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={6}>
        <Stack direction="column" gap={3}>
          <BpTypography fontWeight={600} variant="h2" color="grey.800">
            Somos{' '}
            <BpTypography
              fontWeight={600}
              sx={{ display: 'inline' }}
              variant="h2"
              component="span"
              color="primary.main"
            >
              UEY
            </BpTypography>
          </BpTypography>
          <Box>
            <BpTypography color="grey.700" variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
              lectus
            </BpTypography>
            <BpTypography color="grey.700" sx={{ mt: 1 }} variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
              lectus
            </BpTypography>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <CardAboutList />
      </Grid>
    </Grid>
  )
}
export default About
