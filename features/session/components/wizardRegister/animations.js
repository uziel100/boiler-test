/* eslint-disable import/prefer-default-export */
export const containerVariants = {
  hidden: {
    opacity: 0,
    x: '10vw'
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring'
    }
  },
  exit: {
    y: '-100vw',
    duration: 1,
    opacity: 0
  }
}
