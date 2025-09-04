"use client"
import axios from 'axios'
import React from 'react'
import { useRouter } from 'next/navigation'

function Signup() {
  const [username,setUsername] = React.useState('')
  const [password,setPassword] =  React.useState('')
  const router = useRouter();
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='text-center'>
        <input type='text' placeholder='Enter your email' className="border border-black rounded-md p-2 m-2" value={username} onChange={e=>setUsername(e.target.value)}/>
        <input type='password' placeholder='Enter your password' className="border border-black rounded-md p-2 m-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-500" value={password} onChange={e=>setPassword(e.target.value)}/>
        <button className='border border-black p-2 m-2 rounded-md active:bg-red-200' onClick={()=>{
            axios.post('http://localhost:3000/api/v1/signup',{
                body:{username,
                password}
            })
            router.push('/signin')
        }}>Signup</button>
      </div>
    </div>
  )
}

export default Signup