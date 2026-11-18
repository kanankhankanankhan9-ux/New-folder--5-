import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from 'react-router-dom'
import axios from "axios";


function Login() {
  const [email,setEmail]= useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()


  const setBackendData = async () =>{
    const {data} = await axios.post('http://localhost:5000/Login',{email,password})
    toast(data.msg);
    console.log(data);
    if(data.success){
      navigate('/Product')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 p-6">

      <div
        
        className="w-full max-w-sm bg-white/5 border border-white/10 rounded-3xl p-8"
      >

        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome Back
        </h1>
        <Toaster/>

        <p className="text-gray-400 mb-6">
          Login to your account.
        </p>

        <input
          type="email"
          value={email}
          onChange={(e) =>setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-xl bg-white/10 border border-white/20 text-white"
          
         
        />

        <input
          type="password"
          value={password}
          onChange={(e) =>setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-3 mb-5 rounded-xl bg-white/10 border border-white/20 text-white"
      
      
        />

        <button
          type="submit"
          onClick={setBackendData}
          className="w-full p-3 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700"
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;
