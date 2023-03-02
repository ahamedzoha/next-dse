import { authOptions } from '@/pages/api/auth/[...nextauth]'
// import { getServerSession } from 'next-auth/next'

const Dashboard = () => {
  // const session = await getServerSession(authOptions)

  // console.log(session)

  return (
    <>
      <div>Dashboard</div>
    </>
  )
}
export default Dashboard
