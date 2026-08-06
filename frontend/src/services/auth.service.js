
// ============================================================================
// Authentication Service
// ============================================================================
//
// Purpose:
// -----------------------------------------------------------------------------
// Ye file authentication se related saari API calls handle karti hai.
//
// Is file me business logic nahi hoga.
// Sirf backend ko request bhejna aur response return karna iska kaam hai.
//
// Flow:
//
// Login Page
//      │
//      ▼
// auth.service.js
//      │
//      ▼
// Axios Instance
//      │
//      ▼
// Backend API
//
// ============================================================================

import axiosInstance from "@/api/axios";

// ============================================================================
// Login User
// ----------------------------------------------------------------------------
// Purpose:
// User ke email aur password ko backend par bhejna.
//
// Endpoint:
// POST /api/auth/login
//
// Request Body:
//
// {
//   "email": "user@gmail.com",
//   "password": "123456"
// }
//
// Returns:
//
// {
//   statusCode: 200,
//   message: "Login successful.",
//   data: {
//     token,
//     user
//   }
// }
//
// ============================================================================

export const loginUser = async (credentials) => {
  const response = await axiosInstance.post(
    "/auth/login",
    credentials
  );

  return response.data;
};

// ============================================================================
// Get Current Logged In User
// ----------------------------------------------------------------------------
// Purpose:
// JWT Token verify karke current logged-in user ki information lana.
//
// Endpoint:
// GET /api/auth/me
//
// Authorization:
//
// Bearer Token
//
// Returns:
//
// {
//   statusCode: 200,
//   message: "...",
//   data: {
//      id,
//      email,
//      fullName,
//      ...
//   }
// }
//
// ============================================================================

export const getCurrentUser = async (token) => {
  const response = await axiosInstance.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });


  return response.data;
};


// ============================================================================
// Signup User
// ----------------------------------------------------------------------------
// Purpose:
// Naya user register karna.
//
// Endpoint:
// POST /api/auth/signup
//
// Request:
//
// {
//    fullName,
//    email,
//    password
// }
//
// ============================================================================

export const signupUser = async (userData) => {
  const response = await axiosInstance.post(
    "/auth/signup",
    userData
  );

  return response.data;
};