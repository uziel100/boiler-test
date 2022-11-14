import { Button, IconButton, Stack, Tooltip } from '@mui/material'
import { SkeletonCategoryProductHistory } from 'components/common'
import { BpTypography } from 'components/shared'
import Image from 'next/image'

const CategoryHistoryDesktop = ({ entry = null, changeFilters }) => {
  console.log('hola')
  return (
    <>
      {!entry && <SkeletonCategoryProductHistory />}
      {entry && (
        <Stack direction="row" justifyContent="space-between" gap={1.5}>
          <Stack
            direction="row"
            gap={1}
            alignItems="center"
            sx={{
              maxWidth: entry?.parent && entry?.categories?.length > 0 ? '200px' : 'auto',
              overflow: 'hidden',
              pr: 1
            }}
          >
            {entry && (
              <>
                {entry?.parent && (
                  <IconButton onClick={() => changeFilters({ ctg: entry?.parent.slug })} sx={{ flexShrink: 0 }}>
                    <KeyboardArrowLeftIcon />
                  </IconButton>
                )}
                <Tooltip title={entry.name} placement="top">
                  <Stack direction="row" alignItems="center" gap={0.5}>
                    <Image objectFit="contain" src={entry.img} width={38} height={47} />
                    <BpTypography fontWeight={600} variant="body2" noWrap>
                      {entry.name}
                    </BpTypography>
                  </Stack>
                </Tooltip>
              </>
            )}
          </Stack>
          {entry && (
            <Stack
              maxWidth="320px"
              overflow="scroll"
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              gap={1}
            >
              {entry.categories?.map(category => (
                <Tooltip key={category.id} title={category.name} placement="top">
                  <Button
                    sx={{
                      boxShadow: 0,
                      bgcolor: 'grey.200',
                      color: 'grey.700',
                      borderRadius: 2,
                      maxWidth: '120px'
                    }}
                    disableElevation
                    disableFocusRipple
                    color="inherit"
                    variant="contained"
                    onClick={() => changeFilters({ ctg: category.slug })}
                  >
                    <BpTypography fontWeight={500} variant="caption" noWrap>
                      {category.name}
                    </BpTypography>
                  </Button>
                </Tooltip>
              ))}
            </Stack>
          )}
        </Stack>
      )}
    </>
  )
}
export default CategoryHistoryDesktop
