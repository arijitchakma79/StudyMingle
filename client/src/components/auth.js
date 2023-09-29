import React, { useState } from "react";
import {SignInForm, SignUpForm }from "./"; // Assuming you have a separate SignInForm component
//

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="bg-teal-900 min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        {isSignUp ? <SignUpForm/> : <SignInForm />}
        <p className="mt-4">
          {isSignUp
            ? "Already have an account? "
            : "Don't have an account? "}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-500 hover:underline focus:outline-none"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
