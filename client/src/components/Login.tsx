import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext';

const Login = () => {

    const [state, setState] = useState('Login');
    const {setShowLogin} = useContext(AppContext);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [])

    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>

            <form className='relative bg-white p-10 rounded-xl text-slate-500'>
                <h2 className='text-center text-2xl text-neutral-800 font-medium'>{state}</h2>
                <p className='text-sm '>Welcome back! Please {state} to continue</p>

                {state !== 'Login' &&
                    <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                        <img src={assets.profile_icon} width={28} alt="" />
                        <input type="text" className='outline-none text-sm ' placeholder='Full name' required name="" id="" />
                    </div>
                }

                <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-3'>
                    <img src={assets.email_icon} width={28} alt="" />
                    <input type="email" className='outline-none text-sm ' placeholder='Email ID' required name="" id="" />
                </div>

                <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-3'>
                    <img src={assets.lock_icon} width={18} alt="" />
                    <input type="password" className='outline-none text-sm ' placeholder='Password' required name="" id="" />
                </div>

                <p className='text-sm text-[#7b19d8] my-4 cursor-pointer'>Forgot password?</p>

                <button className='bg-[#7b19d8] w-full text-white py-2 rounded-full'>{state === 'Login' ? 'Login' : 'Create account'}</button>

                { state === 'Login' ? 
                <p className='mt-5 text-center'>Don't have an account? <span className='text-[#7b19d8] cursor-pointer' onClick={() => setState('Sign Up')}>Sign up</span></p> :
                <p className='mt-5 text-center'>Already have an account? <span className='text-[#7b19d8] cursor-pointer' onClick={() => setState('Login')}>Login</span></p>  }

                <img onClick={() => setShowLogin(false)} src={assets.cross_icon} className='absolute top-5 right-5 cursor-pointer' alt="" />
            </form>
        </div>
    )
}

export default Login
