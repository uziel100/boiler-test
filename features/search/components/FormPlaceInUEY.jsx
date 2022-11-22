import { Box, Grid, InputAdornment, Stack } from '@mui/material'
import { BpTextField, BpTypography } from 'components/shared'
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded'
import { InputDatePickerDesktop } from 'components/common'
import { IconPlaceLocation } from 'components/icons'
// import { InputRadio } from 'components/common'

const FormPlaceInUEY = ({ hiddenTitle = false }) => (
  <>
    {!hiddenTitle && (
      <BpTypography textAlign="center" fontWeight={600} variant="body1" color="grey.800" component="p">
        Ya tengo un lugar para mi evento
      </BpTypography>
    )}
    <Box mt={2}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <BpTypography sx={{ mb: 1 }} fontWeight={500} variant="body2" color="grey.700" component="p">
            Fecha de inicio
          </BpTypography>
          <InputDatePickerDesktop
            value={null}
            // onChange={newValue => {
            //   setValue(newValue)
            // }}
            id="birthday"
            name="birthday"
            placeholder="Fecha"
            color="primary"
            views={['month', 'day']}
            minDate={new Date()}
          />
        </Grid>
        <Grid item xs={6}>
          <Stack direction="row" gap={1} mb={1}>
            <TaskAltRoundedIcon color="primary" fontSize="small" />
            <BpTypography
              sx={{ display: { xs: 'none', sm: 'block' } }}
              fontWeight={500}
              variant="body2"
              color="grey.700"
              component="p"
            >
              Fecha de culminación
            </BpTypography>
            <BpTypography
              sx={{ display: { xs: 'block', sm: 'none' } }}
              fontWeight={500}
              variant="body2"
              color="grey.700"
              component="p"
            >
              Fecha de fin
            </BpTypography>
          </Stack>
          <InputDatePickerDesktop
            value={null}
            // onChange={newValue => {
            //   setValue(newValue)
            // }}
            id="birthday"
            name="birthday"
            placeholder="Fecha"
            color="primary"
            views={['month', 'day']}
            minDate={new Date()}
          />
        </Grid>
      </Grid>
      <BpTypography sx={{ mt: 3, mb: 1 }} fontWeight={500} variant="body2" color="grey.700" component="p">
        Selecciona tu ubicación
      </BpTypography>
      <BpTextField
        placeholder="Ubicación"
        type="text"
        color="primary"
        InputProps={{
          readOnly: true,
          endAdornment: (
            <InputAdornment position="end">
              <IconPlaceLocation color="grey" variant="600" />
            </InputAdornment>
          )
        }}
      />
    </Box>
  </>
)
export default FormPlaceInUEY
