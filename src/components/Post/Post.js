import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBookmark, BsEmojiSmile } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoShareOutline } from 'react-icons/io5';

const Post = ({ postIndex }) => {
    return (
        <div className='flex flex-col w-full border border-gray-200'>
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
                    <div>
                        <AiOutlineHeart
                            size={23}
                            className='text-black cursor-pointer hover:text-black/50'
                        />
                    </div>
                    <div>
                        <FaRegComment
                            size={23}
                            className='text-black cursor-pointer hover:text-black/50'
                        />
                    </div>
                    <div>
                        <IoShareOutline
                            size={23}
                            className='text-black cursor-pointer hover:text-black/50'
                        />
                    </div>
                </div>
                <div>
                    <BsBookmark
                        size={23}
                        className='text-black cursor-pointer hover:text-black/50'
                    />
                </div>
            </div>
            <div className='px-2'>
                100 likes
            </div>
            <div className='p-2'>
                <div className='flex flex-col space-y-1'>
                    {
                        new Array(3).fill(0).map((_, i) => (
                            <div key={i} className='flex space-x-2'>
                                <div className='font-medium'>username</div>
                                <div>comment{i + 1}</div>
                            </div>
                        ))}
                </div>
            </div>
            <div className='px-2'>3 hours ago</div>
            <div className='flex px-2 py-4 mt-1 items-center space-x-3 border-t border-gray-200'>
                <div>
                    <BsEmojiSmile className='text-xl' />
                </div>
                <form onSubmit={(e) => e.preventDefault()} className='w-full flex px-2 '>
                    <div className='w-full'>
                        <input
                            type='text'
                            name={`comment ${postIndex}`}
                            id={`comment ${postIndex}`}
                            className='w-full outline-none bg-white'
                            placeholder='Add a comment...'
                        />
                    </div>
                    <div>
                        <button className='font-semibold text-blue-600 text-sm'>
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Post
