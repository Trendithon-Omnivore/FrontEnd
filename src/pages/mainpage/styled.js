import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const NoticeGroup = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  background: ${({ theme, $Cover }) => $Cover || theme.colors.lightbluegray};
  border-radius: 0 0 50px 50px;
  justify-content: space-evenly;
`;

export const Noticecontext = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

export const NoticeImage = styled.img`
  width: 50px;
`;

export const NoticeContent1 = styled.div`
  ${({ theme }) => theme.fonts.PretendardR};
  font-size: 14px;
`;

export const NoticeContent2 = styled.div`
  ${({ theme }) => theme.fonts.PretendardSB};
  font-size: 16px;
`;

export const CardSubmitSet = styled.div`
  display: flex;
  width: 85%;
  gap: 20px;
`;

export const CardSubmit = styled.div`
  display: flex;
  width: 85%;
  height: 60px;
  justify-content: center;
  align-items: center;
  position: relative;

  border-radius: 25px;
  background: var(--linear, linear-gradient(90deg, #FCFFE1 0%, #FFE7E7 33%, #EFE5FF 66%, #D5DDFF 100%));

  cursor: pointer;
`;

export const CardSubmitContent = styled.div`
  ${({ theme }) => theme.fonts.PretendardSB};
  font-size: 14px;
`;

export const CardSubmitArrow = styled.img`
  width: 24px;
  position: absolute;
  right: 10px;
`;

export const SubTitle = styled.div`
  width: calc(90%);
  ${({ theme }) => theme.fonts.PretendardSB};
  font-size: 16px;
`;

export const Icon20 = styled.img`
  width: 20px;
`;

export const WarningText = styled.div`
  ${({ theme }) => theme.fonts.PretendardR};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.graytext};
  cursor: pointer;
`;

export const DateWrapper = styled.div`
  display: flex;
  width: 85%;;
  position: relative;
  height: 72px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.lightbluegray};
`;

export const Icon33 = styled.img`
  width: 33px;
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
`;

export const Dates = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  left: calc(7% + 33px);
  top: 50%;
  transform: translateY(-50%);
  gap: 4px;
`;

export const LeftDate = styled.div`
  ${({ theme }) => theme.fonts.PretendardR};
  font-size: 12px;
  font-weight: 300;
  display: flex;
  align-items: center;
`;

export const RightDate = styled.div`
  ${({ theme }) => theme.fonts.PretendardR};
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

export const DateBox = styled.div`
  ${({ theme }) => theme.fonts.PretendardR};  
  font-size: 20px;
  font-weight: 500;

  width: 65px;
  height: 36px;

  position: absolute;
  right: calc(7%);
  top: 50%;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;

export const SliderContainer = styled.div`
  display: flex;

  transform: translateY(-20px);
  gap: 15px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  white-space: nowrap;
  width: 85%;
  padding: 10px;
  -webkit-overflow-scrolling: touch; /* iOS 스크롤 부드럽게 */
  
  &::-webkit-scrollbar {
    display: none; /* 스크롤바 숨김 */
  }
`;

export const SlideItem = styled.div`
  flex: 0 0 auto;
  scroll-snap-align: start;
  width: ${({ $type }) => ($type === "youtube" ? "220px" : "160px")};
  text-align: center;
`;

export const SlideTitle = styled.div`
  margin-top: 5px;
  font-size: 14px;
  font-weight: bold;
`;

export const BookCover = styled.img`
  width: 82px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
`;