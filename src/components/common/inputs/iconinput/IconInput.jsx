import * as S from "./styled";
import Picker from "emoji-picker-react";
import emoji from "/images/apply/emoji.svg";

export const IconInput = ({ selectedEmoji, showPicker, onIconClick, onEmojiClick }) => {
  return (
    <S.Wrapper>
      <S.Title>아이콘</S.Title>
      <S.AddIconButton $selectedEmoji={!!selectedEmoji} onClick={onIconClick}>
        {selectedEmoji ? (
          <S.SelectedEmoji>{selectedEmoji}</S.SelectedEmoji>
        ) : (
          <S.IconinputText>
            <S.Icon24 src={emoji} /> 아이콘 추가
          </S.IconinputText>
        )}
      </S.AddIconButton>

      {showPicker && <Picker onEmojiClick={onEmojiClick} />}
    </S.Wrapper>
  );
};