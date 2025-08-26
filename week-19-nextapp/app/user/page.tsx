
import axios from 'axios';
// bad approach because it will run on client that is on browser
export default async function User() {
    const response = await axios.get('http://localhost:3000/api/v1/details')
    const data = await response.data
    console.log(data)

    await new Promise((resolve,reject)=>{
        if(resolve){

            setTimeout(resolve,5000)
        }else if(reject){
            return reject
        }
    }).then()

    return (
        <div>
            {data.name}<br/>
            {data.email}
        </div>
    )
}

