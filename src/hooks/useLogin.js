import { useState } from "react";
import { LoginService } from "@services/LoginService";

const useLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const validateUsername = (username) => {
    if (!username) return "아이디를 입력해주세요.";
    return "";
  };

  const validatePassword = (password) => {
    if (!password) return "비밀번호를 입력해주세요.";
    return "";
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setErrors((prev) => ({ ...prev, username: validateUsername(e.target.value) }));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrors((prev) => ({ ...prev, password: validatePassword(e.target.value) }));
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const clearPassword = () => setPassword("");

  const isLoginEnabled = username && password && !errors.username && !errors.password;

  const handleLogin = async () => {
    if (!isLoginEnabled) return;
    try {
      await LoginService({ username, password });
      setIsLoginSuccess(true);
    } catch (error) {
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return {
    username,
    password,
    showPassword,
    errors,
    handleUsernameChange,
    handlePasswordChange,
    togglePasswordVisibility,
    clearPassword,
    isLoginEnabled,
    handleLogin,
    isLoginSuccess,
  };
};

export default useLogin;