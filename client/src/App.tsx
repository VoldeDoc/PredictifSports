import Navbar from "./pages/navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./pages/footer";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Otp from "./pages/otp";
import NotFound from "./pages/notfound"; // Import the NotFound component
import { LoadingProvider } from "./utils/loader";
import toast, { Toaster, ToastBar } from "react-hot-toast";
import { FaCheckCircle, FaExclamationTriangle, FaTimes } from "react-icons/fa";
import { BiLoaderAlt } from "react-icons/bi";
import "react-loading-skeleton/dist/skeleton.css";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const location = useLocation();
  const hideHeaderFooter =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/verification" ||
    location.pathname === "/dashboard";

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            maxWidth: "500px",
            color: "#fff",
            background: "#333",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          },
          success: {
            icon: <FaCheckCircle />,
            style: {
              background: "#71dd37",
            },
          },
          error: {
            icon: <FaExclamationTriangle />,
            style: {
              background: "#ff3e1d",
            },
            duration: 6000,
          },
          loading: {
            icon: <BiLoaderAlt className="animate-spin" />,
            style: {
              background: "#696cff",
            },
          },
        }}
      >
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== "loading" && (
                  <button onClick={() => toast.dismiss(t.id)}>
                    <FaTimes />
                  </button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>

      {!hideHeaderFooter && <Navbar />}
      <LoadingProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verification" element={<Otp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/payment" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />{" "}
          {/* Catch-all route for 404 */}
        </Routes>
      </LoadingProvider>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default App;
