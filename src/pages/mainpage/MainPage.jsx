import * as S from "./styled";
import { useState, useEffect } from "react";
import Left from "/images/main/Left.svg";
import Right from "/images/main/Right.svg";
import Arrow from "/images/main/Arrow.svg";
import useCustomNavigate from "@hooks/useCustomNavigate";
import { UserService } from "@services/UserService";

export const MainPage = () => {
  const { goToPage } = useCustomNavigate();

  const [userState, setUserState] = useState(null); // 받아온 state 저장

  useEffect(() => {
    const getUserState = async () => {
      try {
        const data = await UserService.fetchUserState();
        console.log("✅ API 응답 데이터:", data.state);
        setUserState(data.state); // `state` 값 저장
      } catch (error) {
        console.error("🚨 API 호출 실패");
      }
    };

    getUserState();
  }, []);

  return (
    <S.Wrapper>
      {userState === null && (
        <>
          <S.NoticeGroup>
            <S.NoticeImage src={Left}/>
            <S.Noticecontext>
              <S.NoticeContent1>다른 경험을 만나보기 전</S.NoticeContent1>
              <S.NoticeContent2>새로운 경험 카드를 작성해요</S.NoticeContent2>
            </S.Noticecontext>
            <S.NoticeImage src={Right}/>
          </S.NoticeGroup>
          <S.CardSubmit
            onClick={() => goToPage("/apply")}>
            <S.CardSubmitContent>내 경험 카드 등록하기</S.CardSubmitContent>
            <S.CardSubmitArrow src={Arrow} />
          </S.CardSubmit>
        </>
        
      )}

      {userState === false && (
        <>
          <S.NoticeGroup>
            <S.NoticeImage src={Left}/>
            <S.Noticecontext>
              <S.NoticeContent1>확인하지 않은</S.NoticeContent1>
              <S.NoticeContent2>경험카드 3장이 있어요</S.NoticeContent2>
            </S.Noticecontext>
            <S.NoticeImage src={Right}/>
          </S.NoticeGroup>
          <S.CardSubmit
            onClick={() => goToPage("/select")}
          >
            <S.CardSubmitContent>다른 경험 카드 열람하기</S.CardSubmitContent>
            <S.CardSubmitArrow src={Arrow} />
          </S.CardSubmit>
        </>
      )}

      {userState === true && (
        <>
          <S.NoticeGroup>
            <S.NoticeImage src={Left}/>
            <S.Noticecontext>
              <S.NoticeContent1>현재 도전 중인,</S.NoticeContent1>
              <S.NoticeContent2>혼자 여행 떠나기</S.NoticeContent2>
            </S.Noticecontext>
            <S.NoticeImage src={Right}/>
          </S.NoticeGroup>
          <S.CardSubmit
            onClick={() => goToPage("/select")}
          >
            <S.CardSubmitContent>다른 경험 카드 열람하기</S.CardSubmitContent>
            <S.CardSubmitArrow src={Arrow} />
          </S.CardSubmit>
        </>
      )}
      


      <S.SubTitle>경험의 가치를 알아봐요</S.SubTitle>
    </S.Wrapper>
  )
}