import * as S from "./styled";

export const UserExplain = ({ titleValue, contentValue}) => {

  return (
    <S.Wrapper>
      <S.Title>{titleValue}</S.Title>
      <S.Contents>{contentValue}</S.Contents>
    </S.Wrapper>
  )
}