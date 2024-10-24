
        <div
          className={`min-h-screen flex flex-col justify-center items-center ${isDarkMode ? "bg-black" : "bg-white"}`}
        >
          <div
            className={`space-y-6 w-full max-w-md mx-auto p-4 ${isDarkMode
              ? "bg-gray-800 bg-opacity-50 border border-gray-700"
              : "bg-gray-200 bg-opacity-50 border border-gray-300"
              } rounded-lg`}
          >
            <div>
              {/* User information or other content */}
            </div>

            <div>
              <p className={isDarkMode ? "text-gray-300" : "text-gray-800"}>
                <span className="font-bold">Last Login: </span>
                {formatDate(user.lastLogin)}
              </p>
            </div>

            <div className="mt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className={`w-full py-3 px-4 bg-gradient-to-r from-red-500 to-red-600 text-white 
                  font-bold rounded-lg shadow-lg hover:from-red-600 hover:to-red-700
                  focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${isDarkMode
                    ? "focus:ring-offset-gray-900"
                    : "focus:ring-offset-gray-300"
                  }`}
              >
                Logout
              </motion.button>
            </div>
          </div>
        </div>


