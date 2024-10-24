import {motion} from "framer-motion";
import Input from "../components/Input";
import { KeyRound, Loader, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordMeter from "../components/PasswordMeter";
import { useAuthStore } from "../store/authStore";

const SignUpPage = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signup, error, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await signup(email, password, name);
      navigate("/verify-email");

    }catch (error) {
      console.log(error)

    }
  }
  return (
    <motion.div
        initial={{ opacity: 0, y: 20}}
        animate={{ opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        className='max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'>
        
        <div className="p-8">
            <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent'
            style={{ fontFamily: "Poppins-Bold, sans-serif" }}>
              Create Account
            </h2>

            <form onSubmit={handleSignUp}>
            <Input
              style={{ fontFamily: "Poppins-Regular, sans-serif" }}
              icon={User}
              type='text'
              placeholder='Full Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              style={{ fontFamily: "Poppins-Regular, sans-serif" }}
              icon={Mail}
              type='email'
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
            {error && <p className="text-red-500 font-semibold mt-2 ">{error}</p>}
            <PasswordMeter password={password}/>

            <motion.button
              className='mt-5 w-full py-3 px-4 bg-gradient-to-r
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

              {isLoading ? <Loader className=" animate-spin mx-auto size={24}"
              style={{ fontFamily: "Poppins-Regular, sans-serif" }}
                
              /> : "Sign Up"}


            </motion.button>
            </form>
        </div>
        <div className="px-8 py-4 bg-gray-700 
        bg-opacity-50 
        flex justify-center
        ">
        <p className="text-sm text-gray-400">
          Already have an account?{" "} 
          <Link to={"/login"} className="text-red-500 hover:underline">
            Login
          </Link>
        </p>

        </div>
        </motion.div>
  );
};

export default SignUpPage