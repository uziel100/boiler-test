import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { BpTypography } from 'components/shared'

const ModalNoticeOfPrivacy = ({ open, onClose }) => (
  <Dialog
    open={open}
    onClose={onClose}
    scroll="paper"
    aria-labelledby="scroll-dialog-title"
    aria-describedby="scroll-dialog-description"
  >
    <IconButton onClick={onClose} sx={{ width: '40px', position: 'absolute', right: '10px', top: '10px' }}>
      <CloseIcon />
    </IconButton>
    <DialogTitle id="scroll-dialog-title">
      <BpTypography fontWeight={600} variant="h4" color="grey.800" label="Aviso de privacidad" />
    </DialogTitle>
    <DialogContent dividers>
      <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
        <BpTypography fontWeight={400} variant="body2" color="grey.700">
          {[...new Array(50)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
  Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join('\n')}
        </BpTypography>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      {/* <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose}>Subscribe</Button> */}
    </DialogActions>
  </Dialog>
)
export default ModalNoticeOfPrivacy
