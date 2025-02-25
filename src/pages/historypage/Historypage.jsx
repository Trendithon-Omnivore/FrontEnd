import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import square from '../../assets/icons/history/square.svg'
import list from '../../assets/icons/history/list.svg'
import type_arrow from '../../assets/icons/history/type_arrow.svg'
import close from '../../assets/icons/history/close.svg'
import icon from '../../assets/icons/history/popup_icon.svg'
import HistoryList from '@components/history/HistoryList'
import { MainFooter } from '@components/layout/footer/mainfooter/MainFooter';

const Historypage = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isNextButtonActive, setIsNextButtonActive] = useState(false);
    const [selectedHistories, setSelectedHistories] = useState([]);
    const navigate = useNavigate();

    const historyData = [
        { id: 1, title: '혼자 여행 떠나기', rating: 4.5, experienceType: '내가 따라한 경험' },
        { id: 2, title: '요리 배우기', rating: 4.5, experienceType: '내가 작성한 경험' },
        { id: 3, title: '마라톤 참가하기', rating: 5.0, experienceType: '내가 따라한 경험' },
      ];

    const GotoRecap = () => {
        if (isNextButtonActive && selectedHistories.length > 0) {
            const selectedItems = historyData.filter((item) => selectedHistories.includes(item.id));
            navigate('/recap', { state: { selectedItems } });
        }
    };
    const openPopup = () => {
        if (selectedHistories.length > 0) {
          setIsPopupVisible(true);
          setIsNextButtonActive(false);
        }
      };

    const handleSelectHistory = (id) => {
        if (selectedHistories.includes(id)) {
            setSelectedHistories(selectedHistories.filter((selectedId) => selectedId !== id));
        } else {
            setSelectedHistories([...selectedHistories, id]);
        }
    };

    const closePopup = () => {
        setIsPopupVisible(false);
    };

    useEffect(() => {
        if (isPopupVisible) {
            const timer = setTimeout(() => {
                setIsNextButtonActive(true);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [isPopupVisible]);

    return (
        <div id='historypage_contain'>
            <div className="top_list_style">
                <div className="left_div">
                    <input type="checkbox" id="" className='checkbox' />
                    <p className="top_text">전체</p>
                </div>
                <div className="right_div">
                    <img src={square} className="square" />
                    <hr />
                    <img src={list} className="list" />
                </div>
            </div>
            <div className="top_type_list_div">
                <div className="type_div">
                    <img src={type_arrow} className="type_arrow" />
                    <input type="checkbox" id="" className='checkbox' />
                    <p className="top_text">내가 작성한 경험</p>
                    <input type="checkbox" id="" className='checkbox' />
                    <p className="top_text">내가 따라한 경험</p>
                </div>
                <div className="type_div">
                    <img src={type_arrow} className="type_arrow" />
                    <input type="checkbox" id="" className='checkbox' />
                    <p className="top_text">2025</p>
                    <input type="checkbox" id="" className='checkbox' />
                    <p className="top_text">2024</p>
                    <input type="checkbox" id="" className='checkbox' />
                    <p className="top_text">2023</p>
                    <input type="checkbox" id="" className='checkbox' />
                    <p className="top_text">2022</p>
                </div>
            </div>
            <hr className='top_list_line' />
            <div className="history_list_div">
                {historyData.map((history) => (
                    <HistoryList
                        key={history.id}
                        id={history.id}
                        title={history.title}
                        rating={history.rating}
                        experienceType={history.experienceType}
                        onSelect={handleSelectHistory}
                        isSelected={selectedHistories.includes(history.id)}
                    />
                ))}

            </div>
            <div className="history_bottom_div">
                <div className={`next_btn ${selectedHistories.length > 0 ? 'active' : 'inactive'}`} onClick={openPopup}>결산하기</div>
            </div>
            <MainFooter/>
            {isPopupVisible && (
                <div className="popup_div">
                    <div className="loading_div">
                        <img src={close} className="close" onClick={closePopup} />
                        <img src={icon} alt="" className="icon" />
                        <p className="text">선택하신 경험들을 결산 중이에요</p>
                        <p className="text">예쁘게 만들어진 recap 페이지를<br />친구에게 공유해보세요</p>
                        <div className="btn_div">
                            <div className="cancel" onClick={closePopup}>취소</div>
                            <div className={`next ${isNextButtonActive ? 'active' : ''}`}
                                onClick={GotoRecap}>보러가기</div>
                        </div>
                    </div>
                </div>

            )}
        </div>
    )
}

export default Historypage