import { useRef } from "react";
import { CircleCloseIcon } from "../../../../svg/CircleClose";
import ImageIcon from "../../../../svg/ImageIcon";
import EmojiPickers from "./EmojiPickers";
import useImagePicker from "../../../../functions/useImagePicker";

const ImagePicker = ({ text, setText, textRef, image, setImage }) => {
  const chooseFile = useRef(null);
  const handleImageUpload = useImagePicker(setImage);
  const handleDeleteImage = (i) => {
    console.log(i);
    const updatedImages = image.filter(
      (item, index) => index !== i && [...item]
    );

    console.log(updatedImages);
    setImage(updatedImages);
  };

  return (
    <>
      <EmojiPickers
        text={text}
        setText={setText}
        textRef={textRef}
        changePart
      />

      <div className="p-4 border border-line rounded-md mb-5 select-none ">
        <div className="w-full h-auto bg-white_100 rounded-md ">
          <input
            type="file"
            multiple
            accept="image/jpeg,image/png,image/webp,image/gif,image/jpg"
            className="hidden "
            ref={chooseFile}
            onChange={handleImageUpload}
          />
          {image && image.length ? (
            <div className="relative">
              <div
                className="absolute top-3 left-3 bg-white_100 flex items-center justify-center gap-3 rounded-md p-2 cursor-pointer z-10"
                onClick={() => chooseFile.current.click()}
              >
                <ImageIcon />
                Add photos/videos
              </div>
              <div
                className={`overflow-hidden flex items-center justify-center ${
                  (image.length === 1 &&
                    "flex justify-center h-83 scroll-auto ") ||
                  (image.length === 2 && "grid grid-cols-2 gap-1 ") ||
                  (image.length === 3 && "grid grid-cols-2 gap-1 ") ||
                  (image.length === 4 &&
                    "grid grid-cols-2 grid-rows-2  gap-1 ") ||
                  (image.length >= 5 && "grid grid-cols-6 grid-rows-2  gap-1 ")
                } `}
              >
                {image.map((item, i) => (
                  <div
                    className={`relative group size-full ${
                      (image.length === 3 &&
                        "nth-of-type-1:col-span-2 nth-of-type-1:h-70 not-first:h-58 ") ||
                      (image.length === 4 &&
                        "nth-of-type-1:row-start-2 nth-of-type-1:row-end-3 h-58") ||
                      (image.length >= 5 &&
                        "nth-of-type-1:col-span-3 nth-of-type-2:col-span-3 col-span-2 h-58 ")
                    } ${i > 4 ?'hidden size-0' : 'block'}`}
                  >
                    <img
                      className={`object-cover size-full `}
                      key={i}
                      src={item}
                      alt="image"
                    />
                    {image.length >= 6 && (
                      <div className={`absolute bottom-0 right-0 size-full flex items-center justify-center z-10 bg-[#ffffff33] ${i === 4 ?'block' : 'hidden'}`}>
                        <span className="size-10 flex items-center justify-center bg-blur rounded-full font-semibold text-base">
                          +{image.length -5}
                        </span>
                      </div>
                    )}
                    <div
                      className="absolute top-2 right-2 text-transparent group-hover:text-white_100 transition-all ease-linear duration-100 bg-transparent group-hover:bg-[#00000062] rounded-full z-20 "
                      onClick={() => handleDeleteImage(i)}
                    >
                      <CircleCloseIcon />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full p-10 ">
              <div
                className="flex flex-col items-center justify-center gap-3  cursor-pointer  "
                onClick={() => chooseFile.current.click()}
              >
                <div className="size-10 rounded-full cursor-pointer bg-black text-white flex items-center justify-center">
                  <ImageIcon />
                </div>
                <div className="text-center font-semibold text-lg ">
                  <p>Add Photo/Video</p>
                  <p className="text-gray-400">or Drug and Drop</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ImagePicker;
