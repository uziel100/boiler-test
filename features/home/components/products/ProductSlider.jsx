import { CardProductSmall, Carousel, SkeletonProductSmall } from 'components/common'

const SkeletonLoader = new Array(5).fill(0).map(item => <SkeletonProductSmall key={item} />)

const ProductSlider = ({ items = null }) => {
  if (!items) return <Carousel>{SkeletonLoader}</Carousel>

  return (
    <Carousel>
      {items.map(item => (
        <CardProductSmall key={item.id} title={item.title} price={item.price} rating={item.rating} img={item.img} />
      ))}
    </Carousel>
  )
}
export default ProductSlider
