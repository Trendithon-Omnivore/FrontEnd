import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { instance } from '../../services/instance';
import card_img_r from '../../assets/icons/history/card_img_r.svg'
import card_img_l from '../../assets/icons/history/card_img_l.svg'

const HomeCheck = () => {
    const navigate = useNavigate();
    const [experienceData, setExperienceData] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        const fetchExperienceData = async () => {
          try {
            const response = await instance.get('/cards/experience'); // ✅ 토큰이 자동으로 포함된 요청
            if (response.data.success) {
              setExperienceData(response.data);
              setStartDate(response.data.startDate);
              setEndDate(response.data.endDate);
            }
          } catch (error) {
            console.error('API 요청 실패:', error);
          }
        };
    
        fetchExperienceData();
      }, []);

      const GotoFix = () => {
        // ✅ 데이터 전달
        navigate('/home_check_fix', {
          state: {
            experienceData,
            startDate,
            endDate
          }
        });
      };
    return (
        <div className='home_check_container'>
            <p className="page_root">홈 &gt; 확인하기</p>
            <div className="top_card_div" style={{
          backgroundColor: experienceData ? experienceData.cover : '#FFFFFF',
        }}>
                <img src={card_img_l} className="card_img" />
                <div className="text_div">
                    <p className="bottom">혼자 여행 떠나기</p>
                </div>
                <img src={card_img_r} className="card_img" />
            </div>
            <div className="date_div">
                <p className="title">목표 기간</p>
                <div className="calender">
                    <input type="date" value={startDate}
            onChange={(e) => setStartDate(e.target.value)} />
                    <hr />
                    <input type="date" value={endDate}
            onChange={(e) => setEndDate(e.target.value)} />
                </div>
            </div>
            <div className="history_detail_bottom_div">
                <div className="next_btn" onClick={GotoFix}>수정하기</div>
            </div>
        </div>
    )
}

export default HomeCheck