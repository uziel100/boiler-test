import { InputRating } from 'components/common'

const FilterRating = ({ name = 'rating', value, onChange }) => {
  const handleChange = newValue => {
    onChange({ rating: newValue })
  }

  return (
    <InputRating
      name={name}
      value={value}
      color="primary"
      size="large"
      onChange={(event, newValue) => {
        handleChange(+newValue)
      }}
    />
  )
}
export default FilterRating
