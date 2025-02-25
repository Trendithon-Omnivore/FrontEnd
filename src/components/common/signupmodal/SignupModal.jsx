import * as S from "./styled";
import useCustomNavigate from "@hooks/useCustomNavigate";
import image from "/images/signup/check.svg";
import { motion } from "framer-motion";

const modalVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { y: "100%", opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
};

export const SignupModal = () => {
  const { goToPage } = useCustomNavigate();
  return (
    <S.Wrapper
      as={motion.div}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
    >
      <S.Images src={image} />
      <S.NoticeBox>
        <S.Notice>CARDO의 회원이 되신걸</S.Notice>
        <S.Notice>환영해요</S.Notice>

      </S.NoticeBox>
      <S.Container
        onClick={() => goToPage("/login")}
      >로그인하기</S.Container>
    </S.Wrapper>
  )
}
