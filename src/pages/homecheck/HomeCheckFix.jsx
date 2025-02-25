import * as S from "./styled.js";
import React from 'react'
import { useNavigate } from 'react-router-dom';
import card_img_r from '../../assets/icons/history/card_img_r.svg'
import card_img_l from '../../assets/icons/history/card_img_l.svg'
import plus from "/images/apply/plus.svg";
import { InputAndTitle } from "@components/common/inputs/inputandtitle/InputAndTitle";
import { useSelect } from "@hooks/useSelect";



const HomeCheckFix = () => {
    const navigate = useNavigate();
    const { SelectData, SelectHandlers } = useSelect();

    const GotoDone = () => {
        navigate('/home_check');
    }
    return (
        <div className='home_check_fix_container'>
            <p className="page_root">홈 &gt; 확인하기</p>
            <div className="top_card_div">
                <img src={card_img_l} className="card_img" />
                <div className="text_div">
                    <p className="bottom">혼자 여행 떠나기</p>
                </div>
                <img src={card_img_r} className="card_img" />
            </div>
            <div className="date_div">
                <p className="title">목표 기간</p>
                <div className="calender">
                    <input type="date" name="" id="" />
                    <hr />
                    <input type="date" name="" id="" />
                </div>
            </div>
            <hr className='separate_line' />
            <p className="info_text">경험을 시작하기 전 다양한 계획과 기록을 남겨봐요.</p>

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
                        <S.Icon24 src={plus} />
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

            <div className="history_detail_bottom_div">
                <div className="next_btn" onClick={GotoDone}>완료</div>
            </div>
        </div>
    )
}

export default HomeCheckFix