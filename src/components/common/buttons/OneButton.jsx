import * as S from "./styled";

export const OneButton = ({ Content, onClose }) => {
  return (
    <S.Button onClick={onClose}>
      {Content}
    </S.Button>
  )
}