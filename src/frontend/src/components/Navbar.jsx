import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaCog, FaListAlt, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = ({ isDarkMode }) => {
  const [showFeaturesDropdown, setShowFeaturesDropdown] = useState(false);
  const [showContactDropdown, setShowContactDropdown] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false); // New state for email popup

  const navigate = useNavigate();

  const handleFeatureClick = (feature) => {
    let content = {
      title: '',
      content: ''
    };

    if (feature === 'Feature 1: CNN Trained Detection') {
      content = {
        title: (
          <h2 style={{ fontFamily: 'Poppins-Bold, sans-serif', color: 'black' }}>
            CNN Trained Detection
          </h2>
        ),
        content: (
          <p style={{ fontFamily: 'Poppins-Medium, sans-serif', color: 'black' }}>
            CNN Trained Detection uses advanced machine learning models to identify objects in real-time.
          </p>
        ),
      };

    } else if (feature === 'Feature 2: Real-Time Analysis') {
      content = {
        title: (
          <h2 style={{ fontFamily: 'Poppins-Bold, sans-serif', color: 'black' }}>
            Real-Time Analysis
          </h2>
        ),
        content: (
          <p style={{ fontFamily: 'Poppins-Medium, sans-serif', color: 'black' }}>
            Real-Time Analysis provides up-to-the-second insights on your data streams.
          </p>
        ),
      };

      } else if (feature === 'Feature 3: Cloud Integration') {
      content = {
        title: (
          <h2 style={{ fontFamily: 'Poppins-Bold, sans-serif', color: 'black' }}>
            Cloud Integration
          </h2>
        ),
        content: (
          <p style={{ fontFamily: 'Poppins-Medium, sans-serif', color: 'black' }}>
            Cloud Integration allows seamless connectivity with your cloud platforms for enhanced scalability.
          </p>
        ),
      };
    }

    setPopupContent(content);
    setShowPopup(true);
  };

  const handleEmailIconClick = () => {
    setShowEmailPopup(!showEmailPopup); // Toggle email popup
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center py-4 px-8 shadow-lg ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="flex items-center space-x-10 text-xxs" style={{ fontFamily: 'Poppins, sans-serif', transition: "background-color 0.5s, color 0.5s" }}>
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

          {showFeaturesDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute text-black dark:text-white rounded-lg shadow-lg p-4 z-50"
              style={{
                top: '110%',
                left: '0',
                width: '200px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.45)',
                background: isDarkMode ? 'white' : 'black', // Normal black and white background
              }}
            >
              <p
                style={{ fontFamily: "Poppins-Medium, sans-serif" }}
                className={`cursor-pointer dark:hover:bg-gray-200 dark:hover:text-black p-2 rounded-4xl transition-all duration-200 hover:font-bold ${isDarkMode ? 'text-black' : 'text-white'}`}
                onClick={() => handleFeatureClick('Feature 1: CNN Trained Detection')}
              >
                CNN Trained Detection
              </p>
              <p
                style={{ fontFamily: "Poppins-Medium, sans-serif" }}
                className={`cursor-pointer dark:hover:bg-gray-200 dark:hover:text-black p-2 rounded-4xl transition-all duration-200 hover:font-bold ${isDarkMode ? 'text-black' : 'text-white'}`}
                onClick={() => handleFeatureClick('Feature 2: Real-Time Analysis')}
              >
                Real Time Detection
              </p>
              <p
                style={{ fontFamily: "Poppins-Medium, sans-serif" }}
                className={`cursor-pointer dark:hover:bg-gray-200 dark:hover:text-black p-2 rounded-4xl transition-all duration-200 hover:font-bold ${isDarkMode ? 'text-black' : 'text-white'}`}
                onClick={() => handleFeatureClick('Feature 3: Cloud Integration')}
              >
                Cloud Integration
              </p>

            </motion.div>
          )}
        </div>

        <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-300'}`}>|</span>
      </div>

      <div className="flex items-center space-x-10 text-xs">
        <div
          className="relative"
          onMouseEnter={() => setShowEmailPopup(true)}
          onMouseLeave={() => setShowEmailPopup(false)}
        >
          <FaEnvelope 
            className={`text-xs ${isDarkMode ? 'text-white' : 'text-red-600'} hover:text-red-800 cursor-pointer`} 
            onClick={handleEmailIconClick} 
          />
          
          {/* Email Popup */}
          {showEmailPopup && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 top-10 text-black dark:text-white rounded-5xl shadow-lg p-4 z-50"
              style={{
                width: '200px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
                background: isDarkMode ? 'white' : 'black', 
              }}
            >
              <p className={`${isDarkMode ? 'text-black' : 'text-white'}`} style={{ fontWeight: 'bold', fontFamily: 'Poppins-Bold, sans-serif' }}>Email</p>
              <p className={`${isDarkMode ? 'text-black' : 'text-white'}`} style={{ fontSize: 'small', fontFamily: 'Poppins, sans-serif' }}>aquagrade.ai@gmail.com</p>
            </motion.div>
          )}
        </div>

        <FaListAlt className={`text-xs ${isDarkMode ? 'text-white' : 'text-red-600'} hover:text-red-800`} />
        <button
          className="ml-8 py-2 px-4 text-white font-bold rounded-full transition duration-300"
          style={{ backgroundColor: '#b30000', fontFamily: 'Poppins-light, sans-serif' }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#a00000')} 
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#b30000')} 
          onClick={() => {
            alert('The system is currently capable only of scanning 2 fish: bangus, and tilapia.');
            // window.location.href = '/scan';
          }} 
        >
          SCAN A FISH
        </button>
      </div>

      {showPopup && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center"
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg p-8 w-full max-w-2xl relative"
            style={{
              background: isDarkMode ? 'white' : 'black', // Normal black and white background
            }}
          >
            <h3 className="text-xl font-bold text-black dark:text-white mb-4">{popupContent.title}</h3>
            <p className="text-base text-gray-800 dark:text-gray-300">{popupContent.content}</p>
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 dark:text-gray-300"
            >
              <FaTimes />
            </button>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
