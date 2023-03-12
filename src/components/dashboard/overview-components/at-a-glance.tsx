import {
  InformationCircleIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from '@heroicons/react/24/outline'

const AtAGlance = () => {
  return (
    <div className='bg-zinc-900 h-96 rounded-lg'>
      <div className='w-full h-full px-4 py-4'>
        <div className='flex justify-between items-center'>
          <h3 className='text-xl'>Stock exchange</h3>
          <InformationCircleIcon className='h-5 w-5 text-white' />
        </div>
        <div className='flex justify-between my-6'>
          {/* LEFT  */}
          <div className='flex flex-col justify-start items-start'>
            <span className='text-4xl'>6148.77</span>
            <span className='mt-2 text-sm text-gray-500'>02:45 pm 11/08</span>
          </div>

          {/* RIGHT */}
          <div className='flex flex-col justify-start items-end'>
            <span className='text-green-700 flex mt-1'>
              <ArrowTrendingUpIcon className='h-5 w-5 mr-2' /> 32.13 (-0.52%)
            </span>
            <span className='text-base text-gray-400 mt-2'>Movement</span>
          </div>
        </div>
        <div className='flex justify-between bg-black/60 rounded-lg py-4 px-4 items-center'>
          {/* Day Open */}

          <div className='flex flex-col'>
            <span className='text-green-700'>6180.90</span>
            <span className=' text-gray-400'>Day open</span>
          </div>

          <div className='border border-l border-gray-900 h-9' />

          {/* Day high */}
          <div className='flex flex-col'>
            <span className='text-green-700'>6180.90</span>
            <span className=' text-gray-400'>Day high</span>
          </div>

          <div className='border border-l border-gray-900 h-9' />

          {/* Day low */}
          <div className='flex flex-col'>
            <span className='text-red-700'>6180.90</span>
            <span className=' text-gray-400'>Day low</span>
          </div>
        </div>

        {/* Slider */}
      </div>
    </div>
  )
}

export default AtAGlance
