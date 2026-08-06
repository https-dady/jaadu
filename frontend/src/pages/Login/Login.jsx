// import AuthLayout from "@/layouts/AuthLayout";
// import LoginForm from "@/components/auth/LoginForm";

// function Login() {
//   return (
//     <AuthLayout
//       title="Welcome Back 👋"
//       subtitle="Login to continue chatting."
//     >
//       <LoginForm />
//     </AuthLayout>
//   );
// }

// export default Login;





// ============================================================================
// Login Page
// ============================================================================
//
// Purpose:
// -----------------------------------------------------------------------------
// Login page render karna.
//
// Special Behavior:
// Agar user already login hai to Login page nahi dikhayenge.
// Seedha Chat page par redirect kar denge.
//
// ============================================================================

import { Navigate } from "react-router-dom";

import AuthLayout from "@/layouts/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";

import { useAuth } from "@/context/AuthContext";

function Login() {

  const {
    token,
    authLoading,
  } = useAuth();

  // --------------------------------------------------------------------------
  // Jab tak authentication check chal rahi hai
  // --------------------------------------------------------------------------

  if (authLoading) {

    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  }

  // --------------------------------------------------------------------------
  // Agar user already login hai
  // --------------------------------------------------------------------------

  if (token) {

    return <Navigate to="/chat" replace />;

  }

  // --------------------------------------------------------------------------
  // Login Page
  // --------------------------------------------------------------------------

  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Login to continue chatting."
    >
      <LoginForm />
    </AuthLayout>
  );
}

export default Login;