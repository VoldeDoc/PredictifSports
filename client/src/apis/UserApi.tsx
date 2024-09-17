import api, { isAxiosError } from "./Axios";

export const Register = async (body: {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}) => {
  try {
    return await api.post("/api/user/auth/register", body);
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response;
    } else {
      console.error("Unexpected error occurred", error);
    }
  }
};

export const SignIn = async (body: { email: string; password: string; remember: boolean }) => {
  try {
    return await api.post("/api/user/auth/login", body);
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response;
    } else {
      console.error("Unexpected error occurred", error);
    }
  }
};

export const VerifyOTP = async (body: { otp: string, remember:  boolean }) => {
  try {
    return await api.post("/api/user/auth/verify-otp", body);
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response;
    } else {
      console.error("Unexpected error occurred", error);
    }
  }
};

export const ResendOTP = async () => {
  try {
    return await api.post("/api/user/auth/resend-otp");
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response;
    } else {
      console.error("Unexpected error occurred", error);
    }
  }
};

export const Logout = async () => {
  try {
    return await api.post("/api/user/auth/logout");
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response;
    } else {
      console.error("Unexpected error occurred", error);
    }
  }
};

export const Authenticated = async () => {
  try {
    return await api.post("/api/user/auth/authenticated");
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response;
    } else {
      console.error("Unexpected error occurred", error);
    }
  }
};
