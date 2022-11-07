import { Rating } from '@mui/material'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded'

const InputRating = ({ name, color = 'primary', size = 'large', value = 0, onChange, ...props }) => (
  <Rating
    name={name}
    value={value}
    color={color}
    size={size}
    icon={<StarRoundedIcon color="primary" fontSize="inherit" />}
    emptyIcon={<StarBorderRoundedIcon fontSize="inherit" />}
    onChange={onChange}
    {...props}
  />
)
export default InputRating
