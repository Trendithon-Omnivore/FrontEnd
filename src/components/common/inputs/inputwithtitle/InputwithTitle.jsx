import * as S from "./styled";

export const InputwithTitle = ({ title, placeholder, onInputChange, type, togglePasswordVisibility, showPassword, showError }) => {
  return (
    <S.Wrapper>
      <S.ConTitle>{title}</S.ConTitle>
      <S.Container
        placeholder={placeholder}
        onChange={onInputChange}
        type={type}
      />
      {(title === "비밀번호" || title === "비밀번호 확인") && (
        <S.ToggleButton onClick={togglePasswordVisibility}>
          {showPassword ? <S.Eye /> : <S.Eyeoff />}
        </S.ToggleButton>
      )}
      {showError && 
        <S.ErrorWrap>
          <S.ErrorIcon />
          <S.ErrorMessage>비밀번호가 일치하지 않아요</S.ErrorMessage>
        </S.ErrorWrap>
      }
    </S.Wrapper>
  )
}