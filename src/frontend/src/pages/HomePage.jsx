import { useState } from "react";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { FaSun, FaMoon, FaSignOutAlt, FaChevronDown } from 'react-icons/fa'; 
import { useNavigate } from "react-router-dom"; 
import backgroundImage from '../assets/background_aq.png';
import FloatingShape from "../components/FloatingShape";
import Navbar from "../components/Navbar";
import findfreshnessImage from '../assets/fish-eyes-body.png';
import featuresImage from '../assets/cnn.png';
import fishImage from '../assets/fishimage.png';
import Footer from "../components/Footer";

const HomePage = () => {
  const navigate = useNavigate();
  const { logout } = useAuthStore(); 
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const handleLogout = () => {
    logout();
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const lightModeColor = "#EBCACA";
  const lightModeColorforText = "#D23B3B";
  const darkModeColorforText = "#D1D5DB";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className={isDarkMode ? "dark" : "light"}
      style={{
        minHeight: '100vh',
        backgroundColor: isDarkMode ? 'black' : 'white', 
        
      }}
    >
      <Navbar isDarkMode={isDarkMode} />

      
      <div className="fixed bottom-4 right-4 flex items-center space-x-4 z-50">
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogout}
          className="p-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full shadow-lg hover:from-red-600 hover:to-gray-700 focus:ring-offset-2 focus:ring-offset-gray-900"
          
        >
          <FaSignOutAlt className="text-xl" />
        </motion.button>

        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTheme}
          className="p-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full shadow-lg hover:from-red-600 hover:to-gray-700 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
        </motion.button>
      </div>

      <div className="pt-20">
        <FloatingShape color={isDarkMode ? 'bg-white' : 'bg-[#EBCACA]'} size='w-48 h-48' top='0%' left='60%' delay={0.8} />
        <FloatingShape color={isDarkMode ? 'bg-red-300' : 'bg-[#EBCACA]'} size='w-40 h-40' top='10%' left='80%' delay={0.8} />
        <FloatingShape color={isDarkMode ? 'bg-red-500' : 'bg-[#EBCACA]'} size='w-40 h-40' top='10%' left='0%' delay={0.8} />

        <div
          className={`min-h-screen flex flex-col items-center justify-center ${isDarkMode ? "bg-black" : "bg-white"}`}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "65%",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            minHeight: '100vh', 
            transition: "background-color 0.5s, color 0.5s",
          }}
        >
          <p
            className="text-md font-semibold text-center"
            style={{
              position: 'absolute',
              top: '10.5%',
              left: '35%',
              color: isDarkMode ? "#D6D6D6" : "#b30000",
              fontFamily: "Atype-Medium, sans-serif",
              marginBottom: '0.5rem',
              transition: "background-color 0.5s, color 0.5s",
            }}
          >
            Your Trusted Freshness Checker
          </p>
          <h2
            className="text-6xl font-bold m-2 text-center shining-text"
            style={{
              fontFamily: "DirtyLine, sans-serif",
              fontSize: "10rem",
              color: isDarkMode ? "#b30000" : "#B30000",
              transition: "background-color 0.5s, color 0.5s",
            }}
          >
            <span>A</span>
            <span
              style={{
                fontFamily: "Atype-Medium, sans-serif",
                fontSize: "8rem",
                color: isDarkMode ? "white" : "#4a0404",
                transition: "background-color 0.5s, color 0.5s",
              }}
            >
              quagrade.
            </span>
          </h2>

          <p
            className="text-md font-semibold"
            style={{
              position: 'absolute',
              top: '13.7%',
              right: '28.6%',
              color: isDarkMode ? "#D6D6D6" : "#b30000",
              fontFamily: "Atype-Medium, sans-serif",
              marginBottom: '0.5rem',
              transition: "background-color 0.5s, color 0.5s",
            }}
          >
            for Galunggong, Bangus, and Tilapia
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 py-4 px-10 bg-red-800 text-white font-bold text-lg rounded-full shadow-lg hover:bg-red-700 transition duration-300"
            style={{ backgroundColor: '#b30000',
            transition: "background-color 0.5s, color 0.5s",}}
          >
            GET STARTED
          </motion.button>

          <FaChevronDown
            className={`mt-8 text-2xl animate-bounce ${
              isDarkMode ? "text-white" : "text-[#4a0404]"
            }`}
          />
        </div>

        
        <div
          className={`relative min-h-screen flex flex-col md:flex-row justify-center items-center px-6 ${isDarkMode ? "bg-black" : "bg-white"}`}
        >
          <FloatingShape color={isDarkMode ? 'bg-red-500' : 'bg-[#EBCACA]'} size='w-40 h-40' top='40%' left='10%' delay={0.5} />
          <FloatingShape color={isDarkMode ? 'bg-gray-300' : 'bg-[#EBCACA]'} size='w-40 h-40' top='10%' left='5%' delay={0.4} />
          <FloatingShape color={isDarkMode ? 'bg-gray-300' : 'bg-[#EBCACA]'} size='w-40 h-40' top='20%' left='80%' delay={0.6} />
          <FloatingShape color={isDarkMode ? 'bg-red-300' : 'bg-[#EBCACA]'} size='w-40 h-40' top='50%' left='30%' delay={0.8} />

          <div
            className="absolute top-[16%] right-[36%] w-[350px] h-[320px] rounded-[40px] z-0"
            style={{ backgroundColor: isDarkMode ? '#1F1D1D' : lightModeColor, opacity: '0.5',
            transition: "background-color 0.7s, color 0.s", }}
          ></div>

          <div
            className="absolute top-[31%] right-[26%] w-[430px] h-[410px] rounded-[40px] z-0"
            style={{ backgroundColor: isDarkMode ? '#1F1D1D' : lightModeColor, opacity: '0.5',
            transition: "background-color 0.7s, color 0.7s",  }}
          ></div>

          <div
            className="absolute top-[23%] right-[17%] w-[430px] h-[400px] rounded-[40px] z-0"
            style={{ backgroundColor: isDarkMode ? '#1F1D1D' : lightModeColor, opacity: '0.5',
            transition: "background-color 0.7s, color 0.7s",  }}
          ></div>

          <div
            className="text-right md:w-1/2 relative z-10"
            style={{
              transform: 'translate(-200px, 30px)',
              maxWidth: '500px',
              paddingLeft: '20px',
              marginLeft: 'auto',
              transition: "background-color 2s, color 2s",
            }}>
            <h2
              className="text-3xl font-bold mb-20"
              style={{
                fontFamily: "Poppins-Bold, sans-serif",
                color: isDarkMode ? "white" : lightModeColorforText,
                transition: "background-color 1.5s, color 1.5s",
              }}
            >
              Features
            </h2>

            <p
              className="text-md mb-6"
              style={{
                fontFamily: "Poppins-Medium, sans-serif",
                color: isDarkMode ? darkModeColorforText : lightModeColorforText,
                transition: "background-color 0.5s, color 0.5s",
              }}
            >
              <span className="font-bold" style={{ color: "#b30000" }}>Aquagrade</span>, trained using a <br /> Convolutional Neural <br />
              Network (CNN), is well-suited <br /> for detecting fish and <br /> assessing their freshness by <br />
              analyzing visual patterns and <br /> features.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-4 px-8 mt-10 bg-red-700 text-white font-bold text-xs rounded-full shadow-lg hover:bg-red-700 transition duration-300"
              style={{
                fontFamily: "Poppins-Medium, sans-serif",
                backgroundColor: '#b30000',
                transition: "background-color 0.5s, color 0.5s",
              }}
              onClick={() => navigate("/cnn")}
            >
              Cool! What is CNN?
            </motion.button>
          </div>

          <motion.div
            className="md:w-1/2 mt-6 md:mt-0 relative z-10 ease-in-out duration-300 flex justify-center items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={featuresImage}
              alt="Features Design"
              className="w-[430px] rounded-lg shadow-lg"
              style={{
                position: 'relative',
                right: '22%',
                marginTop: '30px',
                transition: "background-color 0.5s, color 0.5s",
              }}
            />
          </motion.div>
        </div>

        <div
          className={`relative min-h-screen flex flex-col md:flex-row justify-center items-center px-6 ${isDarkMode ? "bg-black" : "bg-white"}`}
        >
          <FloatingShape color={isDarkMode ? 'bg-gray-800' : 'bg-[#EBCACA]'} size='w-48 h-48' top='15%' left='10%' delay={0.4} />
          <FloatingShape color={isDarkMode ? 'bg-red-800' : 'bg-[#EBCACA]'} size='w-48 h-48' top='15%' left='0%' delay={0.4} />
          <FloatingShape color={isDarkMode ? 'bg-gray-300' : 'bg-[#EBCACA]'} size='w-40 h-40' top='10%' left='60%' delay={0.8} />
          <FloatingShape color={isDarkMode ? 'bg-gray-300' : 'bg-[#EBCACA]'} size='w-40 h-40' top='40%' left='80%' delay={0.8} />

          <div
            className="absolute top-[12%] left-[18%] w-[530px] h-[450px] rounded-[40px] z-0"
            style={{ backgroundColor: isDarkMode ? '#1F1D1D' : lightModeColor, opacity: '0.5',
            transition: "background-color 0.7s, color 0.7s", }}
          ></div>

          <div
            className="absolute top-[20%] left-[14%] w-[495px] h-[450px] rounded-[40px] z-0"
            style={{ backgroundColor: isDarkMode ? '#1F1D1D' : lightModeColor, opacity: '0.5',
            transition: "background-color 0.7s, color 0.7s", }}
          ></div>

          <div
            className="absolute top-[40%] left-[30%] w-[430px] h-[380px] rounded-[40px] z-0"
            style={{ backgroundColor: isDarkMode ? '#1F1D1D' : lightModeColor, opacity: '0.5',
            transition: "background-color 0.7s, color 0.7s",}}
          ></div>

          <motion.div
            className="md:w-1/2 mt-6 md:mt-0 ease-in-out duration-300 relative z-10 flex justify-center items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={findfreshnessImage}
              alt="Freshness Design"
              className="w-[430px] rounded-lg shadow-lg"
              style={{
                position: 'relative',
                marginTop: '30px',
                transition: "background-color 0.7s, color 0.7s",
              }}
            />
          </motion.div>

          <div
            className="text-left md:w-1/2 relative z-10"
            style={{
              transform: 'translate(80px, -50px)',
              maxWidth: '500px',
              paddingRight: '20px',
              transition: "background-color 0.5s, color 0.5s",
            }}
          >
            <h2
              className="text-3xl font-bold mt-[35%] mb-10"
              style={{
                fontFamily: "Poppins-Bold, sans-serif",
                color: isDarkMode ? "white" : "#b30000",
                transition: "background-color 0.7s, color 0.7s",
              }}
            >
              Find <br></br> Freshness!
            </h2>

            <p
              className="text-md mb-6"
              style={{
                fontFamily: "Poppins-Medium, sans-serif",
                color: isDarkMode ? darkModeColorforText : lightModeColorforText,
                transition: "background-color 0.5s, color 0.5s",
              }}
            >
              <span className="font-bold" style={{ color: "#b30000" }}>Aquagrade</span> was trained to <br></br> detect fish freshness by <br></br>analyzing specific body parts <br></br>—namely, the eyes, skin, and <br></br> gills—ensuring precise and <br></br> reliable assessments for <br></br> Galunggong, Bangus, and <br></br> Tilapia.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 py-3 px-12 bg-red-700 text-white font-bold text-sm rounded-full shadow-lg hover:bg-red-700 transition duration-300"
              style={{
                fontFamily: "Poppins-Medium, sans-serif",
                backgroundColor: '#b30000',
                transition: "background-color 0.5s, color 0.5s",
              }}
            >
              Scan!
            </motion.button>
          </div>
        </div>

        <div
          className={`relative min-h-screen flex flex-col items-center justify-center ${isDarkMode ? "bg-black" : "bg-white"} px-6 py-12`}
          style = {{transition: "background-color 0.5s, color 0.5s",}}
        >
          <h2
            className="text-4xl font-bold mb-10"
            style={{
              fontFamily: "Poppins-Bold, sans-serif",
              color: isDarkMode ? "#b30000" : "#b30000",
              transition: "background-color 0.7s, color 0.7s",
            }}
          >
            About Us
          </h2>

          <h2
            className="text-3xl font-bold mb-10"
            style={{
              fontFamily: "Poppins-Bold, sans-serif",
              color: isDarkMode ? "white" : "#b30000",
              position: 'relative',
              transition: "background-color 0.5s, color 0.5s",
            }}
          >
            &nbsp;Developers
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl space-y-6 md:space-y-0 md:space-x-12">
            <div
              className="text-left md:w-1/2 relative z-10"
              style={{
                maxWidth: '500px',
                paddingLeft: '20px',
                color: isDarkMode ? "white" : "#333",
                transition: "background-color 0.5s, color 0.5s",
              }}
            >
              <p
                className="text-xs"
                style={{
                  fontFamily: "Poppins-Medium, sans-serif",
                  color: isDarkMode ? darkModeColorforText : lightModeColorforText,
                  transition: "background-color 0.5s, color 0.5s",
                }}
              >
                Presented as the result of a collaborative effort <br/>
                by a dedicated team of three developers who are <br/>
                passionate about combining technology and <br/>
                sustainability. With expertise in machine learning, <br/> computer vision, and the seafood industry, the <br/>
                team has created a reliable tool for assessing the <br/>freshness of Galunggong, Bangus, and Tilapia, <br/>
                ensuring consumers get the best quality fish.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-start items-start md:w-full relative z-10 space-x-8 pl-16">
              <div className="flex flex-col items-center space-y-2">
                <div
                  className="w-32 h-32 rounded-full bg-red-800"
                  style={{
                    backgroundColor: isDarkMode ? "#b30000" : "#b30000",
                    transition: "background-color 0.5s, color 0.5s",
                  }}
                ></div>
                <p
                  className="text-center"
                  style={{
                    fontSize: "12px",
                    marginTop: "20px",
                    fontFamily: "Poppins-Bold, sans-serif",
                    color: isDarkMode ? "white" : "red",
                    transition: "background-color 0.5s, color 0.5s",
                  }}
                >
                  Frontend
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div
                  className="w-32 h-32 rounded-full bg-red-800"
                  style={{
                    backgroundColor: isDarkMode ? "#b30000" : "#b30000",
                    transition: "background-color 0.5s, color 0.5s",
                  }}
                ></div>
                <p
                  className="text-center"
                  style={{
                    fontSize: "12px",
                    fontFamily: "Poppins-Bold, sans-serif",
                    marginTop: "20px",
                    color: isDarkMode ? "white" : "red",
                    transition: "background-color 0.5s, color 0.5s",
                  }}
                >
                  ML Engineer
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div
                  className="w-32 h-32 rounded-full bg-red-800"
                  style={{
                    backgroundColor: isDarkMode ? "#b30000" : "#b30000",
                    transition: "background-color 0.5s, color 0.5s",
                  }}
                ></div>
                <p
                  className="text-center"
                  style={{
                    fontSize: "12px",
                    fontFamily: "Poppins-Bold, sans-serif",
                    marginTop: "20px",
                    color: isDarkMode ? "white" : "red",
                    transition: "background-color 0.5s, color 0.5s",
                  }}
                >
                  Backend
                </p>
              </div>

              <div className="absolute right-[-33%] top-[37%] transform -translate-y-1/2">
                <img
                  src={fishImage}
                  alt="Backend Developer Image"
                  className="w-80 h-80 object-contain"
                  style={{ right: "200px", maxWidth: '200%', maxHeight: '90%',
                  transition: "background-color 0.5s, color 0.5s",}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer isDarkMode={isDarkMode} />
    </motion.div>
  );
};

export default HomePage;
