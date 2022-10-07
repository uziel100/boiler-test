import Image from 'next/image'
import { FabSocialMedia } from '../style-component'

const ButtonFacebook = () => (
  <FabSocialMedia disableTouchRipple variant="circular">
    <Image fixed="1x" src="/images/icon-login-google-min.svg" height={24} width={24} alt="Icono de facebook login" />
  </FabSocialMedia>
)
export default ButtonFacebook
