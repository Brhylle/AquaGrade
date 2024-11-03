import { motion } from "framer-motion";
import { FaSun, FaMoon, FaCoffee} from 'react-icons/fa';
import Navbar from "../components/Navbar";
import FloatingShape from "../components/FloatingShape"; 

const TeamPage = ({ isDarkMode, toggleTheme }) => {

  const circleColor = isDarkMode ? "#1F1D1D" : "#C92525";
  const shapeColor = isDarkMode ? "bg-blue-300" : "bg-white";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className={`min-h-[200vh] w-screen flex flex-col items-center justify-center relative
        ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}
      style={{ transition: "background-color 0.5s, color 0.5s", overflowY: "scroll" }}
    >
      {/* Navbar */}
      <Navbar isDarkMode={isDarkMode} />

      <FloatingShape color={shapeColor} size="w-48 h-48" top="5%" left="10%" delay={0.3} />
      <FloatingShape color={shapeColor} size="w-32 h-32" top="50%" left="55%" delay={0.5} />
      <FloatingShape color={shapeColor} size="w-32 h-32" top="40%" left="75%" delay={0.7} />
      <FloatingShape color={shapeColor} size="w-32 h-32" top="40%" left="5%" delay={0.7} />
      <FloatingShape color={shapeColor} size="w-40 h-40" top="10%" left="60%" delay={0.5} />
      <FloatingShape color={shapeColor} size="w-40 h-40" top="10%" left="60%" delay={0.7} />
      <FloatingShape color={shapeColor} size="w-48 h-48" top="60%" left="10%" delay={1.0} />
      <FloatingShape color={shapeColor} size="w-64 h-64" top="80%" left="20%" delay={1.0} />
      <FloatingShape color={shapeColor} size="w-32 h-32" top="60%" left="5%" delay={1.0} />
      <FloatingShape color={shapeColor} size="w-40 h-40" top="70%" left="75%" delay={0.7} />
      <FloatingShape color={shapeColor} size="w-48 h-48" top="100%" left="-10%" delay={0.7} />
      <FloatingShape color={shapeColor} size="w-40 h-40" top="105%" left="75%" delay={0.7} />
      <FloatingShape color={shapeColor} size="w-32 h-32" top="115%" left="5%" delay={0.7} />
      <FloatingShape color={shapeColor} size="w-40 h-40" top="115%" left="65%" delay={0.7} />

      {/* Main Content */}
      <div
        className="w-full flex flex-col items-center justify-center text-center px-4"
        style={{ fontFamily: "Atype-Medium, sans-serif", paddingBottom: "100vh" }} 
      >
      <h1
        className={`text-8xl font-bold mb-10 ${isDarkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-gray-300'}`}
      >
        DEVELOPERS
      </h1>

        <p
          className={`text-sm max-w-2xl mb-40 ${isDarkMode ? 'text-white' : 'text-red-700'}`}
          style={{ fontFamily: "Poppins-Medium, sans-serif" }}
        >
          A dedicated team of developers specializing in machine learning, frontend, backend, and AI technologies.
        </p>
      </div>


      {/* Two Overlapping Circles in the Lower-Left Corner */}
      <div
        className="absolute bottom-[55%] left-[15%] w-48 h-48 rounded-full"
        style={{
          backgroundColor: circleColor, 
          opacity: 0.5,
          zIndex: 1, 
        }}
      ></div>

      <div
        className="absolute bottom-[40%] left-[17%] w-80 h-80 rounded-full"
        style={{
          backgroundColor: circleColor,
          opacity: 0.5,
          zIndex: 1, 
        }}
      ></div>

      {/* Third Circle with Front-End Text */}
      <div
        className="absolute bottom-[48%] left-[24%] w-72 h-72 rounded-full"
        style={{
          backgroundColor: circleColor, 
          opacity: 0.5,
          zIndex: 1, 
        }}
      ></div>

      <div
        className={`absolute bottom-[60%] left-[46%] flex items-center justify-center 
          ${isDarkMode ? 'text-white border-white' : 'text-red-500 border-red-500'}`}
        style={{
          fontFamily: "Poppins-Medium, sans-serif",
          fontSize: "0.7rem", 
          border: "2px solid",
          borderRadius: "9999px", 
          padding: "0.3rem 0.5rem",
          display: "inline-block",
        }}
      >
        Aaron De Leon
      </div>

      <div
        className={`absolute bottom-[54%] left-[46%] ${isDarkMode ? 'text-white' : 'text-red-500'}`}
        style={{
          fontFamily: "Atype-Medium, sans-serif",
          fontSize: "3rem", 
        }}
      >
        FrontEnd Dev
      </div>


      <div
        className={`absolute bottom-[49%] left-[46%] text-left
          ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}
        style={{
          fontFamily: "Poppins-Regular, sans-serif",
          fontSize: "0.7rem", 
          maxWidth: "300px", 
        }}
      >
        Passionate about creating intuitive and responsive user interfaces. Specializes in React and modern frontend frameworks, with a keen eye for design and user experience. Always exploring new ways to enhance web applications.
      </div>

      <div
        className="absolute bottom-[5%] right-[17%] w-80 h-80 rounded-full"
        style={{
          backgroundColor: circleColor, 
          opacity: 0.5,
          zIndex: 1, 
        }}
      ></div>

      <div
        className="absolute bottom-[19%] right-[30%] w-48 h-48 rounded-full"
        style={{
          backgroundColor: circleColor,
          opacity: 0.5,
          zIndex: 1, 
        }}
      ></div>

      {/* Ml Engineer Section */}

      <div
        className={`absolute bottom-[23%] left-[43%] flex items-center justify-center 
          ${isDarkMode ? 'text-white border-white' : 'text-red-500 border-red-500'}`}
        style={{
          fontFamily: "Poppins-Medium, sans-serif",
          fontSize: "0.7rem", 
          border: "2px solid",
          borderRadius: "9999px",
          padding: "0.3rem 0.5rem",
          display: "inline-block",
        }}
      >
        Jheizon Dela Cruz
      </div>
      
      <div
        className={`absolute bottom-[17%] left-[32%] ${isDarkMode ? 'text-white' : 'text-red-500'}`}
        style={{
          fontFamily: "Atype-Medium, sans-serif",
          fontSize: "3rem", 
        }}
      >
        ML-Engineer
      </div>
      
      <div
        className={`absolute bottom-[11%] left-[31%] text-right
          ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}
        style={{
          fontFamily: "Poppins-Medium, sans-serif",
          fontSize: "0.7rem", 
          maxWidth: "300px", 
        }}
      >
        Dedicated to pushing the boundaries of machine learning and AI. Enjoys working with neural networks and developing innovative solutions for complex problems. Constantly learning and implementing cutting-edge ML technologies.
      </div>

      <div
        className="absolute bottom-[3%] right-[27%] w-72 h-72 rounded-full"
        style={{
          backgroundColor: circleColor, 
          opacity: 0.5,
          zIndex: 1,
        }}
      ></div>

      <div
        className="absolute bottom-[-23%] left-[17%] w-80 h-80 rounded-full"
        style={{
          backgroundColor: circleColor, 
          opacity: 0.5,
          zIndex: 1, 
        }}
      ></div>

      {/* For backend section */}
  
      <div
        className={`absolute bottom-[-9%] left-[44%] flex items-center justify-center 
          ${isDarkMode ? 'text-white border-white' : 'text-red-500 border-red-500'}`}
        style={{
          fontFamily: "Poppins-Medium, sans-serif",
          fontSize: "0.7rem", 
          border: "2px solid",
          borderRadius: "9999px",
          padding: "0.3rem 0.5rem",
          display: "inline-block",
        }}
      >
        Ritchmond Tajarros
      </div>

      <div
        className={`absolute bottom-[-16%] left-[44%] ${isDarkMode ? 'text-white' : 'text-red-500'}`} 
        style={{
          fontFamily: "Atype-Medium, sans-serif",
          fontSize: "3rem", 

        }}
      >
        BackEnd Dev
      </div>

      <div
        className={`absolute bottom-[-22%] left-[44%] text-left
          ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}
        style={{
          fontFamily: "Poppins-Medium, sans-serif",
          fontSize: "0.7rem", 
          maxWidth: "300px", 
        }}
      >
        Expert in building robust and scalable backend systems. Passionate about API design, database optimization, and server architecture. Loves solving complex backend challenges and ensuring smooth data flow throughout applications.
      </div>
    
      <div
        className="absolute bottom-[-50%] left-[24%] w-32 h-32"
      ></div>

            <div
        className={`absolute bottom-[-22%] left-[44%] text-left
          ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}
        style={{
          fontFamily: "Poppins-Medium, sans-serif",
          fontSize: "0.7rem", 
          maxWidth: "300px", 
        }}
      >
      </div>
    
      <div
        className="absolute bottom-[-30%] left-[24%] w-64 h-64 rounded-full"
        style={{
          backgroundColor: circleColor, 
          opacity: 0.5,
          zIndex: 1, 
        }}
      ></div>

      {/* Buy Us a Coffee Section */}
      <div className="fixed bottom-4 right-[5%] flex items-center z-50 group"  
        style={{ fontFamily: "Poppins-Regular, sans-serif" }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full shadow-lg hover:from-red-600 hover:to-gray-700 transition duration-300 flex items-center justify-center relative"
        >
          <FaCoffee className="text-lg" />

          
          <span
            className="absolute opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-0 transition-all duration-300 text-xs bg-red-600 text-white p-2 rounded-lg -top-10 whitespace-nowrap"
            style={{ fontFamily: "Poppins-Medium, sans-serif" }}
          >
            Buy Us A Coffee?
          </span>
        </motion.div>
      </div>


      {/* Toggle Theme Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 p-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full shadow-lg hover:from-red-600 hover:to-gray-700 focus:ring-offset-2 focus:ring-offset-gray-900 z-50"
      >
        {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
      </motion.button>


    </motion.div>
  );
};



export default TeamPage;
