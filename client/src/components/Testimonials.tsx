import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className='flex flex-col items-center justify-center my-20 py-6'>
      <h2 className='text-3xl sm:text-4xl font-semibold mb-4'>Customer testimonials</h2>
      <p className='text-gray-500 mb-12'>What Our Users Are Saying</p>

      <div className='flex flex-wrap gap-6'>
        {
            testimonialsData.map((testimonials, index) => (
                <div className='bg-white/20 p-12 rounded-lg shadow-md order w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all' key={index}>
                    <div className='flex flex-col items-center'>
                        <img src={testimonials.image} alt="" className='rounded-full w-14' />

                        <h3 className='text-xl font-semibold mt-3'>{testimonials.name}</h3>
                        <p className='text-gray-500 mb-4'>{testimonials.role}</p>
                        <div className='flex mb-4'>
                            {
                                Array(testimonials.stars).fill('').map((item, index) => (
                                    <img key={index} src={assets.rating_star} alt="" />
                                ))
                            }
                        </div>
                        <p className='text-center text-sm text-gray-600 '>{testimonials.text}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Testimonials
