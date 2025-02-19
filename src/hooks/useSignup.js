import { useState } from "react";
import { AuthService } from "@services/AuthService";

const mockNicknames = ["Alice123", "Bob456", "Charlie789", "David007", "Eve321"];

const useSignup = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
  });

  const [isSignupSuccess, setIsSignupSuccess] = useState(false);

  const validateUsername = (username) => {
    if (!username) {
      return "아이디를 입력해주세요.";
    }
    if (!/^[a-zA-Z0-9]{6,}$/.test(username)) {
      return "아이디는 영문 또는 숫자 조합 6자 이상이어야 합니다.";
    }
    // 실제로 백엔드에서 아이디 중복 체크를 해야 하지만, 여기서는 mock으로 처리합니다.
    const existingUsernames = ["test123", "user456"];
    if (existingUsernames.includes(username)) {
      return "이미 존재하는 아이디입니다.";
    }
    return "";
  };

  const validatePassword = (password) => {
    if (!password) {
      return "비밀번호를 입력해주세요.";
    }
    if (!/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)) {
      return "비밀번호는 영문 및 숫자 조합 8자 이상이어야 합니다.";
    }
    return "";
  };

  const validatePasswordConfirm = (passwordConfirm) => {
    if (passwordConfirm !== password) {
      return "비밀번호가 일치하지 않습니다.";
    }
    return "";
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      username: validateUsername(value),
    }));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: validatePassword(value),
    }));
  };

  const handlePasswordConfirmChange = (e) => {
    const value = e.target.value;
    setPasswordConfirm(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      passwordConfirm: validatePasswordConfirm(value),
    }));
  };

  const togglePasswordVisibility = () => setShowPassword((prevState) => !prevState);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword((prevState) => !prevState);

  const clearPassword = () => setPassword("");
  const clearPasswordConfirm = () => setPasswordConfirm("");

  const generateRandomNickname = () => {
    const randomNickname = mockNicknames[Math.floor(Math.random() * mockNicknames.length)];
    setNickname(randomNickname);
  };

  const isSignupEnabled = 
    username && 
    password && 
    passwordConfirm && 
    nickname && 
    !errors.username && 
    !errors.password && 
    !errors.passwordConfirm && 
    password === passwordConfirm;

  const handleSignup = async () => {
    if (!isSignupEnabled) return;
    try {
      await AuthService({ username, password, nickname });
      setIsSignupSuccess(true); // ✅ 회원가입 성공 시 모달 표시
    } catch (error) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return {
    username,
    password,
    passwordConfirm,
    nickname,
    showPassword,
    showConfirmPassword,
    errors,
    handleUsernameChange,
    handlePasswordChange,
    handlePasswordConfirmChange,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
    clearPassword,
    clearPasswordConfirm,
    generateRandomNickname,
    isSignupEnabled,
    handleSignup,
    isSignupSuccess,
  };
};

export default useSignup;