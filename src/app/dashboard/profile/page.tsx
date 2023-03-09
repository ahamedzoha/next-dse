import Image from 'next/image'
import { DefaultUser, getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

const getUser = async () => {
  const session = await getServerSession(authOptions)

  return session
}

const Home = async () => {
  const user = await getUser()

  // console.log(user)

  return (
    <div className='w-full flex flex-1'>
      <div className='flex space-x-6'>
        {user?.user?.image ? (
          <Image
            src={user?.user?.image ? user.user.image : '/images/user.png'}
            alt='hero image'
            width={100}
            height={100}
            className='w-24 h-24 rounded-full'
          />
        ) : null}

        <div className='flex flex-col'>
          <h2 className='text-3xl font-bold'>{user?.user?.name}</h2>
          <p className='text-gray-300'>{user?.user?.email}</p>
        </div>
      </div>
    </div>
  )
}

export default Home
