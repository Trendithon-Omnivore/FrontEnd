import React, { useRef, useState, useEffect } from 'react';
import card_img_r from '../../assets/icons/history/card_img_r.svg'
import card_img_l from '../../assets/icons/history/card_img_l.svg'
import full_star from '../../assets/icons/history/full_star.svg'
import half_star from '../../assets/icons/history/half_star.svg'
import empty_star from '../../assets/icons/history/empty_star.svg'
import myicon from '../../assets/icons/history/myicon.svg'

const HistoryUpload = () => {
        const [starRatings, setStarRatings] = useState(['empty', 'empty', 'empty', 'empty', 'empty']);
    
    const autoResizeTextarea = (e) => {
        let textarea = document.querySelector('.after_text');

        if (textarea) {
            textarea.style.height = 'auto';
            let height = textarea.scrollHeight; // 높이
            textarea.style.height = `${height + 8}px`;
        }
    };
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
    return (
        <div className='history_detail_page_container'>
            <div className="top_card_div">
                <img src={card_img_l} className="card_img" />
                <div className="text_div">
                    <p className="top">내가 기록한</p>
                    <p className="bottom">혼자 여행 떠나기</p>
                </div>
                <img src={card_img_r} className="card_img" />
            </div>
            <div className="icon">
                <img src={myicon} alt="" className="icon_img" />
            </div>
            <div className="score_div">
                <div className="top_div">
                    <p className="title">경험점수</p>
                    <div className="right">
                        <p className="title">4.5</p>
                        <p className="total">/ 5.00</p>
                    </div>
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
            <div className="title_div">
                <p className="title">제목</p>
                <input type="text" className='feel' placeholder='이 경험의 제목을 작성해주세요.' />
            </div>
            <div className="after_div">
                <p className="title">설명</p>
                <textarea className='after_text' rows={1} onChange={autoResizeTextarea}>

                </textarea>
            </div>
            <div className="history_detail_bottom_div">
                <div className="next_btn">수정하기</div>
            </div>

        </div>
    )
}

export default HistoryUpload