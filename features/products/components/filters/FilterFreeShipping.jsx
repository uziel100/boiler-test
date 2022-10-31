import { Stack, Switch } from "@mui/material"
import { BpTypography } from "components/shared"

const FilterFreeShipping = ({ name = "freeShipping", value, onChange }) => {

  const handleChange = (event) => {
    onChange({ name, value: event.target.checked})
  }

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ bgcolor: 'grey.200', padding: '10px' }}
      borderRadius={2}
    >
      <BpTypography fontWeight={500} variant="body2" color="grey.700" sx={{ fontSize: '14px' }}>
        Envío gratis
      </BpTypography>
      <Switch
        name={name}
        color="primary"
        checked={value}
        onChange={handleChange}
      />
    </Stack>
  )
}
export default FilterFreeShipping
