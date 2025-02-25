import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/icons/history/logo.svg'

const Splash = () => {
    const navigate = useNavigate();

    const GotoStart = () => {
        navigate('/onboarding');
    }
    return (
        <div className='splash_container'>
            <div className="center_div">
                <img src={logo} alt="" className="logo" />
                <p className="normal">생각도 못하던</p>
                <div className="text_bottom">
                    <p className="special">새로운 경험</p>
                    <p className="normal">을 만나보세요!</p>
                </div>
            </div>
            <div className="bottom">
                <div className="start_btn" onClick={GotoStart}>Start</div>
            </div>
        </div>
    )
}

export default Splash