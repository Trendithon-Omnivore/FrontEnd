import * as S from "./styled";

export const InputwithTitle = ({ 
  title, 
  placeholder, 
  onInputChange, 
  type, 
  togglePasswordVisibility, 
  showPassword, 
  showError, 
  clearInput, 
  value,
  errorMessage,
  readOnly = false,
}) => {
  return (
    <S.Wrapper>
      <S.ConTitle
        $errorMessage={errorMessage}
      >{title}</S.ConTitle>
      <S.Container
        placeholder={placeholder}
        onChange={readOnly ? () => {} : onInputChange}
        type={type}
        value={value}
        $errorMessage={errorMessage}
        $readOnly={readOnly}
      />
      {(title === "비밀번호" || title === "비밀번호 확인") && (
        <>
          <S.ToggleButton onClick={togglePasswordVisibility}>
            {showPassword ? <S.Eye /> : <S.Eyeoff />}
          </S.ToggleButton>
          <S.closeIcon onClick={clearInput}></S.closeIcon>
        </>

      )}
      {errorMessage && 
        <S.ErrorWrap>
          <S.ErrorIcon />
          <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
        </S.ErrorWrap>
      }
    </S.Wrapper>
  )
}