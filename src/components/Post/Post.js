import React from 'react'
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const Post = () => {
    return (
        <div className='flex flex-col w-full border-2 border-gray-200 max-h-72'>
            <div className='flex items-center justify-between p-2 w-full '>
                <div className='flex items-center justify-center space-x-2'>
                    <div className='w-10 h-10 bg-black border-2 rounded-full' />
                    <div>Username</div>
                </div>
                <div className='select-none w-4'>
                    <HiOutlineDotsHorizontal className='text-lg' />
                </div>
            </div>
            <div className='aspect-square bg-black w-full h-full'></div>
            <div className='flex justify-between p-2'>
                <div className='flex space-x-2'>
                    <div>like</div>
                    <div>comment</div>
                    <div>share</div>
                </div>
                <div>
                    save
                </div>
            </div>
            <div className='px-2'>
                100 likes
            </div>
            <div>
                {
                    
                }
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Post
