import React from 'react'
import Button from './Button'

function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
      <div className='flex flex-col gap-4'>
      <p>PREPARE TO GO</p>  
      <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Swole<span className='text-blue-400'>zilla</span></h1>  
      </div>

<p className='text-sm md:text-base font-light'>I acknowledge that I might become <span className='text-blue-400 font-medium'>insanely huge</span> and willingly accept the risks of turning into the local <span className='text-blue-400 font-medium'>muscle titan</span>, facing extreme body transformations and narrow doorways.</p>  

<Button func={()=>{
  window.location.href='#generate'
}} text={'Accept and Begin'} />


    </div>
  )
}

export default Hero
