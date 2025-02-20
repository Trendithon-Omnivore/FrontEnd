import * as S from "./styled";

export const ExplainBox = ({ explainTitle, subTitle }) => {

  return (
    <S.ExplainBox>
      {explainTitle && <S.ExplainTitle>{explainTitle}</S.ExplainTitle>}
      {Array.isArray(subTitle) ? (
        subTitle.map((line, index) => (
          <S.ExplainSubTitle key={index}>{line}</S.ExplainSubTitle>
        ))
      ) : (
        <S.ExplainSubTitle>{subTitle}</S.ExplainSubTitle> // 🛠 문자열이면 그냥 출력
      )}

    </S.ExplainBox>
  );
};