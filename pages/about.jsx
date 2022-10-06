import { LayoutMain } from 'components/layouts'
import React from 'react'

const AboutPage = () => <h1>AboutPage</h1>

AboutPage.getLayout = function getLayout(page) {
  return <LayoutMain>{page}</LayoutMain>
}

export default AboutPage
