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
  background: ${({ theme }) => theme.colors.lightbluegray};
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

export const CardSubmit = styled.div`
  display: flex;
  width: 85%;
  height: 60px;
  justify-content: center;
  align-items: center;

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
  right: 30px;
`;

export const SubTitle = styled.div`
  width: calc(90%);
  ${({ theme }) => theme.fonts.PretendardSB};
  font-size: 16px;
`;