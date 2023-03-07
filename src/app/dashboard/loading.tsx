import clsxm from '@/lib/clsxm'

const DashboardLoading = () => {
  return (
    <div className='w-full h-14'>
      <div className=' w-full h-20 bg-zinc-900 rounded-lg animate-pulse'></div>
      <div className='my-5 w-full grid grid-cols-1 gap-y-5 lg:grid-cols-3 lg: gap-x-5'>
        <div className='bg-zinc-900 h-96 rounded-lg animate-pulse'></div>
        <div className='bg-zinc-900 h-96 rounded-lg animate-pulse'></div>
        <div className='bg-zinc-900 h-96 rounded-lg animate-pulse'></div>
      </div>

      <div className='my-5 w-full grid grid-cols-1 gap-y-5 lg:grid-cols-3 lg: gap-x-5'>
        <div className='bg-zinc-900 h-[500px] rounded-lg lg:col-span-2 animate-pulse'></div>
        <div className='bg-zinc-900 h-[500px] rounded-lg animate-pulse'></div>
      </div>
    </div>
  )
}

export default DashboardLoading
