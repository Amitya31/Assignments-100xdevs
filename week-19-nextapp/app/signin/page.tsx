'use client'
import axios from "axios"
import React, { useState } from "react"
export default function Signin(){
    const [username,setUsername] = useState<string>('')
    const [password,setPassword] = useState<string>('')

    return <div>
        <label>username</label>
        <input type="text" placeholder="username" onChange={e=>setUsername(e.target.value)}/>
        <label>password</label>
        <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>

        <button onClick={()=>{
            axios.post("http://localhost:3000/api/v1/signin",{
                username,
                password,
            })
        }}>
            Signin
        </button>
    </div>
}