import styled from "styled-components";

export const Icon24 = styled.img`
  width: 24px;
`;

export const AddButton = styled.button`
  width: 100%;
  height: 3.25rem; /* 52px */
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  cursor: pointer;
`;

export const ExampleContainer = styled.div`
  display: flex;
  width: 85%;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0 7rem 0;
`;

export const ExampleButton = styled.button`
  background: ${({ theme }) => theme.colors.lightbluegray};
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 10px;
  padding: 12px 14px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.grayback};
    color: ${({ theme }) => theme.colors.graytext};
    border: 1px solid ${({ theme }) => theme.colors.graytext};
  }
`;

export const inputWrap = styled.div`
  display: flex;
  width: calc(100% + 60px);
  margin-left: -30px;
`;
