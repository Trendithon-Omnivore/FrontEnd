import * as S from "./styled";

export const InputAndTitle = ({ 
  isDynamic = false,
  title, 
  titleValue = "",
  inputValue = "", 
  placeholder, 
  onTitleChange,
  onInputChange, 
  maxLength,
}) => {
  const handleInputChange = (e) => {
    if (e.target.value.length <= maxLength) {
      onInputChange(e);
    }
  }
  return (
    <S.Wrapper>
      <S.Titlebox>
        {isDynamic ? (
          <S.TitleInput 
            type="text" 
            placeholder="타이틀을 입력하세요" 
            value={titleValue} 
            onChange={onTitleChange} 
          />
        ) : (
          <S.Title>{title}</S.Title>
        )}
        <S.ContentLength>{inputValue.length}/{maxLength}</S.ContentLength>
      </S.Titlebox>
      <S.InputBox
        $isTitle={title}
        placeholder={placeholder} 
        value={inputValue}
        onChange={handleInputChange} 
      />
    </S.Wrapper>
  );
};