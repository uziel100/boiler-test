import { useBreakpoint } from 'hooks'
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
import { BpTransitionSlideLeft, BpTransitionSlideUp } from 'components/shared'
import CloseIcon from '@mui/icons-material/Close'
import ArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import FormHaveAPlace from './FormHaveAPlace'

const DialogHaveAPlace = ({ open, onClose }) => {
  const { isDeviceXs } = useBreakpoint()

  return (
    <Dialog
      fullScreen={isDeviceXs}
      open={open}
      maxWidth="xs"
      scroll="paper"
      aria-labelledby="moda-enviar-valoracion"
      hideBackdrop
      TransitionComponent={isDeviceXs ? BpTransitionSlideLeft : BpTransitionSlideUp}
    >
      <DialogTitle sx={{ display: { xs: 'flex', sm: 'none' } }}>
        <ArrowLeftIcon sx={{ ml: -1 }} onClick={onClose} />
      </DialogTitle>
      <DialogTitle sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'flex-end', py: 0.5 }}>
        <IconButton onClick={onClose} sx={{ mr: -1 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ pt: 0 }}>
        <FormHaveAPlace />
      </DialogContent>
    </Dialog>
  )
}
export default DialogHaveAPlace
