import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { IconButton, styled } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const ContainerModal = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  display: 'flex',
  flexDirection: 'column',
  background: theme.palette.background.paper,
  padding: '1.5rem',
  borderRadius: '1.5rem',
  [theme.breakpoints.down('sm')]: {
    width: '90%'
  }
}))

const BpModal = ({ open, children, onClose = undefined, paperProps, ...props }) => (
  <Modal
    open={open}
    onClose={() => (onClose ? onClose() : { reason: 'backdropClick' })}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    sx={{ border: 'none' }}
    disableAutoFocus
    {...props}
  >
    <ContainerModal {...paperProps}>
      {onClose && (
        <IconButton
          onClick={onClose}
          sx={{
            alignSelf: 'flex-end'
          }}
        >
          <CloseIcon />
        </IconButton>
      )}
      {children}
    </ContainerModal>
  </Modal>
)

export default BpModal
