import * as S from "./styled.js";
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import card_img_r from '../../assets/icons/history/card_img_r.svg'
import card_img_l from '../../assets/icons/history/card_img_l.svg'
import full_star from '../../assets/icons/history/full_star.svg'
import half_star from '../../assets/icons/history/half_star.svg'
import empty_star from '../../assets/icons/history/empty_star.svg'
import plus from "/images/apply/plus.svg";
import { InputAndTitle } from "@components/common/inputs/inputandtitle/InputAndTitle";
import { useSelect } from "@hooks/useSelect";
import { instance } from '../../services/instance';

const HomeWrite = () => {
    const navigate = useNavigate();
    const { SelectData, SelectHandlers } = useSelect();
    const [starRatings, setStarRatings] = useState(['empty', 'empty', 'empty', 'empty', 'empty']);
    const today = new Date().toISOString().split('T')[0];
    const [uploadedImages, setUploadedImages] = useState([]);
    const [feelingText, setFeelingText] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState(today);
    const [isFormValid, setIsFormValid] = useState(false);
    // 숨겨진 input에 접근하기 위한 Ref 생성
    const fileInputRef = useRef(null);

    const handleStarClick = (index) => {
        const updatedStars = [...starRatings];

        // 현재 별이 비어있거나 반만 채워진 상태라면 상태 업데이트
        if (starRatings[index] === 'empty') {
            updatedStars[index] = 'half'; // 첫 번째 클릭 → 반 별
        } else if (starRatings[index] === 'half') {
            updatedStars[index] = 'full'; // 두 번째 클릭 → 전체 별
        } else {
            // 별이 전체 별일 경우, 뒤에 별 초기화
            for (let i = index; i < updatedStars.length; i++) {
                updatedStars[i] = 'empty';
            }
        }

        // 이전 별들 모두 full_star로 설정
        for (let i = 0; i < index; i++) {
            updatedStars[i] = 'full';
        }

        setStarRatings(updatedStars);
    };

    const calculateScore = () => {
        let score = 0;
        starRatings.forEach((rating) => {
          if (rating === 'full') score += 1;
          else if (rating === 'half') score += 0.5;
        });
        return score;
      };

    const handleImageUpload = (event) => {
        const files = event.target.files;
        const newImages = [];

        // 선택한 파일들을 배열로 변환
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();

            reader.onloadend = () => {
                setUploadedImages((prevImages) => [...prevImages, reader.result]);
            };

            reader.readAsDataURL(file);
        }
    };
    const handleDivClick = () => {
        fileInputRef.current.click();
    };

    // 사진 삭제 핸들러
    const handleRemoveImage = (index) => {
        setUploadedImages((prevImages) =>
            prevImages.filter((_, imgIndex) => imgIndex !== index)
        );
    };
    useEffect(() => {
        const hasFullStars = starRatings.some((rating) => rating !== 'empty');
        const isDateValid = startDate !== '' && endDate !== '';
        const hasFeelingText = feelingText.trim() !== '';
        const hasImages = uploadedImages.length > 0;
    
        if (hasFullStars && isDateValid && hasFeelingText && hasImages) {
          setIsFormValid(true);
        } else {
          setIsFormValid(false);
        }
      }, [starRatings, startDate, endDate, feelingText, uploadedImages]);

    const GotoDone = () => {
        navigate('/history_detail');
    }
    const handleSubmit = async () => {
        const formData = new FormData();
        const score = calculateScore();
    
        // ✅ 리뷰 정보 추가
        formData.append(
          'createReviewRequest',
          JSON.stringify({
            experienceId: 1, // 경험 ID (필요 시 동적으로 설정)
            score: score,
            endDate: endDate,
            content: feelingText,
          })
        );
    
        // ✅ 이미지 파일 추가
        uploadedImages.forEach((img) => {
          formData.append('images', img.file);
        });
    
        try {
          const response = await instance.post('/reviews', formData, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          if (response.status === 200) {
            alert('리뷰가 성공적으로 등록되었습니다.');
            navigate('/history_detail');
          }
        } catch (error) {
          console.error('리뷰 등록 실패:', error);
        }
      };

    return (
        <div className='home_write_container'>
            <p className="page_root">홈 &gt; 기록하기</p>
            <div className="top_card_div">
                <img src={card_img_l} className="card_img" />
                <div className="text_div">
                    <p className="top">내가 따라한</p>
                    <p className="bottom">혼자 여행 떠나기</p>
                </div>
                <img src={card_img_r} className="card_img" />
            </div>
            <div className="score_div">
                <div className="top_div">
                    <p className="title">경험점수</p>
                    <p className="info">위의 경험을 하면서 느낀 총체적인 점수를 매겨주세요</p>
                </div>
                <div className="star_div">
                    {starRatings.map((rating, index) => {
                        let starSrc = empty_star;
                        if (rating === 'half') starSrc = half_star;
                        else if (rating === 'full') starSrc = full_star;

                        return (
                            <img
                                key={index}
                                src={starSrc}
                                className="score_star"
                                alt={`${rating} star`}
                                onClick={() => handleStarClick(index)}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="date_div">
                <div className="top_div">
                    <p className="title">경험 기간</p>
                    <p className="info">목표 기간이 아닌, 실제로 경험을 진행한 기간을 입력해주세요</p>
                </div>
                <div className="calender">
                    <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
                    <hr />
                    <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
                </div>
            </div>
            <div className="feel_div">
                <p className="title">느낀 점</p>
                <input type="text" className='feel' placeholder='이 경험에서 느낀 점을 자세히 작성해주세요.' value={feelingText}
          onChange={(e) => setFeelingText(e.target.value)}/>
                <div className="img_slide_div">
                    <p className="info">↓ 사진을 추가해보세요</p>
                    <div className="img_div">
                        <div className="img_plus" onClick={handleDivClick}>
                            <img src={plus} className="plus" />
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                onChange={handleImageUpload}
                            />

                        </div>
                        {uploadedImages.map((image, index) => (
                            <div key={index} className="uploaded_image">
                                <img src={image} onClick={() => handleRemoveImage(index)} alt={`Uploaded ${index}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <hr className='separate_line' />
            <p className="info_text">경험을 시작하기 전 다양한 계획과 기록을 남겨봐요.</p>
            <div className="add_div">
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
                            {SelectData.writetitleExamples.map((example, index) => (
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
            </div>

            <div className="history_detail_bottom_div">
                <div className={`next_btn ${isFormValid ? 'active' : 'inactive'}`} onClick={isFormValid ? handleSubmit : null}>등록하기</div>
            </div>

        </div>
    )
}

export default HomeWrite