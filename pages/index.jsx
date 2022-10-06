import { LayoutMain } from 'components/layouts'
import { addApolloState, initializeApollo } from 'utils'
import { Box } from '@mui/material'
import { HomePage } from 'features/home/pages'

const IndexPage = ({ data }) => {
  console.log({ data })
  return (
    <>
      <HomePage />
    </>
  )
}

IndexPage.getLayout = function getLayout(page) {
  return <LayoutMain>{page}</LayoutMain>
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  return addApolloState(apolloClient, {
    props: {
      data: { hello: 'world' }
    } // will be passed to the page component as props
  })
}

export default IndexPage
