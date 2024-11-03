import { useState } from "react";
import { Avatar } from 'flowbite-react';
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { FaSun, FaMoon, FaSignOutAlt, FaChevronDown } from 'react-icons/fa'; 
import backgroundImage from '../assets/background_aq.png';
import FloatingShape from "../components/FloatingShape";
import Navbar from "../components/Navbar";
import mlengineer from "../assets/gm_ID.jpg";
import backend from "../assets/rcmd_ID.jpg";
import frontend from "../assets/arn_ID.png";
import findfreshnessImage from '../assets/fish-eyes-body.png';
import featuresImage from '../assets/cnn.png';
import fishImage from '../assets/fishimage.png';
import Footer from "../components/Footer";

// First, add this CSS animation at the top of your file or in your CSS file
const sparkleKeyframes = `
  @keyframes sparkle {
    0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
    50% { opacity: 1; transform: scale(1.5) rotate(180deg); }
  }
`;

const HomePage = () => {
  const { logout } = useAuthStore(); 
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const handleCNNClick = () => {
    setShowModal(true);
  };
  const handleLogout = () => {
    logout();
  };

  const closeModal = () => {
    setShowModal(false);
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
      <style>{sparkleKeyframes}</style>
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
            transition: "background-color 0.7s, color 0.7s", }}
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
              onClick={handleCNNClick}
 
            >
              Cool! What is CNN?
            </motion.button>
            {showModal && (
              <motion.div
                className="fixed inset-0 bg-opacity-50 flex justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="bg-white p-6 rounded-xl shadow-lg relative"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                >
                  <h2
                    className="text-xl font-bold mb-4"
                    style={{
                      fontFamily: "Poppins-Bold, sans-serif",
                      color: "#000000",
                      textAlign: "center",
                      transition: "color 0.5s",
                    }}
                  >
                    What is a Convolutional Neural Network (CNN)?
                  </h2>
                  <p
                    style={{
                      fontFamily: "Poppins-Medium, sans-serif",
                      color: "#000000",
                      fontSize: "14px",
                      textAlign: "justify",
                      transition: "color 0.5s",
                    }}
                  >
                    A <b>Convolutional Neural Network (CNN)</b> is a neural network designed to process visual imagery, inspired by the human visual cortex. CNNs are used in image and video recognition, object detection, and image segmentation.
                  </p>
                  <div
                    className="absolute top-2 right-2 cursor-pointer text-3xl font-bold"
                    style={{
                      color: "#000000",
                      transition: "color 0.5s",
                    }}
                    onClick={closeModal}
                    onMouseEnter={(e) => e.target.style.color = '#b30000'}
                    onMouseLeave={(e) => e.target.style.color = '#000000'}
                  >
                    &times;
                  </div>
                </motion.div>
              </motion.div>
            )}
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
              onClick={() => window.location.href = '/scan'}
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
                <div className="flex flex-wrap gap-8">
                  <div className="flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 rounded-full blur-lg transform scale-110"
                           style={{ 
                             background: isDarkMode 
                               ? 'linear-gradient(to right, #ef4444, #ef4444)' 
                               : 'linear-gradient(to right, #ff0000, #b30000)'
                           }}
                      />
                      {/* Increased number of Sparkle elements */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                        {[...Array(24)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-3 h-3 transform rotate-45"
                            style={{
                              top: `${Math.random() * 120 - 10}%`, // Extended range for more spread
                              left: `${Math.random() * 120 - 10}%`,
                              background: '#ff0000',
                              animation: `sparkle ${0.5 + Math.random() * 1}s ease-in-out ${Math.random() * 0.5}s infinite`,
                              boxShadow: '0 0 15px rgba(255,0,0,0.9)', // Increased glow
                            }}
                          />
                        ))}
                        {/* Additional smaller sparkles */}
                        {[...Array(16)].map((_, i) => (
                          <div
                            key={`small-${i}`}
                            className="absolute w-2 h-2 transform rotate-45"
                            style={{
                              top: `${Math.random() * 120 - 10}%`,
                              left: `${Math.random() * 120 - 10}%`,
                              background: '#ff6666', // Lighter red for variety
                              animation: `sparkle ${0.3 + Math.random() * 0.7}s ease-in-out ${Math.random() * 0.5}s infinite`,
                              boxShadow: '0 0 12px rgba(255,102,102,0.9)',
                            }}
                          />
                        ))}
                      </div>
                      <Avatar
                        img={mlengineer}
                        alt="ML Engineer"
                        rounded
                        size="lg"
                        style={{ width: '120px', height: '120px', position: 'relative', zIndex: 1 }}
                      />
                    </motion.div>
                    <p className="mt-8 text-sm font-semibold" style={{ 
                      color: isDarkMode ? '#D1D5DB' : '#b30000',
                      fontFamily: "Poppins-Medium, sans-serif"
                    }}>
                      ML Engineer
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 rounded-full blur-lg transform scale-110"
                           style={{ 
                             background: isDarkMode 
                               ? 'linear-gradient(to right, #ef4444, #ef4444)' 
                               : 'linear-gradient(to right, #ff0000, #b30000)'
                           }}
                      />
                      {/* Increased number of Sparkle elements */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                        {[...Array(24)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-3 h-3 transform rotate-45"
                            style={{
                              top: `${Math.random() * 120 - 10}%`, // Extended range for more spread
                              left: `${Math.random() * 120 - 10}%`,
                              background: '#ff0000',
                              animation: `sparkle ${0.5 + Math.random() * 1}s ease-in-out ${Math.random() * 0.5}s infinite`,
                              boxShadow: '0 0 15px rgba(255,0,0,0.9)', // Increased glow
                            }}
                          />
                        ))}
                        {/* Additional smaller sparkles */}
                        {[...Array(16)].map((_, i) => (
                          <div
                            key={`small-${i}`}
                            className="absolute w-2 h-2 transform rotate-45"
                            style={{
                              top: `${Math.random() * 120 - 10}%`,
                              left: `${Math.random() * 120 - 10}%`,
                              background: '#ff6666', // Lighter red for variety
                              animation: `sparkle ${0.3 + Math.random() * 0.7}s ease-in-out ${Math.random() * 0.5}s infinite`,
                              boxShadow: '0 0 12px rgba(255,102,102,0.9)',
                            }}
                          />
                        ))}
                      </div>
                      <Avatar
                        img={frontend}
                        alt="Frontend Engineer"
                        rounded
                        size="lg"
                        style={{ width: '120px', height: '120px', position: 'relative', zIndex: 1 }}
                      />
                    </motion.div>
                    <p className="mt-8 text-sm font-semibold" style={{ 
                      color: isDarkMode ? '#D1D5DB' : '#b30000',
                      fontFamily: "Poppins-Medium, sans-serif"
                    }}>
                      Frontend Developer
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 rounded-full blur-lg transform scale-110"
                           style={{ 
                             background: isDarkMode 
                               ? 'linear-gradient(to right, #ef4444, #ef4444)' 
                               : 'linear-gradient(to right, #ff0000, #b30000)'
                           }}
                      />
                      {/* Increased number of Sparkle elements */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                        {[...Array(24)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-3 h-3 transform rotate-45"
                            style={{
                              top: `${Math.random() * 120 - 10}%`, // Extended range for more spread
                              left: `${Math.random() * 120 - 10}%`,
                              background: '#ff0000',
                              animation: `sparkle ${0.5 + Math.random() * 1}s ease-in-out ${Math.random() * 0.5}s infinite`,
                              boxShadow: '0 0 15px rgba(255,0,0,0.9)', // Increased glow
                            }}
                          />
                        ))}
                        {/* Additional smaller sparkles */}
                        {[...Array(16)].map((_, i) => (
                          <div
                            key={`small-${i}`}
                            className="absolute w-2 h-2 transform rotate-45"
                            style={{
                              top: `${Math.random() * 120 - 10}%`,
                              left: `${Math.random() * 120 - 10}%`,
                              background: '#ff6666', // Lighter red for variety
                              animation: `sparkle ${0.3 + Math.random() * 0.7}s ease-in-out ${Math.random() * 0.5}s infinite`,
                              boxShadow: '0 0 12px rgba(255,102,102,0.9)',
                            }}
                          />
                        ))}
                      </div>
                      <Avatar
                        img={backend}
                        alt="Backend Engineer"
                        rounded
                        size="lg"
                        style={{ width: '120px', height: '120px', position: 'relative', zIndex: 1 }}
                      />
                    </motion.div>
                    <p className="mt-8 text-sm font-semibold" style={{ 
                      color: isDarkMode ? '#D1D5DB' : '#b30000',
                      fontFamily: "Poppins-Medium, sans-serif"
                    }}>
                      Backend Developer
                    </p>
                  </div>
                </div>
              </div>


              <div className="absolute right-[-33%] top-[37%] transform -translate-y-1/2">
                <img
                  src={fishImage}
                  alt="Fish Image"
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
