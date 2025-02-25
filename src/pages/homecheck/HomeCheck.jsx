import React from 'react'
import { useNavigate } from 'react-router-dom';
import card_img_r from '../../assets/icons/history/card_img_r.svg'
import card_img_l from '../../assets/icons/history/card_img_l.svg'

const HomeCheck = () => {
    const navigate = useNavigate();
    
        const GotoFix = () => {
            navigate('/home_check_fix');
        }
    return (
        <div className='home_check_container'>
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
            <div className="history_detail_bottom_div">
                <div className="next_btn" onClick={GotoFix}>수정하기</div>
            </div>
        </div>
    )
}

export default HomeCheck