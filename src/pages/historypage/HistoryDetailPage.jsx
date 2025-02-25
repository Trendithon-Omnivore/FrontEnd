import React from 'react'
import card_img_r from '../../assets/icons/history/card_img_r.svg'
import card_img_l from '../../assets/icons/history/card_img_l.svg'
import full_star from '../../assets/icons/history/full_star.svg'
import half_star from '../../assets/icons/history/half_star.svg'
import empty_star from '../../assets/icons/history/empty_star.svg'

const HistoryDetailPage = () => {
    const autoResizeTextarea = (e) => {
        let textarea = document.querySelector('.after_text');

        if (textarea) {
            textarea.style.height = 'auto';
            let height = textarea.scrollHeight; // 높이
            textarea.style.height = `${height + 8}px`;
        }
    };

    return (
        <div className='history_detail_page_container'>
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
                    <div className="right">
                        <p className="title">4.5</p>
                        <p className="total">/ 5.00</p>
                    </div>
                </div>
                <div className="star_div">
                    <img src={full_star} className="score_star" />
                    <img src={full_star} className="score_star" />
                    <img src={full_star} className="score_star" />
                    <img src={full_star} className="score_star" />
                    <img src={full_star} className="score_star" />
                </div>
            </div>
            <div className="date_div">
                <p className="title">경험 기간</p>
                <div className="calender">
                    <input type="date" value="2025-02-24" />
                    <hr />
                    <input type="date" value="2025-02-25" />
                </div>
            </div>
            <div className="feel_div">
                <p className="title">느낀 점</p>
                <input type="text" className='feel' placeholder='이 경험에서 느낀 점을 자세히 작성해주세요.' value={"너무 신기했습니다"}/>
                <div className="img_slide_div">

                </div>
            </div>
            <div className="after_div">
                <p className="title">발전 방향</p>
                <textarea className='after_text' rows={1} onChange={autoResizeTextarea} value={"앞으로도 더 많이 가봐야겠다."}>
                    앞으로도 더 많이 가봐야겠다.
                </textarea>
            </div>
            <div className="history_detail_bottom_div">
                <div className="next_btn">수정하기</div>
                
            </div>

        </div>
    )
}

export default HistoryDetailPage