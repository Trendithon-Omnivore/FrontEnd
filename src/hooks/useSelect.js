import { useState, useEffect } from "react";
import { SelectService } from "@services/SelectService";
import useCustomNavigate from "./useCustomNavigate";

const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split("T")[0];
};

const mockCardData = [
  {
    id: 1,
    emoji: "🏔️",
    title: "한라산 등반하기",
    description: "한라산 정상까지 등반하며 자연을 느껴보세요.",
    extra: [
      { id: 101, title: "등산 준비물", content: "나는 등산 짱 ㅋㅋ" },
      { id: 102, title: "소요 시간", content: "소요" }
    ],
    backgroundColor: "#F9FFD6"
  },
  {
    id: 2,
    emoji: "📖",
    title: "도서관에서 독서하기",
    description: "조용한 도서관에서 책을 읽으며 집중하는 시간을 가져봐요.",
    extra: [
      { id: 201, title: "추천 도서 목록", content: "도서" },
      { id: 202, title: "독서 시간", content: "시간" }
    ],
    backgroundColor: "#FFE7E7"
  },
  {
    id: 3,
    emoji: "🍳",
    title: "요리 도전하기",
    description: "새로운 레시피로 요리에 도전해보세요.",
    extra: [
      { id: 301, title: "필요한 재료", content: "필요한" },
      { id: 302, title: "조리법", content: "조리법" }
    ],
    backgroundColor: "#D5DDFF"
  }
];

export const useSelect = () => {
  const { goToPage } = useCustomNavigate();

  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [flipped, setFlipped] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);

  const titleExamples = ["마음가짐", "예산", "계획"];
  const writetitleExamples = ["좋았던 점", "아쉬웠던 점", "발전 방향"];
  const backgroundColors = ["#F9FFD6", "#FFE7E7", "#D5DDFF", "#EFE5FF"];
  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(backgroundColors[0]);

  const [extraInputs, setExtraInputs] = useState([]);
  const [startDate, setStartDate] = useState(getTodayDate());
  const [endDate, setEndDate] = useState(getTodayDate());

  useEffect(() => {
    const shuffled = mockCardData.sort(() => 0.5 - Math.random()).slice(0, 3);
    setCards(shuffled);
    setSelectedCard(shuffled[1]); 
    setFlipped(new Array(shuffled.length).fill(false));
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
      emoji: selectedCard.emoji,
      title: selectedCard.title,
      description: selectedCard.description,
      startDate,
      endDate,
      extra: extraInputs,
      backgroundColor: selectedBackgroundColor
    };
  
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
      writetitleExamples,
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