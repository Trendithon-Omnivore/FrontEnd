import * as S from "./styled";
import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import Left from "/images/main/Left.svg";
import Right from "/images/main/Right.svg";
import Arrow from "/images/main/Arrow.svg";
import warning from "/images/main/warning.svg";
import Calendar from "/images/main/Calendar.svg";
import useCustomNavigate from "@hooks/useCustomNavigate";
import { MainFooter } from "@components/layout/footer/mainfooter/MainFooter";
import { UserService } from "@services/UserService";
import { ExperienceService } from "@services/ExperienceService";
import { ChoiceModal } from "@components/common/choicemodal/ChoiceModal";

const youtubeVideos = [
  { id: "GpNCT9ZSZPk", title: "Rick Astley - Never Gonna Give You Up" },
  { id: "9FoS-z3vIDI", title: "Queen - Bohemian Rhapsody" },
];
const books = [
  { cover: "/images/books/book1.svg", title: "모두의 알고리즘" },
  { cover: "/images/books/book2.svg", title: "클린 코드" },
];

export const MainPage = () => {
  const { goToPage } = useCustomNavigate();

  const [userState, setUserState] = useState(null); 
  const [experience, setExperience] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [dDayText, setDDayText] = useState("");
  const [randomSlides, setRandomSlides] = useState([]);

  useEffect(() => {
    const getUserState = async () => {
      try {
        const data = await UserService.fetchUserState();
        console.log("✅ API 응답 데이터:", data.state);
        setUserState(data.state);

        if (data.state === true) {
          await fetchUserExperience();
        }
      } catch (error) {
        console.error("🚨 API 호출 실패");
      }
    };

    const fetchUserExperience = async () => {
      try {
        const expData = await ExperienceService.getUserExperience();
        if (expData.success) {
          setExperience(expData);
          calculateDDay(expData.endDate);
        } else {
          console.warn("🚨 경험 조회 실패:", expData.message);
        }
      } catch (error) {
        console.error("🚨 경험 데이터 불러오기 실패:", error);
      }
    };

    getUserState();
  }, []);

  const handleQuitExperience = async () => {
    try {
      console.log("📡 경험 종료 요청 중...");
      const response = await ExperienceService.quitExperience();
      console.log("✅ 경험 종료 성공:", response.data);

      // 경험 종료 후 두 번째 모달 열기
      setIsModalOpen(false);
      setIsModalOpen2(true);
    } catch (error) {
      console.error("🚨 경험 종료 실패:", error.response?.data || error.message);
      alert("경험 종료에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const calculateDDay = (endDate) => {
    const today = new Date();
    const end = new Date(endDate);
    const diff = Math.ceil((end - today) / (1000 * 60 * 60 * 24)); // 날짜 차이 계산
  
    let dDayResult = "";
    if (diff === 0) {
      dDayResult = "D-Day";
    } else if (diff > 0) {
      dDayResult = `D-${diff}`;
    } else {
      dDayResult = "완료됨";
    }
  
    console.log(`📅 경험 종료일: ${endDate}, 오늘: ${today.toISOString().split("T")[0]}, 계산된 D-Day: ${dDayResult}`);
    
    setDDayText(dDayResult);
  };

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    // 📌 유튜브와 책을 하나의 배열로 합친 후 랜덤으로 섞음
    const mixedContent = shuffleArray([...youtubeVideos, ...books]);
    setRandomSlides(mixedContent);
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

      {userState === true && experience && (
        <>
          <S.NoticeGroup
            // $Cover={experience.cover}
          >
            <S.NoticeImage src={Left}/>
            <S.Noticecontext>
              <S.NoticeContent1>현재 도전 중인,</S.NoticeContent1>
              <S.NoticeContent2>{experience.title}</S.NoticeContent2>
            </S.Noticecontext>
            <S.NoticeImage src={Right}/>
          </S.NoticeGroup>

          <S.WarningText
            onClick={() => setIsModalOpen(true)}
          >
            <S.Icon20 src={warning}/>
            현재 경험을 그만두고 싶어요
          </S.WarningText>

          <S.DateWrapper>
            <S.Icon33 src={Calendar}/>
            <S.Dates>
              <S.LeftDate>{experience.startDate}</S.LeftDate>
              <S.RightDate>~ {experience.endDate}</S.RightDate>
            </S.Dates>
            <S.DateBox>{dDayText}</S.DateBox>
          </S.DateWrapper>
          <S.CardSubmitSet>
            <S.CardSubmit
              onClick={() => goToPage("/home_check")}
            >
              <S.CardSubmitContent>확인하기</S.CardSubmitContent>
              <S.CardSubmitArrow src={Arrow} />
            </S.CardSubmit>
            <S.CardSubmit
              onClick={() => goToPage("/home_write")}
            >
              <S.CardSubmitContent>기록하기</S.CardSubmitContent>
              <S.CardSubmitArrow src={Arrow} />
            </S.CardSubmit>
          </S.CardSubmitSet>

        </>
      )}

      <S.SubTitle>경험의 가치를 알아봐요</S.SubTitle>

      <S.SliderContainer>
        {randomSlides.map((item, index) => (
          <S.SlideItem key={index} $type={item.id ? "youtube" : "book"}>
            {item.id ? (
              // 📌 유튜브 영상
              <YouTube videoId={item.id} opts={{ width: "100%", height: "120px" }} />
            ) : (
              // 📌 책 표지
              <>
                <S.BookCover src={item.cover} alt={item.title} />
              </>
            )}
          </S.SlideItem>
        ))}
      </S.SliderContainer>

      {isModalOpen && (
        <ChoiceModal
          type={3}
          onClose={() => setIsModalOpen(false)}
          ContentTitle={""}
          ContentSemiTitle={["CARDO의 방침은", "한 번 세운 계획은 끝까지 실천하는 거예요.", "..", "하지만 새로운 경험 카드를 작성하면", "다시 3장의 카드를 만날 수 있는 기회를 제공해요!"]}
          LeftOnClick={() => setIsModalOpen(false)}
          LeftContent="취소"
          RightOnClick={handleQuitExperience}
          RightContent="그만두기"
        />
      )}

      {isModalOpen2 && (
        <ChoiceModal
          type={4}
          onClose={() => {
            if (window.location.pathname === "/main") {
              window.location.reload(); // ✅ 강제 새로고침
            } else {
              goToPage("/main"); // ✅ 다른 페이지라면 main으로 이동
            }
          }}
          ContentTitle={"현재 진행 중인 경험을 그만두시겠어요?"}
          ContentSemiTitle={"이 경험을 종료하면 다시 선택할 수 없어요."}
          ContentContent={["'취소'를 원하시면 팝업창을 닫아주세요!"]}
          LeftOnClick={() => {
            if (window.location.pathname === "/main") {
              window.location.reload(); // ✅ 강제 새로고침
            } else {
              goToPage("/main"); // ✅ 다른 페이지라면 main으로 이동
            }
          }}
          LeftContent="메인으로"
          RightOnClick={() => goToPage("/apply")}
          RightContent="새 카드 등록하기"
        />
      )}
      <MainFooter />
    </S.Wrapper>
  )
}