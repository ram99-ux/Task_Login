import React from 'react'
import axios from 'axios'
import { useState ,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {

  const navigate = useNavigate()
 const baseurl =process.env.REACT_APP_BASEURL
   const [captcha, setCaptcha] = useState("")
  const [captchaToken, setCaptchaToken] = useState("")

  const [form, setForm] = useState({
    bussiness_name:"",
    person_name:"",
    phone_number:"",
    email:"",
    password:"",
    terms_condition:false,
    captcha:""
  })
   useEffect(() => {
    axios.get(`${baseurl}/ecgst/user/captcha?captcha_type=easy`)
    
      .then(res => {
        setCaptcha(res.data.captcha)
        setCaptchaToken(res.data.captcha_token)
      })
        .catch(err=>err.message)
  },[])

  const submit=(e)=>{
        e.preventDefault();
        console.log(form)
        post()
  }

  const post=async()=>{
    try {
      await axios.post(`${baseurl}/ecgst/user/register`,
        form,
        { headers:{ Authorization:`Bearer ${captchaToken}` } }
      );
      alert("Registered successfully")
      navigate('/')
    } catch (err) {
      alert("Register fail")
      console.log(err.message)
    }
  }


  
  return (
    <div>
       <form onSubmit={submit}>
      <h2>Register</h2>

      <input placeholder="Business Name" value={form.bussiness_name} onChange={e=>setForm({...form,bussiness_name:e.target.value})}/>
      <input placeholder="Person Name" value={form.person_name} onChange={e=>setForm({...form,person_name:e.target.value})}/>
      <input placeholder="Phone" value={form.phone_number} onChange={e=>setForm({...form,phone_number:e.target.value})}/>
      <input placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
      <input type="password" value={form.password} placeholder="Password" onChange={e=>setForm({...form,password:e.target.value})}/>

      <p>Captcha: <b>{captcha}</b></p>
      <input placeholder="Enter Captcha" value={form.captcha} onChange={e=>setForm({...form,captcha:e.target.value})}/>

      <label>
        <input type="checkbox" checked={form.terms_condition} onChange={e=>setForm({...form,terms_condition:e.target.checked})}/>
        Accept terms
      </label>

      <button>Register</button>
    </form>
     
    </div>
  )
}

export default Register