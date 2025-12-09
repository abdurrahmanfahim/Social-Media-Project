import EmojiPicker from "emoji-picker-react";
import { useEffect, useState } from "react";
import Feeling from "../../../../svg/Feeling";

const EmojiPickers = ({ text, setText, textRef, changePart }) => {
  const [picker, setPicker] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(0);

  const handleEmoji = ({ emoji }, e) => {
    const ref = textRef.current;
    ref.focus();
    const start = text.substring(0, ref.selectionStart);
    const end = text.substring(ref.selectionStart);
    const newText = start + emoji + end;
    setText(newText);
    setCursorPosition(start.length + emoji.length);
  };

  useEffect(() => {
    textRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition, textRef]);
  

  console.log(changePart);
  return (
    <>
      <div
        className={`${
          changePart ? "flex gap-2 items-start justify-between mt-5" : "mt-5"
        }`}
      >
        <textarea
          ref={textRef}
          value={text}
          maxLength={350}
          onChange={(e) => setText(e.target.value)}
          className="w-full min-h-24 focus:outline-none p-2 font-medium text-base placeholder:opacity-50 "
          placeholder="What's up! Say Something..."
        />

        {changePart && (
          <div className="relative cursor-pointer">
            <div onClick={() => setPicker((prev) => !prev)}>
              <Feeling />
            </div>
            {picker && (
              <div className="absolute top-10 -right-1/2 translate-x-1/2 z-20 ">
                <EmojiPicker onEmojiClick={handleEmoji} />
              </div>
            )}
          </div>
        )}
      </div>
      {!changePart && (
        <div className="flex items-center justify-between mb-3 ">
          <div className="size-10 bg-linear-to-r from-cyan-100 to-purple-100 rounded-md cursor-pointer "></div>
          <div className="relative cursor-pointer">
            <div onClick={() => setPicker((prev) => !prev)}>
              <Feeling />
            </div>
            {picker && (
              <div className="absolute -top-116 -right-1/2 translate-x-1/2 z-20 ">
                <EmojiPicker onEmojiClick={handleEmoji} />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EmojiPickers;
