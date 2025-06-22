import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { BadgeIndianRupee, User } from 'lucide-react';

export interface Step {
    title: string;
    description: string;
    icon: string;
}

const Navbar = () => {

    const context = useContext(AppContext);
    const navigate = useNavigate();

    const user = context?.user;
    const setShowLogin = context?.setShowLogin ?? false;

    return (
        <div>
            <div className='flex items-center justify-between py-4'>
            <Link to='/'>
                <img src={assets.logo} alt='Logo' className='w-28 sm:w-32 lg:w-40' />
            </Link>

            <div>
                {
                    user ?
                        <div className='flex items-center gap-2 sm:gap-3'>
                            <button onClick={()=> navigate('/buy')} className='flex items-center gap-2 bg-[#7b19d8] px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
                                <BadgeIndianRupee className='w-5 text-white' />
                                <p className='text-xs sm:text-sm font-medium text-white'>Credits Left: 50</p>
                            </button>
                            <p className='max-sm:hidden pl-4 text-gray-700'>Hi, Ravii</p>
                            <div className='relative group'>
                                <User className="w-5 drop-shadow" />
                                <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12 '>
                                    <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                                        <li className='py-1 px-2 cursor-pointer pr-5'>Logout</li>
                                    </ul>

                                </div>
                            </div>
                        </div>

                        : <div className='flex items-center gap-2 sm:gap-5'>
                            <p onClick={() => navigate('/buy')} className='cursor-pointer'>Pricing</p>
                            <button onClick={() => setShowLogin(true)} className='bg-[#7b19d8] text-white px-7 py-2 sm:px-10 text-sm rounded-full'>Login</button>
                        </div>
                }
            </div>
        </div>
        </div>
    )
}

export default Navbar;
