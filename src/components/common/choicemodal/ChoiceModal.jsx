import * as S from "./styled";

import modalX from "/images/apply/modalX.svg";
import ApplySuccess from "/images/ApplySuccess.svg";
import tryStart from "/images/tryStart.svg";

export const ChoiceModal = ({ type, onClose, ContentTitle, ContentSemiTitle, ContentContent, LeftOnClick, LeftContent, RightOnClick, RightContent}) => {
  return (
    <S.Wrapper
      $height={type}
    >
      <S.TouchWrap />
      <S.ModalContent>
        {/* <S.Icon24 src={modalX}/>   */}

        {type===1 &&<S.thinkEmoji src={ApplySuccess}/>}
        {type===2 &&<S.thinkEmoji src={tryStart}/>}
        {ContentTitle && <S.Title>{ContentTitle}</S.Title>}
        {ContentSemiTitle && <S.SemiTitle>{ContentSemiTitle}</S.SemiTitle>}
        {ContentContent && (
          <>
            {Array.isArray(ContentContent) ? (
              ContentContent.map((line, index) => (
                <S.Contents key={index}>{line}</S.Contents>
              ))
            ) : (
              ContentContent.split("\n").map((line, index) => (
                <S.Contents key={index}>{line}</S.Contents>
              ))
            )}
          </>
        )}

        <S.TwoButtonWrap>
          <S.LeftButton onClick={LeftOnClick}>{LeftContent}</S.LeftButton>
          <S.RightButton onClick={RightOnClick}>{RightContent}</S.RightButton>
        </S.TwoButtonWrap>
      </S.ModalContent>
    </S.Wrapper>
  )
}