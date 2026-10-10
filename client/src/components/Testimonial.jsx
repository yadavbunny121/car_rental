import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'
import { easeOut, motion } from 'motion/react'

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Aarav Mehta',
      address: 'Delhi, India',
      image: assets.testimonial_image_1,
      review:
        'Booking a car with CarRental was super smooth and quick. The vehicle was clean, comfortable, and perfect for my weekend trip.'
    },

    {
      name: 'Sophia Williams',
      address: 'London, UK',
      image: assets.testimonial_image_2,
      review:
        'Excellent customer service and affordable pricing. I loved how easy it was to choose and book my car online.'
    },

    {
      name: 'Daniel Garcia',
      address: 'Madrid, Spain',
      image: assets.testimonial_image_1,
      review:
        'CarRental made my business travel stress-free. The pickup process was fast, and the car performance was outstanding.'
    }
  ]
  return (
    <div className='py-28 px-6 md:px-16 lg:px-24 xl:px-44'>
      <Title
        title='What Our Customors Say'
        subTitle='Discover why discerning travelers choose stayventure for their luxury accommodations around the world'
      />

      <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18'>
        {testimonials.map((testimonial, index) => (
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6,  delay: index * 0.2,ease: easeOut }}
            viewport={{amount:0.3,once:true}}
            key={index}
            className='bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500 '
          >
            <div className='flex items-center gap-3'>
              <img
                className='w-12 h-12 rounded-full'
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className='text-xl'>{testimonial.name}</p>
                <p className='text-gray-500'>{testimonial.address}</p>
              </div>
            </div>
            <div className='flex items-center gap-1 mt-4'>
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <img key={index} src={assets.star_icon} alt='star-icon' />
                ))}
            </div>
            <p className='text-gray-500 max-w-90 mt-4 font-light'>
              "{testimonial.review}"
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial
