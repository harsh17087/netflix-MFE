import { useRef, useState } from "react"
import Header from "./Header"
import {dataValidate} from "../utils/validate"
import { netflixBg } from "../utils/constants"
import { useNavigate } from "react-router-dom"
const Login=()=>{
    
    const [isSignIn,setIsSignIn] = useState(true)
    const [errorMessage,setErrorMessage] = useState("")
    const email = useRef(null)
    const password = useRef(null)
    const navigate = useNavigate()
    
    const ToggleSignIn=()=>{
        setIsSignIn(!isSignIn)
    }

    const handleSubmitData=()=>{   
        // const msg = dataValidate(email.current.value,password.current.value)
        // setErrorMessage(msg)    
        navigate("/browse")
    }
    
    return (
        <div>
            <Header/>
            <div className="absolute">
                <img className="w-full h-full" src={netflixBg} alt="bg-logo"/>
            </div>
            <div className="absolute bg-black text-white w-4/12 mx-auto right-0 left-0 my-36 rounded-lg bg-opacity-80">
                <form onSubmit={(e)=>e.preventDefault()} className="my-6">
                    <h1 className="font-bold text-3xl m-2 p-2">{isSignIn?"Sign In":"Sign Up"}</h1>
                    {!isSignIn && (<input className="m-4 p-4 rounded-lg w-10/12 bg-gray-600 bg-opacity-50" type="text" placeholder="Full Name"/>)}
                    <input ref={email} className="p-4 m-4 rounded-lg w-10/12 bg-gray-600 bg-opacity-50" type="text" placeholder="E-mail or Phone number"/>
                    <input ref={password} className="m-4 p-4 rounded-lg w-10/12 bg-gray-600 bg-opacity-50" type="password" placeholder="Password"/>
                    <p className="font-bold text-lg p-2 m-2 text-red-700">{errorMessage}</p>
                    <button className="bg-red-700 m-3 p-3 rounded-lg w-10/12" onClick={handleSubmitData} type="submit">{isSignIn?"Sign In":"Sign Up"}</button>
                </form>
                {
                    isSignIn?<p className="text-md m-3 p-3">New to Netflix ? <button type="button" className="font-bold" onClick={ToggleSignIn}>Sign Up now</button></p>:
                    <p className="text-md m-3 p-3">Already a user, <button type="button" className="font-bold" onClick={ToggleSignIn}>Sign In now</button></p>
                }
                </div>
        </div>
    )
}

export default Login