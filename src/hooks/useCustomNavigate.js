import { useNavigate } from 'react-router-dom';

const useCustomNavigate = () => {
  const navigate = useNavigate();

  // 페이지로 이동하는 함수
  const goToPage = (path) => {
    navigate(path);
  };

  // 뒤로 가는 함수
  const goBack = () => {
    navigate(-1);
  };

  // 앞으로 가는 함수
  const goForward = () => {
    navigate(1);
  };

  return {
    goToPage,
    goBack,
    goForward,
  };
};

export default useCustomNavigate;