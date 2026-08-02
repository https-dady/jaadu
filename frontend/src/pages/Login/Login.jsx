import AuthLayout from "@/layouts/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";

function Login() {
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