import { ContainerApp } from 'components/common'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { AboutSection, Banner, CategorySection, TitleSectionProduct } from '../components'
import DeliverySection from '../components/delivery/DeliverySection'
import HeroEvent from '../components/heroEvent/HeroEvent'
import ProductSlider from '../components/products/ProductSlider'
import SectionProducts from '../components/products/SectionProducts'
import TestimonialsSlider from '../components/testimonials/TestimonialsSlider'

const items = [
  { id: 1, title: 'Coca cola light1', price: 20, rating: 3, img: '/images/testImages/image-01.jpg' },
  { id: 2, title: 'Coca cola light2', price: 18, rating: 1, img: '/images/testImages/image-02.jpg' },
  { id: 3, title: 'Coca cola light3', price: 26, rating: 2, img: '/images/testImages/image-03.jpg' },
  { id: 4, title: 'Coca cola light4', price: 30, rating: 4, img: '/images/testImages/image-04.jpg' },
  { id: 5, title: 'Coca cola light5', price: 30, rating: 5, img: '/images/testImages/image-02.jpg' },
  { id: 6, title: 'Coca cola light6', price: 15, rating: 4, img: '/images/testImages/image-04.jpg' },
  { id: 7, title: 'Coca cola light7', price: 70, rating: 5, img: '/images/testImages/image-01.jpg' },
  { id: 8, title: 'Coca cola light8', price: 10, rating: 1, img: '/images/testImages/image-03.jpg' }
]

const itemsServices = [
  { id: 1, title: 'Coca cola light', price: 20, rating: 3, img: '/images/testImages/image-06.jpg' },
  { id: 2, title: 'Coca cola light', price: 18, rating: 1, img: '/images/testImages/image-07.jpg' },
  { id: 3, title: 'Coca cola light', price: 26, rating: 2, img: '/images/testImages/image-08.jpg' },
  { id: 4, title: 'Coca cola light', price: 30, rating: 4, img: '/images/testImages/image-09.jpg' },
  { id: 5, title: 'Coca cola light', price: 30, rating: 5, img: '/images/testImages/image-06.jpg' },
  { id: 6, title: 'Coca cola light', price: 15, rating: 4, img: '/images/testImages/image-08.jpg' }
]

const itemsSpaces = [
  { id: 1, title: 'Coca cola light', price: 20, rating: 3, img: '/images/testImages/image-10.jpg' },
  { id: 2, title: 'Coca cola light', price: 18, rating: 1, img: '/images/testImages/image-11.jpg' },
  { id: 3, title: 'Coca cola light', price: 26, rating: 2, img: '/images/testImages/image-12.jpg' },
  { id: 4, title: 'Coca cola light', price: 30, rating: 4, img: '/images/testImages/image-13.jpg' },
  { id: 5, title: 'Coca cola light', price: 30, rating: 5, img: '/images/testImages/image-14.jpg' },
  { id: 6, title: 'Coca cola light', price: 15, rating: 4, img: '/images/testImages/image-12.jpg' }
]

const HomePage = () => {
  const [banners, setBanners] = useState(undefined)
  const [products, setProducts] = useState(undefined)
  const [services, setServices] = useState(undefined)
  const [spaces, setSpaces] = useState(undefined)
  const session = useSession()

  useEffect(() => {
    setTimeout(() => {
      setBanners([
        {
          id: 'slide-02',
          url: '/images/banner2.jpg',
          type: 'image',
          description: 'Imagen de la celebracion de dia halloween'
        },
        {
          id: 'slide-01',
          url: '/images/banner1.jpg',
          type: 'image',
          description: 'Imagen de la celebracion de dia de muertos',
          redirect: '/login'
        },
        {
          id: 'slide-03',
          url: '/images/banner3.jpg',
          type: 'image',
          description: 'Imagen de un paisaje verde'
        }
      ])
    }, 500)

    setTimeout(() => {
      setProducts(items)
      setServices(itemsServices)
      setSpaces(itemsSpaces)
    }, 4000)
  }, [])

  useEffect(() => {
    console.log({ session })
  }, [session])

  return (
    <>
      <Banner slides={banners} />
      <HeroEvent />
      <SectionProducts products={products} services={services} spaces={spaces} />
      <DeliverySection />
      <CategorySection />
      <AboutSection />
      <ContainerApp component="section">
        <TitleSectionProduct text="Lo mas vendido" />
        <ProductSlider items={products} />
      </ContainerApp>
      <ContainerApp component="section" sx={{ mt: 10, mb: 15 }}>
        <TestimonialsSlider />
      </ContainerApp>
    </>
  )
}
export default HomePage
