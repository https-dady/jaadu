// import { createContext, useContext, useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import { getCurrentUser } from "@/services/auth.service";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);

//   const [token, setToken] = useState(
//     localStorage.getItem("token") || ""
//   );

//   const [loading, setLoading] = useState(false);

//   const value = {
//     user,
//     setUser,

//     token,
//     setToken,

//     loading,
//     setLoading,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// AuthProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export function useAuth() {
//   return useContext(AuthContext);
// }




// ============================================================================
// Auth Context
// ============================================================================
//
// Purpose:
// -----------------------------------------------------------------------------
// Ye file poore application ka authentication state manage karti hai.
//
// Responsibilities:
// - Current User Store karna
// - JWT Token Store karna
// - Persistent Login Handle karna
// - Logout Handle karna
// - Authentication Loading State Handle karna
//
// Flow:
//
// App Start
//      │
//      ▼
// Token Check
//      │
//      ▼
// GET /api/auth/me
//      │
//      ▼
// User Context Update
//
// ============================================================================

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import PropTypes from "prop-types";

import { getCurrentUser } from "@/services/auth.service";

// ============================================================================
// Create Context
// ============================================================================

const AuthContext = createContext();

// ============================================================================
// Auth Provider
// ============================================================================

export function AuthProvider({ children }) {
  // --------------------------------------------------------------------------
  // Logged In User
  // --------------------------------------------------------------------------

  const [user, setUser] = useState(null);

  // --------------------------------------------------------------------------
  // JWT Token
  // --------------------------------------------------------------------------

  const [token, setToken] = useState(
    localStorage.getItem("token") || null
  );

  // --------------------------------------------------------------------------
  // Login Button Loading
  // --------------------------------------------------------------------------

  const [loading, setLoading] = useState(false);

  // --------------------------------------------------------------------------
  // App Authentication Loading
  // --------------------------------------------------------------------------

  const [authLoading, setAuthLoading] = useState(true);

  // --------------------------------------------------------------------------
  // Persistent Login
  // --------------------------------------------------------------------------

  useEffect(() => {
    const loadCurrentUser = async () => {
      // Token nahi hai
      if (!token) {
        setAuthLoading(false);
        return;
      }

      try {
        const response = await getCurrentUser(token);

        setUser(response.data);
      } catch (error) {
        console.error("Authentication Error:", error);

        localStorage.removeItem("token");

        setToken(null);

        setUser(null);
      } finally {
        setAuthLoading(false);
      }
    };

    loadCurrentUser();
  }, [token]);

  // --------------------------------------------------------------------------
  // Logout
  // --------------------------------------------------------------------------

  const logout = () => {
    localStorage.removeItem("token");

    setUser(null);

    setToken(null);
  };

  // --------------------------------------------------------------------------
  // Context Values
  // --------------------------------------------------------------------------

  const value = {
    user,
    setUser,

    token,
    setToken,

    loading,
    setLoading,

    authLoading,

    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// ============================================================================
// Prop Types
// ============================================================================

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// ============================================================================
// Custom Hook
// ============================================================================

export function useAuth() {
  return useContext(AuthContext);
}