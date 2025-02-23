import * as S from "./styled";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ExplainBox } from "@components/common/explainbox/ExplainBox";
import default_image from "/images/apply/cards/default.svg";
import { Footer } from "@components/layout/footer/footer1/Footer";
import { ChoiceModal } from "@components/common/choicemodal/ChoiceModal";
import { UserExplain } from "@components/common/userexplain/UserExplain";
import { InputAndTitle } from "@components/common/inputs/inputandtitle/InputAndTitle";

import { useSelect } from "@hooks/useSelect";
import hint from "/images/apply/hint.svg";
import plus from "/images/apply/plus.svg";
import leftArrow from "/images/select/leftArrow.svg";
import rightArrow from "/images/select/rightArrow.svg";

const CustomPrevArrow = ({ onClick }) => (
  <S.PrevArrow onClick={onClick}>
    <img src={leftArrow} alt="이전" />
  </S.PrevArrow>
);

const CustomNextArrow = ({ onClick }) => (
  <S.NextArrow onClick={onClick}>
    <img src={rightArrow} alt="다음" />
  </S.NextArrow>
);

export const SelectPage = () => {
  const { SelectData, SelectHandlers } = useSelect();

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    dots: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    initialSlide: 1,
    afterChange: (index) => SelectData.setSelectedCard(SelectData.cards[index]),
  };


  return (
    <S.Wrapper>
      {SelectData.step === 1 && (
        <>
          <ExplainBox 
            explainTitle="경험 카드가 도착했어요."
            subTitle={["3장의 카드를 확인하고, 내가 할 경험을 골라봐요.", "클릭을 통해 카드를 뒤집어보세요."]}
          />

          <S.StyledSlider {...sliderSettings}>
            {SelectData.cards.map((card, index) => (
              <S.CardContainer key={card.id}>
                <S.CardInner $isFlipped={SelectData.flipped[index]} onClick={() => SelectHandlers.handleFlip(index)}>
                  {/* 카드 앞면 */}
                  <S.CardFace className="front">
                    <S.ImageContainer>
                      <S.Image src={default_image} />
                      <S.IconBox $background={card.backgroundColor}>
                        <S.SelectEmoji>{card.emoji}</S.SelectEmoji>
                      </S.IconBox>
                    </S.ImageContainer>
                  </S.CardFace>

                  {/* 카드 뒷면 */}
                  <S.CardFace className="back">
                    <S.ImageContainer>
                      <S.Image src={default_image} />
                      <S.BackTitle $background={card.backgroundColor}>{card.title}</S.BackTitle>
                      <S.BackDescription>{card.description}</S.BackDescription>
                    </S.ImageContainer>
                  </S.CardFace>
                </S.CardInner>
              </S.CardContainer>
            ))}
          </S.StyledSlider>

          <Footer 
            content="선택하기"
            isSignupEnabled={true}
            onSignupClick={SelectHandlers.handleSelect}
          />

          {SelectData.isModalOpen && (
            <ChoiceModal
              type={2}
              ContentTitle={"혼자 여행 떠나기"}
              ContentSemiTitle={"경험을 시작할까요?"}
              ContentContent={["해당 경험 완료 전까지", "다른 경험은 선택 및 열람이 불가능해요."]}
              LeftOnClick={SelectHandlers.handleCloseModal}
              LeftContent="취소"
              RightOnClick={SelectHandlers.handleStart}
              RightContent="시작하기"
            />
          )}
        </>
      )}

      {SelectData.step === 2 && (
        <>
          <S.ArrowBack onClick={SelectHandlers.goToPrevStep}></S.ArrowBack>
          <ExplainBox 
            explainTitle={SelectData.selectedCard?.title}
            subTitle={["경험 선배는 이랬어요."]}
          />
          <S.UserCard
            $Color = {SelectData.selectedCard.backgroundColor}
          >
            <S.Icon46>{SelectData.selectedCard.emoji}</S.Icon46>
            <UserExplain 
              titleValue={SelectData.selectedCard.title}
              contentValue={SelectData.selectedCard.description}            
            />

           {SelectData.selectedCard?.extra.map((item) => (
              <UserExplain 
                key={item.id} // ✅ React의 key 설정
                titleValue={item.title} // ✅ extra의 title
                contentValue={item.content} // ✅ extra의 content
              />
            ))}
          </S.UserCard>
          <Footer 
            content="선택하기"
            isSignupEnabled={true}
            onSignupClick={SelectHandlers.goToNextStep}
          />
        </>
      )}

      {SelectData.step === 3 && (
        <>
          <S.ArrowBack onClick={SelectHandlers.goToPrevStep}></S.ArrowBack>
          <ExplainBox 
            explainTitle={SelectData.selectedCard?.title}
            subTitle={["경험을 준비해봐요."]}
          />
          <S.ContentWrap>
          <S.Line 
            $color={"#D9D9D9"}
          />
          <S.R16>원하는 카드 표지를 선택해주세요.</S.R16>
          </S.ContentWrap>
          <S.ColorList>
            {SelectData.backgroundColors.map((color) => (
              <S.ColorOption 
                key={color} 
                color={color} 
                $isSelected={SelectData.selectedBackgroundColor === color}
                onClick={() => SelectHandlers.handleBackgroundColorChange(color)}
              />
            ))}
          </S.ColorList>
          <S.ContentWrap>
            <S.SB16>목표 기간</S.SB16>
            <S.R14>현재 일정이나 상황을 고려해 알맞은 기한을 정해요.</S.R14>

            <S.DatePickerWrapper>
              <S.StyledInput 
                type="date" 
                value={SelectData.startDate} 
                onChange={(e) => SelectHandlers.setStartDate(e.target.value)} 
              />
              <S.Dash>—</S.Dash>
              <S.StyledInput 
                type="date" 
                value={SelectData.endDate} 
                onChange={(e) => SelectHandlers.setEndDate(e.target.value)} 
              />
            </S.DatePickerWrapper>

            <S.Line
            $color={"#000"}
            />
          </S.ContentWrap>
          <S.R16
            $isMargin={true}
          >경험을 시작하기 전 다양한 계획과 기록을 남겨봐요.</S.R16> 

          {/* 추가 입력 필드 */}
          {SelectData.extraInputs.map((input) => (
            <S.inputWrap key={input.id}>
              <InputAndTitle
                isDynamic={true}
                titleValue={input.title}
                placeholder="내용을 입력해주세요."
                inputValue={input.content}
                onTitleChange={(e) => SelectHandlers.handleExtraInputChange(input.id, "title", e.target.value)}
                onInputChange={(e) => SelectHandlers.handleExtraInputChange(input.id, "content", e.target.value)}
                maxLength={100}
              >
              </InputAndTitle>
              {/* <S.RemoveButton onClick={() => SelectHandlers.handleRemoveInput(input.id)}>삭제</S.RemoveButton> */}
            </S.inputWrap>
          ))}

          {/* 추가 버튼 (최대 3개까지) */}
          {SelectData.extraInputs.length < 3 && (
            <>
              <S.AddButton onClick={() => SelectHandlers.handleAddInput("")}>
                <S.Icon24 src={plus}/>
              </S.AddButton>

              <S.ExampleContainer>
                {SelectData.titleExamples.map((example, index) => (
                  <S.ExampleButton 
                  key={`example-${index}`}
                    onClick={() => SelectHandlers.handleExampleClick(example)}
                  >
                    {example}
                  </S.ExampleButton>
                ))}
              </S.ExampleContainer>
            </>
          )}
          <Footer 
            content={"시작하기"}
            isSignupEnabled={SelectData.isExpStartEnabled}
            onSignupClick={SelectHandlers.handleStartClick}
          />
        </>
      )}
      
    </S.Wrapper>
  );
};