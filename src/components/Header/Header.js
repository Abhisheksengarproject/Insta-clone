import React from 'react'
import Link from 'next/link';
import { IoIosSearch } from 'react-icons/io';
import HeaderIcon from './HeaderIcons/HeaderIcon';
import { Add, Cross, Home, Heart, Messenger, Search, Compass, Profile } from '../Header/HeaderIcon/Icons'

const HEADER_ITEMS = [
    {
        icon: Home,
        url: '/',
        name: 'Home'
    },

    {
        icon: Messenger,
        url: '/',
        name: 'Messenger'
    },

    {
        icon: Add,
        url: '/',
        name: 'Add'
    },

    {
        icon: Compass,
        url: '/',
        name: 'Discover'
    },

    {
        icon: Heart,
        url: '/',
        name: 'Likes'
    },

    {
        icon: Profile,
        url: '/',
        name: 'Profile'
    }
]

const Header = () => {
    return (
        <div>
            <header className='w-full flex items-center justify-around h-16 bg-white shadow-md'>
                <Link href="/">
                    <div className='text-xl font-semibold tracking-wider cursor-pointer'>
                        Instagram
                    </div>
                </Link>
                <div className='flex bg-gray-100 group space-x-4 group-focus:border-gray-400 border items-center border-gray-400 rounded-lg px-2'>
                    <label htmlFor='search' className=''>
                        <IoIosSearch className='text-lg text-gray-400' />
                    </label>
                    <input
                        type='search'
                        name='search'
                        id='search'
                        className='bg-gray-100 hover:bg-transparent focus:bg-transparent placeholder:text-sm px-2 py-1 outline-none w-full rounded-sm transition'
                        placeholder='Search'
                    />
                </div>
                <div className='flex space-x-2 items-center'>
                    <div className='flex space-x-4'>
                        {
                            HEADER_ITEMS.map((item) => (
                                <HeaderIcon
                                    Icon={item.icon}
                                    key={item.name}
                                />
                            ))
                        }

                    </div>
                    <button className="bg-[#4697cd] py-1 px-6 h-4/5 text-white active:scale-95 transform transition disabled:bg-opacity-50 disabled:scale-100 rounded text-sm font-semibold }">
                        Logout
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Header
