
import { useState } from "react"
import axios from "axios"
import {useNavigate } from "react-router-dom"
function ForgotPassword() {
    const navigate = useNavigate()
     const baseurl =process.env.REACT_APP_BASEURL  
  const [email, setEmail] = useState("")

  const sendOtp =async () => {
    await axios.post(`${baseurl}/ecgst/user/forgotreset?forgot_type=password&call_type=sendmail`,{ email })
    alert("OTP sent");
    navigate('/ResetPassword')

  };

  return (
    <div>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <button onClick={sendOtp}>Send OTP</button>
    </div>
  );
}

export default ForgotPassword;
