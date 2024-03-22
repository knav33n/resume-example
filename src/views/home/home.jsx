import { memo } from 'react'
import Layout from '../../components/common/layout/layout'
import UserProfile from '../../modules/user-profile/user-profile'

const Home = memo(function Home() {
  return (
    <Layout>
      <UserProfile />
    </Layout>
  )
})

export default Home