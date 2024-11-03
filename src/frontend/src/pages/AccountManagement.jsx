import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const AccountManagement = ({ isDarkMode: initialDarkMode, toggleTheme: globalToggleTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(initialDarkMode);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    globalToggleTheme(); // Call the global theme toggle function if passed down
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className={isDarkMode ? 'dark' : 'light'}
      style={{
        minHeight: '100vh',
        backgroundColor: isDarkMode ? 'black' : 'white',
        color: isDarkMode ? 'white' : 'black',
        transition: 'background-color 0.5s, color 0.5s',
      }}
    >
      {/* Include the Navbar */}
      <Navbar isDarkMode={isDarkMode} />

      {/* Main content of the Account Management page */}
      <div className="container mx-auto py-10 px-4">
        <h1 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-red-700'}`}>
          Account Management/History
        </h1>
        <p className="mt-6 text-sm">
          Here you can view and manage your account history, update settings, and track your activities.
        </p>
      </div>

      {/* Dark/Light Mode Toggle Button */}
      <div className="fixed bottom-4 right-4 flex items-center space-x-4 z-50">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTheme}
          className="p-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full shadow-lg hover:from-red-600 hover:to-gray-700 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default AccountManagement;
