// ============================================================================
// Signup Form
// ============================================================================
//
// Purpose:
// -----------------------------------------------------------------------------
// Ye component naye user ka account create karne ke liye use hota hai.
//
// Responsibilities:
// - Form Validation
// - Signup API Call
// - Success Toast
// - Redirect to Login Page
//
// Flow:
//
// User
//    │
//    ▼
// Signup Form
//    │
//    ▼
// React Hook Form
//    │
//    ▼
// auth.service.js
//    │
//    ▼
// Backend
//    │
//    ▼
// MongoDB
//    │
//    ▼
// Success
//    │
//    ▼
// Login Page
//
// ============================================================================

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

import { signupUser } from "@/services/auth.service";
import { useAuth } from "@/context/AuthContext";

function SignupForm() {

  // ==========================================================================
  // React Hook Form
  // ==========================================================================

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // ==========================================================================
  // Hooks
  // ==========================================================================

  const navigate = useNavigate();

  const {
    loading,
    setLoading,
  } = useAuth();

  // Password ko Confirm Password validation ke liye watch karenge.
  const password = watch("password");

  // ==========================================================================
  // Form Submit
  // ==========================================================================

  const onSubmit = async (data) => {

    try {

      setLoading(true);

      // Confirm Password backend ko nahi bhejna.
      const payload = {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      };

      const response = await signupUser(payload);

      toast.success(response.message);

      navigate("/");

    } catch (error) {

      toast.error(
        error.response?.data?.message || "Signup failed."
      );

    } finally {

      setLoading(false);

    }

  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >

      <Input
        label="Full Name"
        type="text"
        placeholder="Enter your full name"
        required
        error={errors.fullName?.message}
        {...register("fullName", {
          required: "Full name is required",
          minLength: {
            value: 3,
            message: "Minimum 3 characters required",
          },
        })}
      />

      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        required
        error={errors.email?.message}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Enter a valid email address",
          },
        })}
      />

      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
        required
        error={errors.password?.message}
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        })}
      />

      <Input
        label="Confirm Password"
        type="password"
        placeholder="Confirm password"
        required
        error={errors.confirmPassword?.message}
        {...register("confirmPassword", {
          required: "Confirm password is required",
          validate: (value) =>
            value === password || "Passwords do not match",
        })}
      />

      <Button
        type="submit"
        fullWidth
        loading={loading}
      >
        Create Account
      </Button>

    </form>
  );
}

export default SignupForm;