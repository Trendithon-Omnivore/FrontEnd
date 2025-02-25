import * as S from "./styled";

import modalX from "/images/apply/modalX.svg";
import thinkman from "/images/apply/thinkman.svg";
import { OneButton } from "../buttons/OneButton";
import { motion } from "framer-motion";

const modalVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { y: "100%", opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
};

export const FilteringExplainModal = ({ onClose }) => {
  return (
    <S.Wrapper
      as={motion.div}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
    >
      <S.CloseBack onClick={onClose}/>

      <S.ModalContent>
        <S.Icon24 src={modalX} onClick={onClose}/>  
        <S.thinkEmoji src={thinkman}/>
        <S.Title>말투 필터링</S.Title>
        <S.SemiTitle>자세히 알아보기</S.SemiTitle>
        <S.Contents>말투 필터링 기능은<br />말투에 따른 사용자의 성별, 연령, 성격 등의 세그먼트 유추를 <br />최소화하기 위한 CARDO만의 AI 필터링 서비스에요.<br /><br />해당 경험의 선배가 어떤 사람이든지에 관계없이 오로지 자신이 ‘끌리는’ 경험에만 집중해 고를 수 있다는 장점이 있어요.<br /><br />사용자가 어떠한 말투로 내용을 입력하든<br />모든 내용은 ‘~해요'체로 변환되어 등록되는 점 참고해주세요.<br /><br />CARDO와 함께 소중한 경험 만들기를 응원해요.</S.Contents>
        <OneButton onClose={onClose} Content="확인했어요"></OneButton>
      </S.ModalContent>
    </S.Wrapper>
  )
}