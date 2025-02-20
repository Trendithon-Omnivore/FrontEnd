import * as S from "./styled";
import Left from "/images/main/Left.svg";
import Right from "/images/main/Right.svg";
import Arrow from "/images/main/Arrow.svg";
import useCustomNavigate from "@hooks/useCustomNavigate";

export const MainPage = () => {
  const { goToPage } = useCustomNavigate();
  return (
    <S.Wrapper>
      <S.NoticeGroup>
      <S.NoticeImage src={Left}/>
      <S.Noticecontext>
        <S.NoticeContent1>다른 경험을 만나보기 전</S.NoticeContent1>
        <S.NoticeContent2>새로운 경험 카드를 작성해요</S.NoticeContent2>
      </S.Noticecontext>
      <S.NoticeImage src={Right}/>
      </S.NoticeGroup>
      <S.CardSubmit>
        <S.CardSubmitContent
          onClick={() => goToPage("/apply")}
        >내 경험 카드 등록하기</S.CardSubmitContent>
        <S.CardSubmitArrow src={Arrow} />
      </S.CardSubmit>

      <S.NoticeGroup>
      <S.NoticeImage src={Left}/>
      <S.Noticecontext>
        <S.NoticeContent1>확인하지 않은</S.NoticeContent1>
        <S.NoticeContent2>경험카드 3장이 있어요</S.NoticeContent2>
      </S.Noticecontext>
      <S.NoticeImage src={Right}/>
      </S.NoticeGroup>
      <S.CardSubmit>
        <S.CardSubmitContent
          onClick={() => goToPage("/select")}
        >다른 경험 카드 열람하기</S.CardSubmitContent>
        <S.CardSubmitArrow src={Arrow} />
      </S.CardSubmit>
      <S.SubTitle>경험의 가치를 알아봐요</S.SubTitle>
    </S.Wrapper>
  )
}