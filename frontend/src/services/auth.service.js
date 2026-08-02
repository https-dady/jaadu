import axiosInstance from "@/api/axios";

export const loginUser = async (credentials) => {
  const response = await axiosInstance.post(
    "/auth/login",
    credentials
  );

  return response.data;
};

export const getCurrentUser = async (token) => {
  const response = await axiosInstance.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};