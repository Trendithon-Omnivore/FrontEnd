import * as S from "./styled";
import useLogin from "@hooks/useLogin";
import { InputwithTitle } from "@components/common/inputs/inputwithtitle/InputwithTitle";
import { Footer2 } from "@components/layout/footer/footer2/Footer2";
import { LoginModal } from "@components/common/signupmodal/LoginModal";

export const LoginPage = () => {
  const {
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
  } = useLogin();

  return (
    <S.Wrapper>
      <S.SemiTitle>로그인</S.SemiTitle>
      <InputwithTitle 
        title="아이디"
        placeholder="아이디를 입력해주세요."
        onInputChange={handleUsernameChange}
        value={username}
        errorMessage={errors.username}
      />
      <InputwithTitle 
        title="비밀번호"
        placeholder="비밀번호를 입력해주세요."
        onInputChange={handlePasswordChange}
        type={showPassword ? "text" : "password"}
        showPassword={showPassword}
        togglePasswordVisibility={togglePasswordVisibility}
        clearInput={clearPassword}
        value={password}
        errorMessage={errors.password}
      />
      <Footer2 
        isLoginEnabled={isLoginEnabled}
        onLoginClick={handleLogin}
      />
      {isLoginSuccess && (
        <LoginModal />
      )}
    </S.Wrapper>
  );
};