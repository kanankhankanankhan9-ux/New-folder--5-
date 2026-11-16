import { useState } from "react";
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

function Signup() {
  const [fName, setFname] = useState('')
  const [email, setEmail] = useState('')
  const [image, setImage] = useState(null)
  const [password, setPassword] = useState('')


  const setBackendData = async () => {
    axios.post('http://localhost:5000/Signup', { fName, email, password })
    toast.success('Account Successful !')
    setFname('')
    setEmail('')
    setPassword('')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 p-6">

      <div

        className="w-full max-w-sm bg-white/5 border border-white/10 rounded-3xl p-8"
      >
        <Toaster />

        <h1 className="text-3xl font-bold text-white mb-2">
          Create Account
        </h1>

        <p className="text-gray-400 mb-6">
          Sign up to get started.
        </p>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full p-3 mb-4 rounded-xl bg-white/10 border border-white/20 text-white"
        />

        <input
          type="email"
          placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded-xl bg-white/10 border border-white/20 text-white"


        />

        <input
          type="password"
          placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-5 rounded-xl bg-white/10 border border-white/20 text-white"

        />

        <button
          type="submit"
          onClick={setBackendData}
          className="w-full p-3 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700"
        >
          Sign Up
        </button>

      </div>
    </div>
  );
}

export default Signup
