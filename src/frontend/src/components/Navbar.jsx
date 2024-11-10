import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaCog, FaListAlt, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = ({ isDarkMode }) => {
  const [showFeaturesDropdown, setShowFeaturesDropdown] = useState(false);
  const [showContactDropdown, setShowContactDropdown] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

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
    setShowPopup(true);
  };


  const handleSettingsClick = () => {
    // navigate(''); 
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center py-4 px-8 shadow-lg ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
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
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
                background: isDarkMode
                  ? 'linear-gradient(135deg, #232526, #414345)'
                  : 'linear-gradient(135deg, #ff7e5f, #ff3f5e)',
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
      </div>

      <div className="flex items-center space-x-10 text-xs">
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

        <FaCog 
          className={`text-xs ${isDarkMode ? 'text-white' : 'text-red-600'} hover:text-red-800 cursor-pointer`} 
          onClick={handleSettingsClick}
        />
        <FaListAlt className={`text-xs ${isDarkMode ? 'text-white' : 'text-red-600'} hover:text-red-800`} />
        <button
          className="ml-8 py-2 px-4 text-white font-bold rounded-full transition duration-300"
          style={{ backgroundColor: '#b30000', fontFamily: 'Poppins-light, sans-serif' }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#a00000')} 
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#b30000')} 
          onClick={() => {
            alert('The system is currently capable only of scanning 3 fish: galunggong, bangus, and tilapia.');
            window.location.href = '/scan';
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
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="relative p-6 bg-white text-black rounded-lg shadow-lg max-w-md w-full"
          >
            <button
              className="absolute top-2 right-2 text-2xl hover:text-red-500 transition-all"
              onClick={() => setShowPopup(false)}
            >
              <FaTimes />
            </button>

            <h2 className="text-lg font-bold" style={{ fontFamily: 'Poppins-bold, sans-serif' }}>
              {popupContent.title}
            </h2>

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
