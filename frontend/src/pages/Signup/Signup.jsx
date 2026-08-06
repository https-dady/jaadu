// ============================================================================
// Signup Page
// ============================================================================
//
// Purpose:
// -----------------------------------------------------------------------------
// New user account create karna.
//
// Special Behavior:
// Agar user already login hai to Signup page nahi dikhayenge.
// Seedha Chat page par redirect kar denge.
//
// ============================================================================

import { Navigate } from "react-router-dom";

import AuthLayout from "@/layouts/AuthLayout";
import SignupForm from "@/components/auth/SignupForm";

import { useAuth } from "@/context/AuthContext";

function Signup() {

  const {
    token,
    authLoading,
  } = useAuth();

  // Authentication check chal rahi hai
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  // Already logged in
  if (token) {
    return <Navigate to="/chat" replace />;
  }

  return (
    <AuthLayout
      title="Create Your Account 🚀"
      subtitle="Join JAADU and start chatting."
    >
      <SignupForm />
    </AuthLayout>
  );
}

export default Signup;