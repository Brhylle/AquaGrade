import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaCog, FaListAlt, FaTimes } from 'react-icons/fa'; // Example icons from react-icons
import { motion } from 'framer-motion';

const Navbar = ({ isDarkMode }) => {
  const [showFeaturesDropdown, setShowFeaturesDropdown] = useState(false);
  const [showContactDropdown, setShowContactDropdown] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const handleFeatureClick = (feature) => {
    let content = {
      title: '',
      content: ''
    };

    if (feature === 'Feature 1: AI-based Detection') {
      content = {
        title: 'AI-Based Detection',
        content: 'AI-Based Detection uses advanced machine learning models to identify objects in real-time.'
      };
    } else if (feature === 'Feature 2: Real-Time Analysis') {
      content = {
        title: 'Real-Time Analysis',
        content: 'Real-Time Analysis provides up-to-the-second insights on your data streams.'
      };
    } else if (feature === 'Feature 3: Cloud Integration') {
      content = {
        title: 'Cloud Integration',
        content: 'Cloud Integration allows seamless connectivity with your cloud platforms for enhanced scalability.'
      };
    }

    setPopupContent(content);
    setShowPopup(true); // No more auto-close, user closes it manually
  };

  const handleQuickScan = () => {
    navigate('/scan'); // Redirect to the ScanPage
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center py-4 px-8 shadow-lg ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      {/* Left side - Links */}
      <div className="flex items-center space-x-10 text-xxs" style={{ fontFamily: 'Poppins-light, sans-serif', transition: "background-color 0.5s, color 0.5s" }}>
        <Link
          to="/signup"
          className={`${isDarkMode ? 'text-gray-300' : 'text-red-700'} relative font-semibold group`}
          style={{ fontFamily: 'Poppins-bold, sans-serif' }}
        >
          HOME
          <span className="block absolute left-1/2 transform -translate-x-1/2 bottom-{-1} h-0.5 bg-red-600 w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </Link>
        <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-300'}`}>|</span>
        <Link
          to="/team"
          className={`${isDarkMode ? 'text-gray-300' : 'text-red-700'} relative font-semibold group`}
          style={{ fontFamily: 'Poppins-bold, sans-serif' }}
        >
          TEAM
          <span className="block absolute left-1/2 transform -translate-x-1/2 bottom-{-1} h-0.5 bg-red-600 w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </Link>
        <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-300'}`}>|</span>

        {/* Features Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setShowFeaturesDropdown(true)}
          onMouseLeave={() => setShowFeaturesDropdown(false)}
        >
          <span
            className={`${isDarkMode ? 'text-gray-300' : 'text-red-700'} relative font-semibold cursor-pointer group`}
            style={{ fontFamily: 'Poppins-bold, sans-serif' }}
          >
            FEATURES
            <span className="block absolute left-1/2 transform -translate-x-1/2 bottom-{-1} h-0.5 bg-red-600 w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </span>

          {/* Dropdown with correct positioning and background */}
          {showFeaturesDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute text-black dark:text-white rounded-lg shadow-lg p-4 z-50"
              style={{
                top: '110%', // Show directly below the FEATURES link
                left: '0',
                width: '200px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
                background: isDarkMode
                  ? 'linear-gradient(135deg, #232526, #414345)' // Gradient for dark mode (shades of gray)
                  : 'linear-gradient(135deg, #ff7e5f, #ff3f5e)', // Red gradient for light mode
              }}
            >
              <p
                className="cursor-pointer hover:bg-gray-100 dark:hover:bg-white dark:hover:text-black p-2 rounded transition-all duration-200 hover:font-bold"
                onClick={() => handleFeatureClick('Feature 1: AI-based Detection')}
              >
                AI-Based Detection
              </p>
              <p
                className="cursor-pointer hover:bg-gray-100 dark:hover:bg-white dark:hover:text-black p-2 rounded transition-all duration-200 hover:font-bold"
                onClick={() => handleFeatureClick('Feature 2: Real-Time Analysis')}
              >
                Real-Time Analysis
              </p>
              <p
                className="cursor-pointer hover:bg-gray-100 dark:hover:bg-white dark:hover:text-black p-2 rounded transition-all duration-200 hover:font-bold"
                onClick={() => handleFeatureClick('Feature 3: Cloud Integration')}
              >
                Cloud Integration
              </p>
            </motion.div>
          )}
        </div>

        <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-300'}`}>|</span>
        <Link
          to="/reviews"
          className={`${isDarkMode ? 'text-gray-300' : 'text-red-700'} relative font-semibold group`}
          style={{ fontFamily: 'Poppins-bold, sans-serif' }}
        >
          REVIEWS
          <span className="block absolute left-1/2 transform -translate-x-1/2 bottom-{-1} h-0.5 bg-red-600 w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </Link>
      </div>

      {/* Right side - Icons and Button */}
      <div className="flex items-center space-x-10 text-xs">
        {/* Email dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setShowContactDropdown(true)}
          onMouseLeave={() => setShowContactDropdown(false)}
        >
          <FaEnvelope className={`text-xs ${isDarkMode ? 'text-white' : 'text-red-600'} hover:text-red-800 cursor-pointer`} />
          {showContactDropdown && (
            <div className="absolute right-0 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-lg p-4 z-50"
                 style={{ width: '150px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)' }}>
              <p className="p-2">Email: contact@domain.com</p>
              <p className="p-2">Phone: +1234567890</p>
            </div>
          )}
        </div>

        <FaCog className={`text-xs ${isDarkMode ? 'text-white' : 'text-red-600'} hover:text-red-800`} />
        <FaListAlt className={`text-xs ${isDarkMode ? 'text-white' : 'text-red-600'} hover:text-red-800`} />
        <button
          className="ml-8 py-2 px-4 text-white font-bold rounded-full transition duration-300"
          style={{ backgroundColor: '#b30000', fontFamily: 'Poppins-light, sans-serif' }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#a00000')} // Hover state color
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#b30000')} // Back to original color on leave
          onClick={handleQuickScan} // Redirect to ScanPage on click
        >
          QUICK SCAN
        </button>
      </div>

      {/* Floating Popup */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, y: -20 }} // Start slightly above and hidden
          animate={{ opacity: 1, y: 0 }} // Animate to fully visible and centered
          exit={{ opacity: 0, y: 20 }} // Smooth exit going downwards and fading
          transition={{ duration: 0.5 }} // Transition duration for smoothness
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ opacity: 1 }} // Fully visible when shown
            exit={{ opacity: 0, scale: 0.9 }} // Shrink and fade out on close
            transition={{ duration: 0.5 }}
            className="relative p-6 bg-white text-black rounded-lg shadow-lg max-w-md w-full"
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-2xl hover:text-red-500 transition-all"
              onClick={() => setShowPopup(false)}
            >
              <FaTimes />
            </button>

            {/* Popup Title */}
            <h2 className="text-lg font-bold" style={{ fontFamily: 'Poppins-bold, sans-serif' }}>
              {popupContent.title}
            </h2>

            {/* Popup Content */}
            <p className="mt-4 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {popupContent.content}
            </p>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
