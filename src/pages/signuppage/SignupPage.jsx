import * as S from "./styled";
import { useState } from "react";
import { InputwithTitle } from "@components/common/inputs/inputwithtitle/InputwithTitle";

export const SignupPage = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <S.Wrapper>
      <S.SemiTitle>회원가입</S.SemiTitle>
      <InputwithTitle 
        title = "아이디"
        placeholder = "영문 또는 숫자 조합 8자 이상"
        onInputChange={handleInputChange} 
      />
      <InputwithTitle 
        title = "비밀번호"
        placeholder = "영문 또는 숫자 조합 8자 이상"
        onInputChange={handlePasswordChange}
        type={showPassword ? "text" : "password"}
        showPassword={showPassword}
        togglePasswordVisibility={togglePasswordVisibility}
      />
      <InputwithTitle 
        title = "비밀번호 확인"
        placeholder = "영문 또는 숫자 조합 8자 이상"
        onInputChange={handlePasswordConfirmChange} 
        type={showConfirmPassword ? "text" : "password"}
        showPassword={showConfirmPassword}
        togglePasswordVisibility={toggleConfirmPasswordVisibility}
        showError={password != passwordConfirm}
      />
      <S.Row
        $showError={password != passwordConfirm}
      >
        <InputwithTitle 
          title = "닉네임"
          placeholder = "직접 설정할 수 없으며, 랜덤 생성됩니다."
          onInputChange={handleInputChange} 
        />
        <S.IconBox>
          <S.rotateIcon />
        </S.IconBox>
      </S.Row>  
    </S.Wrapper>
  )
}