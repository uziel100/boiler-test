import Image from 'next/image'
import { FabSocialMedia } from '../style-component'

const ButtonGoogle = () => (
  <FabSocialMedia disableTouchRipple variant="circular">
    <Image fixed="1x" src="/images/icon-login-facebook-min.svg" height={24} width={24} alt="Icono de google login" />
  </FabSocialMedia>
)
export default ButtonGoogle
