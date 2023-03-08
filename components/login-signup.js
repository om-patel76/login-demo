import React, { useState } from "react";

function Login() {
  const [Email, setEmail] = useState("")
  const[Password, setPassword] = useState("")
  const[Datainput, setDatainput]=useState("")
  const submitThis=()=> {
    const info ={Email:Email, Password:Password}
    setDatainput([info])

  }

  return (
    <div className="bg-black">
      <form className="flex flex-col w-screen h-screen items-center justify-center" onSubmit={submitThis}>
        <h1 className="text-[#787A91] flex justify-center mb-12 ">Log into our app</h1>
        <div className="emial-sec py-4">
          <input
            type="email"
            className="bg-transparent border-b-2 border-b-[#787A91] outline-none w-56"
            placeholder="Email" value={Email} onChange ={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="password-sec py-4">
          <input
            type="password"
            className="bg-transparent border-b-2 border-b-[#787A91] outline-none w-56"
            placeholder="password" value={Password} onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="submit-btn">
          <button type="submit" className="bg-[#787A91] w-56 mt-1 py-1">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
