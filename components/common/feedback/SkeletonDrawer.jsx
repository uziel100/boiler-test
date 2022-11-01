/* eslint-disable react/no-array-index-key */
import { CardContent, Skeleton } from '@mui/material'

const skeletonItems = [
  { height: 40, width: '70%' },
  { height: 40, width: '65%' },
  { height: 40, width: '30%' },
  { height: 40, width: '75%' },
  { height: 40, width: '60%' },
  { height: 40, width: '80%' },
  { height: 40, width: '40%' },
  { height: 40, width: '30%' },
  { height: 40, width: '35%' },
  { height: 40, width: '20%' },
  { height: 40, width: '60%' },
  { height: 40, width: '75%' },
  { height: 40, width: '30%' },
  { height: 40, width: '50%' },
  { height: 40, width: '70%' },
  { height: 40, width: '65%' },
  { height: 40, width: '30%' },
  { height: 40, width: '75%' },
  { height: 40, width: '60%' },
  { height: 40, width: '80%' },
  { height: 40, width: '40%' },
  { height: 40, width: '30%' },
  { height: 40, width: '35%' },
  { height: 40, width: '20%' },
  { height: 40, width: '60%' },
  { height: 40, width: '75%' },
  { height: 40, width: '30%' },
  { height: 40, width: '50%' }
]

const SkeletonDrawer = () => (
  <CardContent>
    {skeletonItems.map((item, idx) => (
      <Skeleton key={idx} height={item.height} width={item.width} />
    ))}
  </CardContent>
)

export default SkeletonDrawer
