import "../App.css";

import { useState } from "react"
import { motion } from "framer-motion";
import { Mail, KeyRound, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { useAuthStore } from "../store/authStore";


const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, isLoading, error} = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <motion.div
      initial= {{ opacity: 0, y: 20}}
      animate= {{ opacity: 1, y: 0}}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50
      backdrop-filter backdrop-blur-xl rounded-2xl
      shadow-xl overflow-hidden">

      <div className="p-8">
        <h2
        style={{ fontFamily: "Poppins-Bold, sans-serif" }} className="text-3xl font-bold m-6 text-center bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
          Welcome Back
        </h2>

        <form onSubmit={handleLogin}>
            <Input
              style={{ fontFamily: "Poppins-Regular, sans-serif" }} 
              icon={Mail}
              type='text'
              placeholder='Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              style={{ fontFamily: "Poppins-Regular, sans-serif" }} 
              icon={KeyRound}
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex items-center mb-6"
            style={{ fontFamily: "Poppins-Regular, sans-serif" }}>
               
              <Link to='/forgot-password' className="text-sm text-red-600 hover:underline">
              Forgot Password?
              </Link>
            </div>

            {error && <p className="text-red-500 font-semibold mb-2">{error}</p>}
            <motion.button
              style={{ fontFamily: "Poppins-Bold, sans-serif" }} 
              className='mt-4 w-full py-3 px-4 bg-gradient-to-r
              from-red-500 to-red-700 text-white font-bold rounded-lg shadow-lg hover:from-red-500 hover:to-red-600 
              focus:outline-none
              focus:ring-2
              focus:ring-red-400 
              focus:ring-offset-2
              focus:ring-offset-gray-800
              transition duration-200'
              whileHover={{scale: 1.04}}
              whileTap={{scale: 0.9}}
              type='submit'
              disabled={isLoading}>

              {isLoading ? <Loader className = 'w-6 h-6 animate-spin  mx-auto'/>: "Login"}
            </motion.button>
        </form>
      </div>


      <div className="px-8 py-4 bg-gray-700 bg-opacity-50 flex justify-center">
        <p className="text-sm text-gray-400"
        style={{ fontFamily: "Poppins-Regular, sans-serif" }}>
          Don't have an account?{" "} 
          <Link to='/signup' className="text-red-600 hover:underline">Sign Up</Link>
        </p>

      </div>

      </motion.div>
  );
};

export default LoginPage;