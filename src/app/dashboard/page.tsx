import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { app } from '@/lib/firebase-admin'

const getStockData = async (userId: string) => {
  const db = app.firestore()
  // Get the user's document
  const userDoc = await db.collection('users').doc(userId).get()

  // Check if the user exists
  if (!userDoc.exists) {
    throw new Error('User not found')
  }

  // Get the stocks data if user exists
  const stocksSnapshot = await db.collection('stocksV2').get()

  // Get the data
  const data = stocksSnapshot.docs.map((doc) => doc.data())

  return data
}

const Dashboard = async () => {
  const session = await getServerSession(authOptions)
  const userId = session?.user?.id
  const stocksData = await getStockData(userId)
  console.log(stocksData)

  return (
    <div className=''>
      <div className='overflow-x-hidden mxkey'>
        <div className='py-12 animate-marqueeReverse whitespace-nowrap '>
          <span className='text-4xl mx-4'>Marquee Item 1</span>
          <span className='text-4xl mx-4'>Marquee Item 2</span>
          <span className='text-4xl mx-4'>Marquee Item 3</span>
          <span className='text-4xl mx-4'>Marquee Item 4</span>
          <span className='text-4xl mx-4'>Marquee Item 5</span>
        </div>
      </div>
    </div>
  )
}

// const Marquee = ({ children }) => {}
export default Dashboard
