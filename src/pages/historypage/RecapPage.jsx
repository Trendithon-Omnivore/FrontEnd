import React, { useState } from 'react';
import card from '../../assets/icons/history/card.svg'
import out from '../../assets/icons/history/out.svg'
import icon from '../../assets/icons/history/icon.svg'
import star from '../../assets/icons/history/recap_star.svg'
import background from '../../assets/icons/history/recap_contents_bg.svg'

const RecapPage = () => {
    const [resultMessage, setResultMessage] = useState('');
    const shareData = {
        title: "MDN",
        text: "Learn web development on MDN!",
        url: "https://developer.mozilla.org",
    };

    const handleShare = async () => {
        try {
          await navigator.share(shareData);
          setResultMessage('MDN shared successfully');
        } catch (err) {
          setResultMessage(`Error: ${err}`);
        }
      };
    return (
        <div className='recape_page_container'>
            <div className="contents_div">
                <p className="top_title">내가 작성한 경험</p>
                <p className="page_title">RECAP</p>
                <img src={card} alt="" className="card" id='card1' />
                <img src={card} alt="" className="card" id='card2' />
                <img src={card} alt="" className="card" id='card3' />
                <img src={card} alt="" className="card" id='card4' />
                <img src={card} alt="" className="card" id='card5' />
                <img src={icon} alt="" className="icon" />
                <div className="background">

                    <div className="contents_text_div">
                        <img src={out} alt="" className="out" />
                        <div className="contents_title">혼자 여행 떠나기</div>
                        <p className="when">25.01.01 ~ 25.01.05</p>
                        <div className="info_div">
                            <img src={star} alt="" className="star" />
                            <p className="score">4.25</p>
                            <p className="info_text">내가 기록한 경험</p>
                        </div>
                        <p className="contents_text">혼자 떠나는 여행은 자신을 발견하고 새로운 경험을 쌓을 수 있는 기회에요. 내가 원하는 일정과 장소를 자유롭게 선택할 수 있어, 스트레스를 해소하고 평소에 느끼지 못했던 여유를 만끽할 수 있어요. 여행 중에는 다양한 사람들을 만나고, 새로운 문화와 음식을 경험하며, 나만의 추억을 만들 수 있어요. 혼자 여행을 통해 자기 성찰의 시간을 가지며, 자신감을 키울 수 있는 기회를 제공해요. 처음에는 불안할 수 있지만, 여행을 통해 느끼는 자유와 독립은 그 어떤 경험보다 값진 자산이 될 것이에요.</p>
                        <div className="btn_outline">
                            <div className="share_btn" onClick={handleShare}>공유하기</div>
                        </div>

                    </div>
                    <img src={background} alt="" className='background_img' />
                </div>

            </div>
        </div>
    )
}

export default RecapPage