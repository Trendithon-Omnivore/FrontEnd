import * as S from "./styled";
import { useState } from "react";
import tofilter from "/images/apply/tofilter.svg";
import hint from "/images/apply/hint.svg";
import plus from "/images/apply/plus.svg";
import default_image from "/images/apply/cards/default.svg";

import { useApply } from "@hooks/useApply";
import useCustomNavigate from "@hooks/useCustomNavigate";
import { ExplainBox } from "@components/common/explainbox/ExplainBox";
import { IconInput } from "@components/common/inputs/iconinput/IconInput";
import { InputAndTitle } from "@components/common/inputs/inputandtitle/InputAndTitle";
import { FilteringExplainModal } from "@components/common/filteringexplainmodal/FIlteringExplainModal";
import { Footer } from "@components/layout/footer/footer1/Footer";
import { ChoiceModal } from "@components/common/choicemodal/ChoiceModal";

export const ApplyPage = () => {
  const { ApplyData, ApplyHandlers } = useApply();
  const { goToPage } = useCustomNavigate();
  const [isFlipped, setIsFlipped] = useState(false);

  const [step, setStep] = useState(1);
  const goToNextStep = () => setStep((prev) => prev + 1);
  const goToPrevStep = () => setStep((prev) => prev - 1);

  const handleCardFlip = () => setIsFlipped((prev) => !prev);

  const titleExamples = ["하고 싶은 말", "팁", "가이드", "실행 동기", "내가 성장한 부분"];

  const handleExampleClick = (exampleTitle) => {
    ApplyHandlers.handleAddInput(exampleTitle);
  };

  return (
    <S.Wrapper>
      {step === 1 && (
        <>
          <ExplainBox 
            explainTitle="경험 카드 등록"
            subTitle={["작성해주신 내용은 사용자 배경 유추가 불가하게", "기본 말투로 필터링되어 노출될 예정이에요."]}
          />
          <S.ToFiltering onClick={ApplyHandlers.handleModalToggling}>
            말투 필터링에 대해 자세히 알아보기 <S.tofilter src={tofilter}/>
          </S.ToFiltering>
          <S.ApplyHint><S.Icon20 src={hint}/>경험 작성이 어렵다면?</S.ApplyHint>

          <IconInput 
            selectedEmoji={ApplyData.selectedEmoji}
            showPicker={ApplyData.showPicker}
            onIconClick={ApplyHandlers.handleIconClick}
            onEmojiClick={ApplyHandlers.handleEmojiClick}
          />

          <InputAndTitle 
            title="제목"
            placeholder="'00하기'의 형식으로 작성해주세요."
            inputValue={ApplyData.titleValue} 
            onInputChange={ApplyHandlers.handleTitleChange} 
            maxLength={25} 
          />

          <InputAndTitle 
            title="설명"
            placeholder="이 경험에 대하여 자세히 설명해주세요."
            inputValue={ApplyData.descriptionValue} 
            onInputChange={ApplyHandlers.handleDescriptionChange} 
            maxLength={100} 
          />

          <S.Line />
          <ExplainBox 
            subTitle={[
              "경험 후배가 더 풍부한 경험을 할 수 있도록",
              "더 자세한 내용을 추가해보세요."
            ]}
          />
          <S.Margin />

          {/* 추가 입력 필드 */}
          {ApplyData.extraInputs.map((input) => (
            <S.inputWrap key={input.id}>
              <InputAndTitle
                isDynamic={true}
                titleValue={input.title}
                placeholder="내용을 입력해주세요."
                inputValue={input.content}
                onTitleChange={(e) => ApplyHandlers.handleExtraInputChange(input.id, "title", e.target.value)}
                onInputChange={(e) => ApplyHandlers.handleExtraInputChange(input.id, "content", e.target.value)}
                maxLength={100}
              >
              </InputAndTitle>
              {/* <S.RemoveButton onClick={() => ApplyHandlers.handleRemoveInput(input.id)}>삭제</S.RemoveButton> */}
            </S.inputWrap>
          ))}

          {/* 추가 버튼 (최대 3개까지) */}
          {ApplyData.extraInputs.length < 3 && (
            <>
              <S.AddButton onClick={() => ApplyHandlers.handleAddInput("")}>
                <S.Icon24 src={plus}/>
              </S.AddButton>

              <S.ExampleContainer>
                {titleExamples.map((example, index) => (
                  <S.ExampleButton 
                  key={`example-${index}`}
                    onClick={() => handleExampleClick(example)}
                  >
                    {example}
                  </S.ExampleButton>
                ))}
              </S.ExampleContainer>
            </>
          )}

          <Footer 
            content="계속하기"
            isSignupEnabled={ApplyData.isApplyEnabled}
            onSignupClick={goToNextStep}
          />

          {ApplyData.isModalOpen && 
            <FilteringExplainModal onClose={ApplyHandlers.handleModalToggling} />
          }
        </>
      )}
      
      {step === 2 && (
        <>
          <S.ArrowBack onClick={goToPrevStep}></S.ArrowBack>
          <ExplainBox 
            explainTitle="경험 카드 등록"
            subTitle={[
              "원하는 카드 표지를 선택해주세요."
            ]}
          />
          <S.ColorList>
            {ApplyData.backgroundColors.map((color) => (
              <S.ColorOption 
                key={color} 
                color={color} 
                $isSelected={ApplyData.selectedBackgroundColor === color}
                onClick={() => ApplyHandlers.handleBackgroundColorChange(color)}
              />
            ))}
          </S.ColorList>

          <S.ImageContainer >
            <S.Image80 src={default_image}/>
            <S.IconBox
              $background={ApplyData.selectedBackgroundColor}
            ><S.SelectEmoji>{ApplyData.selectedEmoji}</S.SelectEmoji></S.IconBox>
          </S.ImageContainer>
          <Footer 
            content="선택하기" 
            isSignupEnabled={ApplyData.isApplyEnabled}
            onSignupClick={goToNextStep} 
          />
        </>
      )}

      {step === 3 && (
        <>
          <S.ArrowBack onClick={goToPrevStep}></S.ArrowBack>
          <ExplainBox 
            explainTitle="나의 경험 카드"
            subTitle={[
              "작성해주신 내용은",
              "사용자들에게 이렇게 보여져요.",
              "클릭을 통해 카드를 뒤집어보세요.",
            ]}
          />

          <S.CardContainer >
            <S.CardInner onClick={handleCardFlip} $isFlipped={isFlipped}>
              {/* 카드 앞면 */}
              <S.CardFace className="front">
                <S.ImageContainer>
                  <S.Image src={default_image} />
                  <S.IconBox $background={ApplyData.selectedBackgroundColor}>
                    <S.SelectEmoji>{ApplyData.selectedEmoji}</S.SelectEmoji>
                  </S.IconBox>
                </S.ImageContainer>
              </S.CardFace>

              {/* 카드 뒷면 */}
              <S.CardFace className="back">
                <S.ImageContainer>
                  <S.Image src={default_image} />
                  <S.BackTitle $background={ApplyData.selectedBackgroundColor}>{ApplyData.titleValue}</S.BackTitle>
                  <S.BackDescription>{ApplyData.descriptionValue}</S.BackDescription>
                </S.ImageContainer>
              </S.CardFace>
            </S.CardInner>
          </S.CardContainer>

          <Footer 
            content="등록하기"
            isSignupEnabled={ApplyData.isApplyEnabled}
            onSignupClick={ApplyHandlers.handleApply} 
          />
        </>
      )}
      {ApplyData.isApplySuccess && (
        <ChoiceModal 
          type={1}
          ContentTitle={["한라산 등반하기"]}
          ContentSemiTitle="경험카드를 등록했어요"
          LeftOnClick={() => goToPage("/main")}
          LeftContent="메인으로"
          RightOnClick={() => goToPage("/select")}
          RightContent="다른카드 열람하기"
        />
      )}
    </S.Wrapper>
  );
};