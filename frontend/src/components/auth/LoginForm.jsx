import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

import { useAuth } from "@/context/AuthContext";
import { loginUser } from "@/services/auth.service";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 
  
  const navigate = useNavigate();

const {
  setUser,
  setToken,
  loading,
  setLoading,
} = useAuth();

  const onSubmit = async (data) => {
  try {
    setLoading(true);

    const response = await loginUser(data);

    const { token, user } = response.data;

    localStorage.setItem("token", token);

    setToken(token);
    setUser(user);

    toast.success(response.message);

    navigate("/chat");
  } catch (error) {
    toast.error(
      error.response?.data?.message || "Login failed"
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
        placeholder="Enter your password"
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

      <Button
  type="submit"
  fullWidth
  loading={loading}
>
  Login
</Button>
    </form>
  );
}

export default LoginForm;