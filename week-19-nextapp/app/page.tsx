'use client'
import Link from 'next/link'
import {  useRouter } from 'next/navigation'
import React from 'react'


export default function Home() {
  const router = useRouter();
  return (
    <div className='text-lg w-screen h-screen flex justify-center items-center'>

      <div className='text-center flex gap-5'>
        <button onClick={()=>{
          router.push("/signup")
        }}>
          Signup
        </button>
        <Link className='border border-black p-2 rounded-full' href='/user'>Go to user Page</Link>
        <br/>
        <Link className='border border-black p-2 rounded-full' href='/signin'>Go to Sign In Page</Link>
      </div>
    </div>
  )
}
