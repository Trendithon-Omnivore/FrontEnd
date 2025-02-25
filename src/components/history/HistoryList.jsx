import React from 'react'
import { useNavigate } from 'react-router-dom';
import star from '../../assets/icons/history/star.svg'
import arrow from '../../assets/icons/history/list_arrow.svg'

const HistoryList = ({ id, title, rating, experienceType, onSelect, isSelected }) => {
    const navigate = useNavigate();

    const GotoDetail = () => {
        navigate('/history_detail');
    }

  return (
    <div className='history_list_component'>
        <div className={`left_div ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(id)}>
            <p className="top_title">{title}</p>
            <div className="contents_div">
                <img src={star} className="star" />
                <p className="star_num">{rating}</p>
                <hr />
                <p className="contents_text">{experienceType}</p>
            </div>
        </div>
        <div className="right_div" onClick={GotoDetail}>
            <img src={arrow} className="arrow" />
        </div>
    </div>
  )
}

export default HistoryList