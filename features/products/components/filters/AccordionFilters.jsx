import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { BpTypography } from 'components/shared'
import { useState } from 'react'

const AccordionFilters = ({ title, children, defaultChecked = true }) => {
  const [checked, setChecked] = useState(defaultChecked)

  return (
    <Accordion
      elevation={0}
      expanded={checked}
      onChange={() => setChecked(val => !val)}
      sx={{
        '&::before': {
          display: 'none'
        }
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          padding: 0,
          '&.Mui-expanded': {
            minHeight: '40px'
          },
          '& > .MuiAccordionSummary-content': {
            margin: '0.1rem 0'
          }
        }}
      >
        <BpTypography fontWeight={600} variant="body2" color="grey.700" sx={{ fontSize: '14px' }}>
          {title}
        </BpTypography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0, mt: 0 }}>{children}</AccordionDetails>
    </Accordion>
  )
}
export default AccordionFilters
