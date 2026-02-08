
import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
function ResetPassword() {
        const navigate = useNavigate()
     const baseurl =process.env.REACT_APP_BASEURL 
  const [form, setForm] = useState({
    email:"",
    new_password:"",
    confirmnew_password:"",
    otp:""
  });

  const reset = async () => {
    await axios.post(`${baseurl}/ecgst/user/forgotreset?forgot_type=password&call_type=changepassword`,
      form
    ).catch(err=>console.log(err.message))
    alert("Password reset success")

    navigate('/')
  };

  return (
    <div>
      <input placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
      <input placeholder="OTP" value={form.otp} onChange={e=>setForm({...form,otp:e.target.value})}/>
      <input type="password" value={form.new_password} placeholder="New Password" onChange={e=>setForm({...form,new_password:e.target.value})}/>
      <input type="password" value={form.confirmnew_password} placeholder="Confirm Password" onChange={e=>setForm({...form,confirmnew_password:e.target.value})}/>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default ResetPassword;
