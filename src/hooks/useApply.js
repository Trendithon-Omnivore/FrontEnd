import { useState } from "react";
import { ApplyService } from "@services/ApplyService";

export const useApply = () => {
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");

  const [extraInputs, setExtraInputs] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const backgroundColors = ["#F9FFD6", "#FFE7E7", "#D5DDFF", "#EFE5FF"];
  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(backgroundColors[0]);

  const [isApplySuccess ,setIsApplySuccess] = useState(false);

  const handleIconClick = () => {
    setShowPicker((prev) => !prev);
  };

  const handleEmojiClick = (emojiObject) => {
    setSelectedEmoji(emojiObject.emoji);
    setShowPicker(false);
  };

  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescriptionValue(e.target.value);
  };

  const handleModalToggling = (e) => {
    setIsModalOpen((prev) => !prev);
  }

  const handleExtraInputChange = (id, field, value) => {
    setExtraInputs((prev) =>
      prev.map((input) =>
        input.id === id ? { ...input, [field]: value } : input
      )
    );
  };

  const handleAddInput = (title="") => {
    if (extraInputs.length < 3) {
      setExtraInputs((prev) => [
        ...prev,
        { id: Date.now(), title, content: "" },
      ]);
    }
  };

  const handleRemoveInput = (id) => {
    setExtraInputs((prev) => prev.filter((input) => input.id !== id));
  };

  const handleBackgroundColorChange = (color) => {
    setSelectedBackgroundColor(color);
  };

  const isApplyEnabled = selectedEmoji && titleValue.trim() && descriptionValue.trim();

  const handleApply = async () => {
    try {
      await ApplyService({
        emoji: selectedEmoji,
        title: titleValue,
        description: descriptionValue,
        extra: extraInputs,
        backgroundColor: selectedBackgroundColor,
      });

      setIsApplySuccess(true); // 성공 모달 띄우기

      setSelectedEmoji("");
      setTitleValue("");
      setDescriptionValue("");
      setExtraInputs([]);
      setSelectedBackgroundColor(backgroundColors[0]);
  
    } catch (error) {
      console.error("🚨 경험 카드 등록 실패:", error);
      alert("경험 카드 등록에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const ApplyData = {
    selectedEmoji,
    showPicker,
    titleValue,
    descriptionValue,
    extraInputs,
    isModalOpen,
    isApplyEnabled,
    selectedBackgroundColor,
    backgroundColors,
    isApplySuccess,
  };

  const ApplyHandlers = {
    handleIconClick,
    handleEmojiClick,
    handleTitleChange,
    handleDescriptionChange,
    handleExtraInputChange,
    handleAddInput,
    handleRemoveInput,
    handleModalToggling,
    handleApply,
    handleBackgroundColorChange,
  };

  return { ApplyData, ApplyHandlers };
};