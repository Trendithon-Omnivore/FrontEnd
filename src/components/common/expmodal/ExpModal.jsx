import * as S from "./styled";
import { motion } from "framer-motion";

import modalX from "/images/apply/modalX.svg";
import thinkman from "/images/apply/pencil.svg";
import { OneButton } from "../buttons/OneButton";
import frame1 from "/images/apply/frame1.svg";
import frame2 from "/images/apply/frame2.svg";
import frame3 from "/images/apply/frame3.svg";

const modalVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { y: "100%", opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
};

export const ExpModal = ({ onClose }) => {
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
        <S.Title>경험 작성</S.Title>
        <S.SemiTitle>이렇게 해봐요</S.SemiTitle>
        <S.Stairs>
          <S.StairTitleB>01</S.StairTitleB>
          <S.StairTitle>공유할 만한 경험을 선정해요</S.StairTitle>
        </S.Stairs>
        <S.Stairs>
          <S.StairTitleB>02</S.StairTitleB>
          <S.StairTitle>경험에 어울리는 아이콘을 골라봐요</S.StairTitle>
          <S.StairSemiTitle>아이콘은 경험 카드 표지에 노출돼요</S.StairSemiTitle>
          <S.Image src={frame1}/>
        </S.Stairs>
        <S.Stairs>
          <S.StairTitleB>03</S.StairTitleB>
          <S.StairTitle>경험의 제목과 간단한 설명을 작성해요</S.StairTitle>
          <S.Image src={frame2}/>
          <S.Image src={frame3}/>
        </S.Stairs>
        <OneButton onClose={onClose} Content="확인했어요"></OneButton>
      </S.ModalContent>
    </S.Wrapper>
  )
}