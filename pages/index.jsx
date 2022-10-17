import { LayoutMain } from 'components/layouts'
import { HomePage } from 'features/home/pages'

const IndexPage = () => <HomePage />

IndexPage.getLayout = function getLayout(page) {
  return <LayoutMain>{page}</LayoutMain>
}

export default IndexPage
