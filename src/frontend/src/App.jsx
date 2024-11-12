import "./App.css";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, Navigate, Route, Routes} from "react-router-dom"; // Import useLocation

// FONTS : 
import "./fonts/Bold-Atyp.otf"
import "./fonts/MediumItalic-Atyp.otf"
import "./fonts/SemiBold-Atyp.otf"
import "./fonts/Regular-Atyp.otf"

// COMPONENTS :
import FloatingShape from "./components/FloatingShape"
// import Navbar from "./components/Navbar"

// PAGES :
import SignUpPage from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"
import EmailVerificationPage from "./pages/EmailVerificationPage";
import TeamPage from "./pages/TeamPage";
import ScanPage from "./pages/ScanPage";
import InferenceApp from './pages/InferenceApp';

// STORES :
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";

// PAGES AND COMPONENTS :
import HomePage from "./pages/HomePage";
import LoadingSpinner from "./components/LoadingSpinner";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

// for protecting routes that require authentication 
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  };
  if (!user.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }
  return children;
};

// for redirecting logged/auth users to the homepage
const RedirectAuthenticatedUser = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();
	if (isAuthenticated && user.isVerified) {
		return <Navigate to='/' replace />;
	}
	return children;
};

function App() {
  const { isCheckingAuth, checkAuth, isAuthenticated, user } = useAuthStore();
  const location = useLocation(); // Get current route

  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme == "dark");
    }
    checkAuth();
  }, [checkAuth]);


  if (isCheckingAuth) return <LoadingSpinner /> 

    const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  console.log("isauthenticated", isAuthenticated);
  console.log("user", user)

  return (
    <div className='min-h-screen bg-gradient-to-br from-black via-black to-gray-800 flex items-center justify-center relative overflow-hidden'>

      {/* Conditionally render floating shapes based on the route */}
      {location.pathname !== '/' && (
        <>
          <FloatingShape color='bg-gray-700' size='w-64 h-64' top='-5%' left='10%' delay={0} />
          <FloatingShape color='bg-gray-600' size='w-48 h-48' top='70%' left='80%' delay={0} />
          <FloatingShape color='bg-gray-300' size='w-32 h-32' top='40%' left='-10%' delay={0} />
        </>
      )}

      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
          <div className="w-full h-full">
             <HomePage />
          </div>
          </ProtectedRoute>
        }/>
        <Route path='/signup' element={
          <RedirectAuthenticatedUser>
            <SignUpPage />
          </RedirectAuthenticatedUser>
        }/>
        <Route path='/login' element={
          <RedirectAuthenticatedUser>
            <LoginPage />
          </RedirectAuthenticatedUser>
        }/>
        <Route path='/verify-email' element={<EmailVerificationPage />} />
        <Route path='/forgot-password' element={
          <RedirectAuthenticatedUser>
            <ForgotPasswordPage />
          </RedirectAuthenticatedUser>
        }/>
        <Route path='/reset-password/:token' element={
          <RedirectAuthenticatedUser>
            <ResetPasswordPage />
          </RedirectAuthenticatedUser>
        }/>
        <Route path='/team' element={
          <div>
            {/* <Navbar /> Ensure Navbar is rendered on the CNN page */}
            <TeamPage isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
          </div>
        }/>
        <Route path='/inference' element={
          <ProtectedRoute>
            <InferenceApp isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          </ProtectedRoute>
        }/>

        {/* <Route path="/scan" element={
          <div>
            {/* <Navbar /> */}
            <ScanPage isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          {/* </div>
          }
        / */}
        {/* 
        <Route path="/admin" element={
          <div>
            <AdminPage />
          </div>
        }/> */}
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
