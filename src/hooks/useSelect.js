import { useState, useEffect } from "react";
import { SelectService } from "@services/SelectService";
import useCustomNavigate from "./useCustomNavigate";

const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split("T")[0];
};

export const useSelect = () => {
  const { goToPage } = useCustomNavigate();

  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [flipped, setFlipped] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);

  const titleExamples = ["마음가짐", "예산", "계획"];
  const backgroundColors = ["#F9FFD6", "#FFE7E7", "#D5DDFF", "#EFE5FF"];
  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(backgroundColors[0]);

  const [extraInputs, setExtraInputs] = useState([]);
  const [startDate, setStartDate] = useState(getTodayDate());
  const [endDate, setEndDate] = useState(getTodayDate());

  useEffect(() => {
    const fetchCards = async () => {
      try {
        // 1. 랜덤 카드 3장 조회
        const randomResponse = await SelectService.getRandomCards();
        if (!randomResponse.success) throw new Error(randomResponse.message);

        // 2. 조회된 cardIds를 이용하여 개별 카드 정보 요청
        const cardDetailsPromises = randomResponse.cardIds.map(id => SelectService.getCardById(id).then((card) => ({ ...card, id })));
        const cardDetails = await Promise.all(cardDetailsPromises);

        setCards(cardDetails);
        setSelectedCard(cardDetails[1]); // 기본 선택 카드 설정
        setFlipped(new Array(cardDetails.length).fill(false)); // 카드 뒷면 초기화
      } catch (error) {
        console.error("🚨 카드 불러오기 실패:", error);
      }
    };

    fetchCards();
  }, []);

  const goToNextStep = () => setStep((prev) => prev + 1);
  const goToPrevStep = () => setStep((prev) => prev - 1);

  const handleFlip = (index) => {
    setFlipped((prev) => prev.map((flip, i) => (i === index ? !flip : flip)));
  };

  const handleExtraInputChange = (id, field, value) => {
    setExtraInputs((prev) =>
      prev.map((input) => (input.id === id ? { ...input, [field]: value } : input))
    );
  };

  const handleAddInput = (title = "") => {
    if (extraInputs.length < 3) {
      setExtraInputs((prev) => [...prev, { id: Date.now(), title, content: "" }]);
    }
  };

  const handleExampleClick = (exampleTitle) => {
    handleAddInput(exampleTitle);
  };

  const handleBackgroundColorChange = (color) => {
    setSelectedBackgroundColor(color);
  };

  const isExpStartEnabled =
    selectedBackgroundColor &&
    startDate &&
    endDate &&
    extraInputs.length > 0 &&
    extraInputs.some((input) => input.content.trim() !== "");

  const handleSelect = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleStart = () => {
    goToNextStep();
    setIsModalOpen(false);
  };

  const handleStartClick = async () => {
    if (!selectedCard) {
      console.error("🚨 선택된 카드가 없습니다.");
      return;
    }
  
    const requestData = {
      cardId: selectedCard.id,
      cover: selectedCard.cover,
      startDate,
      endDate
    };

    console.log("✅ 보낼 데이터:", requestData);
  
    try {
      await SelectService.submitExperience(requestData);
      alert("경험 카드가 성공적으로 등록되었습니다!");
      goToPage("/main");
    } catch (error) {
      console.error("🚨 경험 카드 등록 실패:", error);
      alert("경험 카드 등록에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return {
    SelectData: {
      cards,
      setSelectedCard,
      selectedCard,
      flipped,
      isModalOpen,
      step,
      titleExamples,
      backgroundColors,
      selectedBackgroundColor,
      extraInputs,
      startDate,
      endDate,
      isExpStartEnabled
    },
    SelectHandlers: {
      goToNextStep,
      goToPrevStep,
      handleFlip,
      handleExtraInputChange,
      handleAddInput,
      handleExampleClick,
      handleBackgroundColorChange,
      handleStartClick,
      handleSelect,
      handleCloseModal,
      handleStart,
      setStartDate,
      setEndDate
    }
  };
};