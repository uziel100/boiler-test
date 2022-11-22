import { Collapse, Dialog, DialogContent, DialogTitle, FormControlLabel, IconButton, RadioGroup } from '@mui/material'
import ArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import { BpTransitionSlideLeft } from 'components/shared'
import { InputRadio } from 'components/common'
import { useState } from 'react'
import { FormHaveAPlace } from '.'
import FormPlaceInUEY from './FormPlaceInUEY'

// eslint-disable-next-line arrow-body-style
const DialogContainerLocation = ({ open, onClose }) => {
  const [value, setValue] = useState('female')

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <Dialog
      fullScreen
      open={open}
      maxWidth="xs"
      scroll="paper"
      aria-labelledby="moda-container-locations"
      hideBackdrop
      TransitionComponent={BpTransitionSlideLeft}
    >
      <DialogTitle>
        <IconButton onClick={onClose} sx={{ ml: -2 }}>
          <ArrowLeftIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ pt: 0 }}>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="female" control={<InputRadio />} label="Buscar un lugar en UEY" />
          <Collapse in={value === 'female'}>
            <FormPlaceInUEY hiddenTitle />
          </Collapse>

          <FormControlLabel value="male" control={<InputRadio />} label="Ya tengo un lugar para mi evento" />
          <Collapse in={value === 'male'}>
            <FormHaveAPlace hiddenTitle />
          </Collapse>
        </RadioGroup>
      </DialogContent>
    </Dialog>
  )
}
export default DialogContainerLocation
