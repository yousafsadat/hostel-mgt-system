import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => setIsLogin(!isLogin);

  const formVariants = {
    login: { x: 0 },
    signup: { x: "100%" }, // Slide the form to the right for signup
  };

  const imageVariants = {
    login: { x: 0 },
    signup: { x: "-100%" }, // Slide the image to the left for signup
  };

  return (
    <div className="flex flex-col gap-3">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-white relative overflow-hidden">
        <motion.div
          className="flex w-3/4 bg-white shadow-xl rounded-lg overflow-hidden"
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Content Section (Form) */}
          <motion.div
            className="w-1/2 p-8"
            variants={formVariants}
            animate={isLogin ? "login" : "signup"}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              {isLogin ? "Welcome Back!" : "Join Us!"}
            </h2>
            <p className="text-gray-500 mb-6">
              {isLogin
                ? "Sign in to continue accessing your account."
                : "Create an account to start managing your data."}
            </p>

            <form>
              {/* Email */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-2 px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-gray-800 outline-none transition"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password */}
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full mt-2 px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-gray-800 outline-none transition"
                  placeholder="Enter your password"
                />
              </div>

              {/* Confirm Password (Only for Signup) */}
              {!isLogin && (
                <div className="mb-6">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="w-full mt-2 px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-gray-800 outline-none transition"
                    placeholder="Confirm your password"
                  />
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gray-700 to-black text-white py-2 rounded-lg hover:opacity-80 transition"
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>

            {/* Toggle Login/Signup */}
            <p className="text-center text-gray-600 mt-4">
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
              <span
                onClick={toggleMode}
                className="text-black font-semibold cursor-pointer hover:underline"
              >
                {isLogin ? "Sign Up" : "Login"}
              </span>
            </p>
          </motion.div>

          {/* Right Picture Section (Image) */}
          <motion.div
            className="w-1/2 p-8"
            variants={imageVariants}
            animate={isLogin ? "login" : "signup"}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1681487814165-018814e29155?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Login/Signup"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginSignup;
