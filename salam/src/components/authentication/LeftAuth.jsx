import React from 'react'

const LeftAuth = ({title, description, img}) => {
  return (
    <div className='font-poppins space-y-8 animate-fade-in'>
      <div className='flex justify-center lg:justify-start'>
        <div className='relative group'>
          <div className='absolute -inset-4 bg-linear-to-r from-primary/20 to-blue-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
          <div className='relative transform hover:scale-110 transition-all duration-500 hover:rotate-3'>
            {img}
          </div>
        </div>
      </div>
      <div className='space-y-6'>
        <h1 className='font-extrabold text-5xl lg:text-6xl xl:text-7xl leading-[1.2] bg-linear-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse-slow'>
          {title}
        </h1>
        <div className='relative'>
          <div className='absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-primary to-blue-600 rounded-full'></div>
          <p className='text-lg lg:text-xl text-gray-700 leading-relaxed max-w-lg pl-6 font-medium'>
            {description}
          </p>
        </div>
        <div className='flex gap-2 pt-4'>
          <div className='w-12 h-1 bg-primary rounded-full animate-pulse'></div>
          <div className='w-8 h-1 bg-blue-600 rounded-full animate-pulse delay-300'></div>
          <div className='w-6 h-1 bg-purple-600 rounded-full animate-pulse delay-500'></div>
        </div>
      </div>
    </div>
  )
}

export default LeftAuth