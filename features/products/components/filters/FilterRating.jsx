import StarRoundedIcon from '@mui/icons-material/StarRounded'
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded'
import { Rating } from '@mui/material'

const FilterRating = ({ name = 'rating', value, onChange }) => {
  const handleChange = newValue => {
    onChange({ rating: newValue })
  }

  return (
    <Rating
      name={name}
      value={value}
      color="primary"
      size="large"
      icon={<StarRoundedIcon color="primary" fontSize="inherit" />}
      emptyIcon={<StarBorderRoundedIcon fontSize="inherit" />}
      onChange={(event, newValue) => handleChange(newValue)}
    />
  )
}
export default FilterRating
