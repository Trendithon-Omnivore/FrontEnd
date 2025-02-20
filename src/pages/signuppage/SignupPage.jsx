import * as S from "./styled";
import { useState } from "react";
import useSignup from "@hooks/useSignup";
import { InputwithTitle } from "@components/common/inputs/inputwithtitle/InputwithTitle";
import { Footer } from "@components/layout/footer/footer1/Footer";
import { SignupModal } from "@components/common/\bsignupmodal/SignupModal";

export const SignupPage = () => {
  const {
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
  } = useSignup();

  return (
    <S.Wrapper>
      <S.SemiTitle>회원가입</S.SemiTitle>
      <InputwithTitle 
        title = "아이디"
        placeholder = "영문 또는 숫자 조합 8자 이상"
        onInputChange={handleUsernameChange}
        value={username}
        errorMessage={errors.username}
      />
      <InputwithTitle 
        title = "비밀번호"
        placeholder = "영문 또는 숫자 조합 8자 이상"
        onInputChange={handlePasswordChange}
        type={showPassword ? "text" : "password"}
        showPassword={showPassword}
        togglePasswordVisibility={togglePasswordVisibility}
        clearInput={clearPassword}
        value={password}
        errorMessage={errors.password}
      />
      <InputwithTitle 
        title = "비밀번호 확인"
        placeholder = "영문 또는 숫자 조합 8자 이상"
        onInputChange={handlePasswordConfirmChange} 
        type={showConfirmPassword ? "text" : "password"}
        showPassword={showConfirmPassword}
        togglePasswordVisibility={toggleConfirmPasswordVisibility}
        showError={password != passwordConfirm}
        clearInput={clearPasswordConfirm}
        value={passwordConfirm}
        errorMessage={errors.passwordConfirm}
      />
      <S.Row
        $showError={password != passwordConfirm}
      >
        <InputwithTitle 
          title = "닉네임"
          placeholder = "직접 설정할 수 없으며, 랜덤 생성됩니다."
          value={nickname}
          readOnly
        />
        <S.IconBox
          onClick={generateRandomNickname}
        >
          <S.rotateIcon />
        </S.IconBox>
      </S.Row>  
      <Footer 
        isSignup={true}
        content="가입하기"
        isSignupEnabled={isSignupEnabled}
        onSignupClick={handleSignup}
      />
      {isSignupSuccess && (
        <SignupModal />
      )}
    </S.Wrapper>
  )
}