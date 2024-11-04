import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 
import { useState, useEffect, useRef } from 'react';
import FloatingShape from '../components/FloatingShape';

// Add this CSS animation at the top of your component, before the ScanPage definition
const sparkleKeyframes = `
  @keyframes sparkle {
    0% { filter: brightness(100%); }
    50% { filter: brightness(150%); }
    100% { filter: brightness(100%); }
  }
`;

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
  const [scanResult, setScanResult] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState(null);
  const [detectedFish, setDetectedFish] = useState(null);
  const [detectedConfidence, setDetectedConfidence] = useState(null);

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
        setError("Failed to access webcam. Please make sure you have a working camera.");
      });
  };

  // Function to close the popup and stop webcam
  const closePopup = () => {
    setPopupVisible(false);
    setScanResult(null);
    setError(null);
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());  // Stop the webcam stream when popup is closed
    }
  };

  const processFrame = async () => {
    if (!videoRef.current) return;

    try {
        setIsScanning(true);
        setError(null);
        
        // Capture video frame
        const canvas = document.createElement('canvas');
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(videoRef.current, 0, 0);
        
        // Convert to blob
        const blob = await new Promise(resolve => 
            canvas.toBlob(resolve, 'image/jpeg', 0.95)
        );

        // Send to API
        const formData = new FormData();
        formData.append('image', blob);

        const response = await fetch('http://localhost:5000/api/scan-fish', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) throw new Error('Scan failed');

        const result = await response.json();
        setScanResult(result);
    } catch (error) {
        console.error('Scanning error:', error);
        setError('Failed to process scan. Please try again.');
    } finally {
        setIsScanning(false);
    }
  };

  return (
    <>
      {/* Add the keyframes to the document */}
      <style>{sparkleKeyframes}</style>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className={`min-h-screen w-screen flex ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} relative`}
        style={{ transition: 'background-color 0.5s, color 0.5s', overflowY: 'scroll' }}
      >
        {/* Your existing FloatingShape components */}
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
              This dashboard offers an overview of fish <br></br> grading, freshness scans, and reports, all in <br></br> one place.
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
          {/* Your existing overlapping divs */}
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
            {/* Your existing cards */}
            {/* Scan Card */}
            <motion.div 
              className="left-[-50%] top-[-8%] col-span-2 p-12 h-[22vh] rounded-tl-5xl rounded-br-5xl relative"
              style={{
                backgroundColor: isDarkMode ? '#D9D9D9' : '#C92525',
                transition: 'all 0.2s ease'
              }}
              whileHover={{ 
                boxShadow: isDarkMode 
                  ? '0 0 20px rgba(255, 255, 255, 0.8)'
                  : '0 0 20px rgba(0, 0, 0, 0.8)',
                animation: 'sparkle 0.8s ease-in-out infinite'
              }}
              transition={{ duration: 0.2 }}
              onClick={openPopup}
            >
              <h2 className="text-center text-5xl font-bold"
                style={{ 
                  color: isDarkMode ? 'black' : 'white',
                  fontFamily: 'Poppins-bold, sans-serif' 
                }}>
                Scan
              </h2>
              <p className="text-center text-x"
                style={{ 
                  color: isDarkMode ? 'black' : 'white', 
                  fontFamily: 'Poppins-medium, sans-serif' 
                }}>
                Scan Freshness Now
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute top-32 right-7 cursor-pointer"
              >
                <FaVideo 
                  className="text-4xl" 
                  style={{ color: isDarkMode ? 'black' : 'white' }}
                />
              </motion.div>
            </motion.div>

            {/* Your other existing cards */}
            {/* ... */}

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

        {/* Updated Popup Modal with Scanning Functionality */}
        {isPopupVisible && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={closePopup}
          >
            <div
              className="bg-white p-8 rounded-lg shadow-lg relative max-w-sm mx-auto"
              style={{ width: '400px', textAlign: 'center', fontFamily: 'Poppins, sans-serif' }}
              onClick={e => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-4" style={{ color: 'black' }}>
                Start scanning a fish
              </h2>
              <p className="text-sm mb-4" style={{ color: 'gray' }}>
                Scan the following fish types for now: bangus, tilapia, galunggong
              </p>
              
              {/* Webcam Stream */}
              <div className="mb-4">
                <video 
                  ref={videoRef} 
                  autoPlay 
                  className="w-full h-auto rounded-lg" 
                  style={{ transform: 'scaleX(-1)' }} 
                />
              </div>

              <div className="flex justify-center space-x-2">
                {/* Scan Button */}
                <button
                  className={`px-4 py-2 ${
                    isScanning ? 'bg-gray-500' : 'bg-red-600 hover:bg-red-700'
                  } text-white rounded-lg transition-colors`}
                  onClick={processFrame}
                  disabled={isScanning}
                  style={{ fontFamily: 'Poppins-Medium, sans-serif' }}
                >
                  {isScanning ? 'Scanning...' : 'Scan Now'}
                </button>

                {/* Close Button */}
                <button
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                  onClick={closePopup}
                  style={{ fontFamily: 'Poppins-Medium, sans-serif' }}
                >
                  Close
                </button>
              </div>

              {/* Error Message */}
              {error && (
                <p className="text-red-500 mt-4" style={{ fontFamily: 'Poppins-Regular, sans-serif' }}>
                  {error}
                </p>
              )}

              {/* Scan Results */}
              {scanResult && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-gray-100 rounded-lg text-left"
                >
                  <h3 className="font-bold text-lg mb-2" style={{ 
                    color: 'black', 
                    fontFamily: 'Poppins-Bold, sans-serif' 
                  }}>
                    Results:
                  </h3>
                  <p style={{ 
                    color: 'black', 
                    fontFamily: 'Poppins-Regular, sans-serif' 
                  }}>
                    Fish Type: {scanResult.fish_type}
                  </p>
                  <p style={{ 
                    color: 'black', 
                    fontFamily: 'Poppins-Regular, sans-serif' 
                  }}>
                    Confidence: {scanResult.confidence}
                  </p>
                  <p style={{ 
                    color: getFreshnessColor(scanResult.freshness?.status), 
                    fontFamily: 'Poppins-Regular, sans-serif',
                    marginTop: '8px',
                    fontWeight: 'bold'
                  }}>
                    Freshness: {scanResult.freshness?.status}
                  </p>
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-green-600 h-2.5 rounded-full" 
                        style={{ width: `${scanResult.freshness?.score * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default ScanPage;

// Add this helper function to get color based on freshness status
const getFreshnessColor = (status) => {
  switch (status) {
    case 'Fresh':
      return '#22c55e'  // green
    case 'Moderately Fresh':
      return '#eab308'  // yellow
    case 'Not Fresh':
      return '#ef4444'  // red
    default:
      return '#6b7280'  // gray
  }
}