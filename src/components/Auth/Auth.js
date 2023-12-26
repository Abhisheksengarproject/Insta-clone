import React, { useMemo } from 'react'
import Lottie from 'react-lottie-player'
import LoginAnimation from "../../../public/assets/animations/login.json"
import useForm from '../../hooks/useForm'
import { AiFillFacebook } from "react-icons/ai";

const Auth = () => {

  const { form, onChangeHandler } = useForm({
    email: '',
    password: ''
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(form);
  }

  const isDisabled = useMemo(() => {
    return !Object.values(form).every((val) => !!val)

  }, [form])

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-[#FAFAFA]'>
      <div className='flex h-4/5 w-4/5'>
        <div className='w-full h-full'>
          <Lottie
            play
            loop
            animationData={LoginAnimation}
            className="w-full h-full"
          />
        </div>
        <div className='w-full flex flex-col space-y-5 '>
          <div className='w-full bg-white border border-gray-300 flex flex-col space-y-5 p-10'>
            <form onSubmit={submitHandler} className='flex flex-col items-center space-y-5'>
              <div className='tracking-wider text-5xl my-5'>Instagram</div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={form.email}
                onChange={onChangeHandler}
                className='bg-gray-100 hover:bg-transparent focus:bg-transparent border placeholder:text-sm px-2 py-1 outline-none w-full rounded-sm focus:border-gray-400'
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={onChangeHandler}
                value={form.password}
                className='bg-gray-100 hover:bg-transparent focus:bg-transparent border placeholder:text-sm px-2 py-1 outline-none w-full rounded-sm focus:border-gray-400'
              />
              <button type="submit" disabled={isDisabled} className="bg-[#4cb5f9] py-2 px-6 text-white active:scale-95 transform transition disabled:bg-opacity-50 disabled:scale-100 rounded text-sm font-semibold} w-full">
                Log In
              </button>
            </form>
            <div className='w-full flex items-center justify-center my-5 space-x-2'>
              <div className='h-[0.8px] w-full bg-slate-400' />
              <div className='text-gray-400 font-semibold text-center text-sm'>OR</div>
              <div className='h-[0.8px] w-full bg-slate-400' />
            </div>
            <div className='w-full text-center text-indigo-900 flex items-center justify-center'>
              <AiFillFacebook className='inline-block text-2xl mr-2' />
              <span className='font-semibold text-sm'>Log in with facebook</span>
            </div>
            <div className='w-full text-xs text-center text-indigo-900 flex items-center justify-center'>Forgot Password?</div>
          </div>
          <div className='w-full bg-white border text-sm border-gray-300 space-y-5 py-5 text-center'>
            Don&apos;t have an account?
            <span className='text-blue-600 inline-block ml-2 font-semibold'>Sign up</span> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth

