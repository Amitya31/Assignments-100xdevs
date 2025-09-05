'use client'
import axios from "axios"

export default function signin(){
    
    return (
        <div>
            <input></input>
            <input></input>
            <button onClick={async ()=>{
                const res = await axios.post('http://localhost:3000/api/sigin',{
                    username:'ama',
                    password:'asdsda'
                }) 
                console.log(res.data.token)
                const token = localStorage.setItem('token',res.data.token)
            }}>Submit</button>
            
        </div>
    )
}