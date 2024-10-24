import { FaHome, FaSun, FaMoon, FaClock, FaCog, FaSignOutAlt, FaVideo } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 
import { useState, useEffect, useRef } from 'react';
import FloatingShape from '../components/FloatingShape';

const ScanPage = ({ isDarkMode, toggleTheme }) => {
  const navigate = useNavigate();  // Initialize the useNavigate hook
  const shapeColor = isDarkMode ? "bg-white" : "bg-white";
  
  // Define the light mode color
  const lightModeColorFirst = 'rgba(235, 202, 202, 1)';
  const lightModeColorSecond = 'rgba(235, 202, 202, 0.5)';
  const lightModeColorThird = 'rgba(235, 202, 202, 0.4)';
  
  // State for popup visibility and webcam stream
  const [isPopupVisible, setPopupVisible] = useState(false);
  const videoRef = useRef(null);

  // Function to open the popup and access webcam
  const openPopup = () => {
    setPopupVisible(true);
    // Access webcam when popup is opened
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;  // Set the video stream to the video element
        }
      })
      .catch(err => {
        console.error("Error accessing webcam:", err);
      });
  };

  // Function to close the popup and stop webcam
  const closePopup = () => {
    setPopupVisible(false);
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());  // Stop the webcam stream when popup is closed
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className={`min-h-screen w-screen flex ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} relative`}
      style={{ transition: 'background-color 0.5s, color 0.5s', overflowY: 'scroll' }}
    >

      <FloatingShape color={shapeColor} size="w-48 h-48" top="5%" left="14%" delay={0.3} />
      <FloatingShape color={shapeColor} size="w-32 h-32" top="50%" left="55%" delay={0.5} />
      <FloatingShape color={shapeColor} size="w-32 h-32" top="40%" left="75%" delay={0.7} />
      <FloatingShape color={shapeColor} size="w-32 h-32" top="40%" left="5%" delay={0.7} />
      <FloatingShape color={shapeColor} size="w-40 h-40" top="10%" left="60%" delay={0.5} />
      <FloatingShape color={shapeColor} size="w-40 h-40" top="20%" left="60%" delay={0.7} />
      <FloatingShape color={shapeColor} size="w-48 h-48" top="60%" left="10%" delay={1.0} />
      <FloatingShape color={shapeColor} size="w-32 h-32" top="60%" left="5%" delay={1.0} />
      <FloatingShape color={shapeColor} size="w-40 h-40" top="70%" left="75%" delay={0.7} />
      
      {/* Left Sidebar */}
      <div className="flex flex-col w-1/4 h-[90vh] p-8">
        {/* Logo */}
        <div className="absolute  top-[33%] left-[22%] flex items-center justify-center mb-12">
          <h1 className="text-4xl font-bold text-red-600"
          style={{fontFamily: "DirtyLine, sans-serif"}}>A</h1> &nbsp;
          <span className="text-white text-xl font-bold"
          style={{
            color: isDarkMode ? 'white' : 'black', 
            fontFamily: "Atype-Medium, sans-serif"}}>quagrade.</span>
        </div>

        {/* Greeting */}
        <div className="mt-4 absolute  top-[39%] left-[15%] mb-12 text-right"
        style={{fontFamily: "Poppins-bold, sans-serif"}}>
          <h2 className="text-5xl font-bold mb-8  ">Hi Aaron!</h2>
          <p className="text-xxs text-gray-400"
          style={{fontFamily: "Poppins-Medium, sans-serif"}}>
            This dashboard offers an overview of fish <br> 
            </br> grading, freshness scans, and reports, all in <br></br> one place.
          </p>
        </div>

        {/* Navigation Icons */}
        <div className="space-y-8 text-center absolute top-[33%] left-[36%]"
        style={{ zIndex: 1}}>
          <FaHome className="text-white text-2xl hover:text-white cursor-pointer" onClick={() => navigate('/')} />
          <FaClock className="text-white text-lg hover:text-white cursor-pointer" />
          <FaCog className="text-white text-lg hover:text-white cursor-pointer" />
          <FaSignOutAlt className="text-white text-lg hover:text-white cursor-pointer" />
        </div>
      </div>

      {/* Main Content with Overlapping Divs */}
      <div className="relative flex-grow p-6 flex flex-col justify-center items-center">
        {/* Overlapping Divs with Different Opacity */}
        <div
          className="absolute opacity-40 rounded-5xl"
          style={{ 
            backgroundColor: isDarkMode ? 'rgba(31, 29, 29, 0.8)' : lightModeColorThird, 
            zIndex: 0, height: '460px', width: '900px', top: '170px', left: '100px' 
          }}
        ></div>
        <div
          className="absolute opacity-40 rounded-5xl"
          style={{ 
            backgroundColor: isDarkMode ? 'rgba(31, 29, 29, 0.9)' : lightModeColorSecond, 
            zIndex: 0, height: '430px', width: '900px', top: '150px', left: '100px' 
          }}
        ></div>
        <div
          className="absolute opacity-40 rounded-5xl"
          style={{ 
            backgroundColor: isDarkMode ? 'rgba(31, 29, 29, 1)' : lightModeColorFirst, 
            zIndex: 0, height: '360px', width: '900px', top: '160px', left: '100px' 
          }}
        ></div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-2 gap-6 mb-8 w-full max-w-xs relative z-10">
          {/* Scan Card */}
          <motion.div 
              className="left-[-50%] top-[-8%] col-span-2 p-12 h-[22vh] rounded-tl-5xl rounded-br-5xl relative"
              style={{
                backgroundColor: isDarkMode ? '#D9D9D9' : '#C92525' // C92525 for light mode
              }}
              whileHover={{ scale: 1.05 }} // Scale on hover
              transition={{ duration: 0.3 }} // Smooth transition
              onClick={openPopup} // Open popup on click
            >
            <h2 className="text-center text-5xl font-bold"
              style = {{ 
                 color : isDarkMode ? 'black' : 'white',
                 fontFamily: 'Poppins-bold, sans-serif' }}>
              Scan</h2>

            <p className="text-center text-x"
            style={{ color: isDarkMode ? 'black' : 'white', 
                     fontFamily: 'Poppins-medium, sans-serif' }}>
            Scan Freshness Now</p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute top-32 right-7 cursor-pointer"
            >
              <FaVideo className=" text-4xl" 
                style={{ color: isDarkMode ? 'black' : 'white' }}
              />
            </motion.div>
          </motion.div>

          {/* Grading Card */} 
          <motion.div 
            className={`right-[-115%] top-[-140%] p-8 h-[19vh] w-[43vh] rounded-tr-5xl rounded-bl-5xl relative text-white z-10`}
            style={{ backgroundColor: isDarkMode ? "#393838" : "#811919" }}
            whileHover={{ scale: 1.05 }} // Scale on hover
            transition={{ duration: 0.3 }} // Smooth transition
          >
            <h2 className="mt-5 text-center text-4xl font-bold">Grading</h2>
            <p className="text-center text-xs" style={{ fontFamily: 'Poppins-regular, sans-serif' }}>
              For individual parts
            </p>
          </motion.div>

          {/* Fish Card */}
          <motion.div
            className="bg-gray-800 p-8 rounded-br-5xl top-[-35%] relative h-[14vh] w-[43vh] z-10 rounded-tl-5xl text-white"
            style={{ backgroundColor: isDarkMode ? 'rgba(57, 56, 56, 0.2)' : "#C86666" }}
            whileHover={{ scale: 1.05 }} // Scale on hover
            transition={{ duration: 0.3 }} // Smooth transition
          >
            <h2 className="text-center text-3xl font-bold" style={{ fontFamily: 'Poppins-Bold, sans-serif' }}>
              Fish
            </h2>
            <p className="text-xs mb-2 text-center" style={{ fontFamily: 'Poppins-regular, sans-serif' }}>
              Identified Fish
            </p>
          </motion.div>

          {/* Freshness Result */}
          <motion.div 
            className="col-span-2 p-6 rounded-tr-5xl rounded-bl-5xl w-[37vh] h-[11vh] top-[49%] left-[-50%] z-10 absolute"
            style={{
              backgroundColor: isDarkMode ? 'rgba(72, 68, 68, 0.5)' : '#9F2E2E', // rgba for dark mode with 50% opacity, solid color for light mode
            }}
            whileHover={{ scale: 1.05 }} // Scale on hover
            transition={{ duration: 0.3 }} // Smooth transition
          >
            <h3 className="ml-4 text-lg font-bold text-white">Freshness Result</h3>
            
            <div className="mt-4">
              <div className="ml-4 h-2 rounded-lg mb-2"
                style={{ backgroundColor: isDarkMode ? 'rgba(72, 68, 68, 0.5)' : 'white' }}
              >
                <div className="w-3/4 h-full bg-blue-500 rounded-lg"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Theme Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleTheme}
        className="mr-8 fixed bottom-4 right-4 p-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full shadow-lg hover:from-red-600 hover:to-gray-700 focus:ring-offset-2 focus:ring-offset-gray-900 z-50"
      >
        {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
      </motion.button>

      {/* Popup Modal */}
      {isPopupVisible && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <div
            className="bg-white p-8 rounded-lg shadow-lg relative max-w-sm mx-auto"
            style={{ width: '400px', textAlign: 'center', fontFamily: 'Poppins, sans-serif' }} // Use Poppins for the popup
            onClick={e => e.stopPropagation()}  // Prevent closing when clicking inside modal
          >
            <h2 className="text-xl font-bold mb-4">Start scanning a fish</h2>
            <p className="text-sm mb-4">Scan the following fish types for now: bangus, tilapia, galunggong</p>
            
            {/* Webcam Stream */}
            <div className="mb-4">
              <video ref={videoRef} autoPlay className="w-full h-auto rounded-lg" style={{ transform: 'scaleX(-1)' }} />
            </div>
            
            <button
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ScanPage;
