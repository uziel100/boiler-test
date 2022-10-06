import { Stack } from "@mui/material"
import { BpButton, BpTypography } from "components/shared"

const CardFeature = ({
  icon,
  title,
  description,
  buttonText,
  buttonVariant = "contained"
}) => {
  return (
    <Stack direction="column" textAlign="center" alignItems="center" justifyContent="center">
      {icon}
      <BpTypography sx={{mt:3}} fontVariant="primary" fontWeight={500} variant="h5" label={title} color="grey.800" />
      <BpTypography variant="body2" textAlign="center" sx={{ my: 2 }}>
        {description}
      </BpTypography>
      <BpButton variant={buttonVariant} fullWidth={false}>{buttonText}</BpButton>
    </Stack>
  )
}
export default CardFeature
