import { CardProductSmall, Carousel, SkeletonProductSmall } from 'components/common'
import { SwiperSlide } from 'swiper/react'

const SkeletonLoader = new Array(5).fill(0).map((item, idx) => (
  // eslint-disable-next-line react/no-array-index-key
  <SwiperSlide key={idx}>
    <SkeletonProductSmall />
  </SwiperSlide>
))

const ProductSlider = ({ items = null }) => {
  if (!items) return <Carousel>{SkeletonLoader}</Carousel>

  return (
    <Carousel typeColumn="column5">
      {items.map(item => (
        <SwiperSlide key={item.id}>
          <CardProductSmall title={item.title} price={item.price} rating={item.rating} img={item.img} />
        </SwiperSlide>
      ))}
    </Carousel>
  )
}
export default ProductSlider
