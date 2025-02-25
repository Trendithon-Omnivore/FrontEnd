import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  left:0;
  bottom: 0;
  width: 100%;
  height: 326px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  background: url("/images/signup/modalback.png") no-repeat center / cover;

  border-radius: 40px 40px 0 0;
`;

export const NoticeBox = styled.div`
  margin-bottom: 30px;
`;

export const Notice = styled.div`
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.fonts.PretendardSB};
  font-size: 20px;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.5px;
`;


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 4rem;

  position: absolute;
  bottom: 1rem;

  border-radius: 4rem;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  ${({ theme }) => theme.fonts.PretendardSB};
  font-size: 16px;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.4px;
`;

export const Images = styled.img`
  width: 61px;
  height: 61px;
`;