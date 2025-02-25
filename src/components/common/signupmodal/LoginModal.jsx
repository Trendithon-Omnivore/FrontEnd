import * as S from "./styled";
import useCustomNavigate from "@hooks/useCustomNavigate";
import image from "/images/signup/check.svg";

import { motion } from "framer-motion";

const modalVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { y: "100%", opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
};

export const LoginModal = () => {
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
        <S.Notice>로그인 완료!</S.Notice>
      </S.NoticeBox>
      <S.Container onClick={() => goToPage("/main")}>
        시작하기
      </S.Container>
    </S.Wrapper>
  );
};