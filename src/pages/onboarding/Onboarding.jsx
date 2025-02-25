import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import onboarding1 from '../../assets/icons/history/onboarding1.svg'
import onboarding2 from '../../assets/icons/history/onboarding2.svg';
import onboarding3 from '../../assets/icons/history/onboarding3.svg';
import leftArrow from '../../assets/icons/history/left_arrow.svg';
import rightArrow from '../../assets/icons/history/right_arrow.svg';

const Onboarding = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);

    const onboardingImages = [onboarding1, onboarding2, onboarding3];

    const goToNext = () => {
        if (currentStep < onboardingImages.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const goToPrev = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const GotoStart = () => {
        navigate('/login');
    }
    return (
        <div className='onboarding_container'>
            <div className="center_contents">
                <img
                    src={onboardingImages[currentStep]}
                    alt={`Onboarding Step ${currentStep + 1}`}
                    className="onboarding_img"
                />
            </div>
            <div className="bottom">
                <div className="indicator_dots">
                    <img
                        src={leftArrow}
                        alt="Back"
                        className={`arrow left ${currentStep === 0 ? 'disabled' : ''}`}
                        onClick={goToPrev}
                    />
                    <div className="dot_div">
                        {onboardingImages.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${currentStep === index ? 'active' : ''}`}
                            />
                        ))}
                    </div>

                    <img
                        src={rightArrow}
                        alt="Next"
                        className={`arrow right ${currentStep === onboardingImages.length - 1 ? 'disabled' : ''
                            }`}
                        onClick={goToNext}
                    />
                </div>
                <div className="start_btn" onClick={GotoStart}>Start</div>
            </div>
        </div>
    )
}

export default Onboarding