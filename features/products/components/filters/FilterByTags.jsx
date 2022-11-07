import { Autocomplete, CircularProgress } from '@mui/material'
import { BpTextField, BpTypography } from 'components/shared'
import useTagsProductService from 'features/products/hooks/useTagsProduct'
import { useEffect, useState } from 'react'

const FilterByTags = ({ onChange, size = 'small', defaultValues = [] }) => {
  // console.log('hola')
  const { findAllTags } = useTagsProductService()
  const [value, setValue] = useState([])
  const [loading, setLoading] = useState(false)
  const [options, setOptions] = useState([])

  useEffect(() => {
    setLoading(true)
    findAllTags({ where: { order: 'ASC' } })
      .then(data => {
        const filterValues = defaultValues.map(id => data.find(item => item.id === id))
        setValue(filterValues)
        setOptions(data)
      })
      .catch(console.log)
      .finally(() => {
        setLoading(false)
      })
  }, [defaultValues])

  return (
    <Autocomplete
      multiple
      limitTags={2}
      size={size}
      disabled={loading}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
        onChange(newValue)
      }}
      id="multiple-limit-tags"
      options={options}
      loading={loading}
      isOptionEqualToValue={(option, newValue) => option.title === newValue.title}
      getOptionLabel={option => option.title}
      renderInput={params => (
        <BpTextField
          {...params}
          placeholder="Escribe aquí"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            )
          }}
        />
      )}
    />
  )
}
export default FilterByTags
