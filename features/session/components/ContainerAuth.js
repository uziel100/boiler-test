import Container from './Container'
import ContainerLeft from './ContainerLeft'
import ContainerRight from './ContainerRight'

const ContainerAuth = Object.assign(Container, {
  Left: ContainerLeft,
  Right: ContainerRight
})

export default ContainerAuth
