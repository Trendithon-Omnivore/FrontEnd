import * as S from "./styled";

import modalX from "/images/apply/modalX.svg";
import ApplySuccess from "/images/ApplySuccess.svg";

export const ChoiceModal = ({ type, onClose, ContentTitle, ContentSemiTitle, ContentContent, LeftOnClick, LeftContent, RightOnClick, RightContent}) => {
  return (
    <S.Wrapper
      $height={type}
    >
      <S.TouchWrap />
      <S.ModalContent>
        {/* <S.Icon24 src={modalX}/>   */}

        {type===1 &&<S.thinkEmoji src={ApplySuccess}/>}
        {ContentTitle && <S.Title>{ContentTitle}</S.Title>}
        {ContentSemiTitle && <S.SemiTitle>{ContentSemiTitle}</S.SemiTitle>}
        {ContentContent &&<S.Contents>{ContentContent}</S.Contents>}

        <S.TwoButtonWrap>
          <S.LeftButton onClick={LeftOnClick}>{LeftContent}</S.LeftButton>
          <S.RightButton onClick={RightOnClick}>{RightContent}</S.RightButton>
        </S.TwoButtonWrap>
      </S.ModalContent>
    </S.Wrapper>
  )
}