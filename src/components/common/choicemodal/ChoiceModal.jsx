import * as S from "./styled";

import { motion } from "framer-motion";

import modalX from "/images/apply/modalX.svg";
import ApplySuccess from "/images/ApplySuccess.svg";
import tryStart from "/images/tryStart.svg";

const modalVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { y: "100%", opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
};

export const ChoiceModal = ({ type, onClose, ContentTitle, ContentSemiTitle, ContentContent, LeftOnClick, LeftContent, RightOnClick, RightContent}) => {
  return (
    <S.Wrapper
      as={motion.div}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
      $height={type}
    >
      <S.TouchWrap />
      <S.ModalContent>
        {onClose && <S.Icon24 src={modalX} onClick={onClose}/>  }

        {type===1 &&<S.thinkEmoji src={ApplySuccess}/>}
        {type===2 &&<S.thinkEmoji src={tryStart}/>}
        {type===3 &&<S.thinkEmoji src={tryStart} $Type={type}/>}
        {type===4 &&<S.thinkEmoji src={tryStart} $Type={type}/>}
        {ContentTitle && <S.Title>{ContentTitle}</S.Title>}
        {ContentSemiTitle && (
          <S.TextWrap>
            {Array.isArray(ContentSemiTitle) ? (
              ContentSemiTitle.map((line, index) => (
                <S.SemiTitle key={index}>{line}</S.SemiTitle>
              ))
            ) : (
              ContentSemiTitle.split("\n").map((line, index) => (
                <S.SemiTitle key={index}>{line}</S.SemiTitle>
              ))
            )}
          </S.TextWrap>
        )}
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