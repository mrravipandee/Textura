import React, { useContext } from 'react'
import { motion } from "motion/react"
import { assets } from '../assets/assets'
import { Stars } from 'lucide-react'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const context = useContext(AppContext);

    const user = context?.user;
    const setShowLogin = context?.setShowLogin;
    const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate('/result');
    } else {
      setShowLogin && setShowLogin(true);
    }
  }

  return (
    <motion.div
      // for motion animation
      initial={{ opacity: 0.2, y: 100, }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col justify-center items-center text-center my-20'
    >
      <motion.div
        initial={{ opacity: 0, y: -20, }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500">
        <p>Best text to Image generator</p>
        <img src={assets.star_icon} alt='' />
      </motion.div>

      <div className="flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ delay: 0.4, duration: 2 }}
          className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>Turn text to <span className='text-[#7b19d8]'>image</span>, in seconds.
        </motion.h1>

        <motion.p
            initial={{ opacity: 0, y:20}}
            animate={{ opacity: 1, y:0}}
            transition={{delay: 0.6, duration: 0.8}}
           className='text-center max-w-xl mx-auto mt-2'>Unleash your creativity with Al. Turn your imagination into visual art in seconds - just type, and watch the magic happen.</motion.p>

        <motion.button 
         onClick={onClickHandler}
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.95 }}
         initial={{ opacity: 0}}
         animate={{opacity: 1}}
         transition={{ default: {duration: 0.5}, opacity: {delay:0.8, duration:1}}}
         className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'>Generate Images <Stars className='h-5' /></motion.button>

        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1, duration:1}}
           className='flex flex-wrap justify-center mt-16 gap-3'>
          {
            Array(6).fill('').map((item, index) => (
              <motion.img 
                whileHover={{ scale: 1.05, duration:0.5 }}
               className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10'
                src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
                alt='' key={index} width={70} />
            ))
          }
        </motion.div>

        <p className=''>Generated images from textura</p>

      </div>

    </motion.div>
  )
}

export default Header
