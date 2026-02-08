import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


function Login() {
   const baseurl =process.env.REACT_APP_BASEURL 
    const [name, setname] = useState('')
    const [password, setpassword] = useState('')
    const [data, setdata] = useState([])
    const [show, setshow] = useState(false)





    const Submit=(e)=>{
        e.preventDefault()
        
        console.log(name,password)

        login();
        setshow(true)
    }

    const login=async()=>{
       console.log(baseurl)
        await axios.post(`${baseurl}/ecgst/user/login`,{user_name:name,password:password})
        .then(res=>{setdata([res.data]);
                    console.log(res.data)})
        .catch(err=>console.log(err.message))
      
    }

    const cancel = ()=>{
        setshow(false)
        setname('')
        setpassword("")
    }
   
  return (
    <div>
        
       {!show && (

        <>
        <h2>LOGIN</h2>
        <form onSubmit={Submit}>
            <label>Email : </label>
            <input type="email" required placeholder='Enter email' value={name} onChange={(e)=>setname(e.target.value)} /> <br /> <br />

            <label>Password : </label>
            <input type="password" required placeholder='Enter Password' value={password} onChange={(e)=>setpassword(e.target.value)} /> <br /> <br />

             <input type="submit" value={"Submit"} />   
        </form>

        <button><Link to={'/ForgotPassword'}>Forget Password</Link></button> <br /> <br />

        <button><Link to={'/Signup'}>Signup</Link></button>
        </>
        )
        }




            {data&& show && (

                data.map(user=>(
                    <div key={user}>
                       <h2>{user.message}</h2>
                        <p><strong>Person name :</strong> {user.profile.person_name}</p>
                        <p><strong>Business :</strong> {user.profile.bussiness_name}</p>
                         <p><strong>Email :</strong> {user.profile.email}</p>
                         <p><strong>Username :</strong> {user.profile.user_name}</p>
                      <p><strong>Phone :</strong> {user.profile.phone_number}</p>
                      <p><strong>Country :</strong> {user.profile.country}</p>
                     <p><strong>Currency :</strong> {user.profile.currency}</p>

                     <button onClick={cancel}>Cancel</button>
                    </div>
                ))
            )}

    </div>
  )
}

export default Login