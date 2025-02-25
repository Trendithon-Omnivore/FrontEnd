import React from 'react'
import mypage1 from '../../assets/icons/history/mypage1.svg'
import mypage2 from '../../assets/icons/history/mypage2.svg'
import mypage3 from '../../assets/icons/history/mypage3.svg'
import mypage4 from '../../assets/icons/history/mypage4.svg'
import mypage_arrow from '../../assets/icons/history/mypage_arrow.svg'

const Mypage = () => {
    return (
        <div className='mypage_container'>
            <div className="top_card">
                <p className="text">CARDO와 함께<br />소중한 경험을 쌓고 계신가요?</p>
            </div>
            <hr />
            <div className="part_div">
                <div className="left">
                    <img src={mypage1} alt="" className="icon" />
                    <p className="title">문의하기</p>
                </div>
                <img src={mypage_arrow} alt="" className="next" />
            </div>
            <div className="part_div">
                <div className="left">
                    <img src={mypage2} alt="" className="icon" />
                    <p className="title">비밀번호 수정</p>
                </div>
                <img src={mypage_arrow} alt="" className="next" />
            </div>
            <div className="part_div">
                <div className="left">
                    <img src={mypage3} alt="" className="icon" />
                    <p className="title">로그아웃</p>
                </div>
                <img src={mypage_arrow} alt="" className="next" />
            </div>
            <div className="part_div">
                <div className="left">
                    <img src={mypage4} alt="" className="icon" />
                    <p className="title">회원 탈퇴</p>
                </div>
                <img src={mypage_arrow} alt="" className="next" />
            </div>

        </div>
    )
}

export default Mypage