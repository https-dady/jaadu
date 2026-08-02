import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getCurrentUser } from "@/services/auth.service";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [token, setToken] = useState(
    localStorage.getItem("token") || ""
  );

  const [loading, setLoading] = useState(false);

  const value = {
    user,
    setUser,

    token,
    setToken,

    loading,
    setLoading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useAuth() {
  return useContext(AuthContext);
}