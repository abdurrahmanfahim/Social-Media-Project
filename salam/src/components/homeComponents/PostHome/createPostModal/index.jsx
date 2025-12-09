import { useRef, useState } from "react";
import { CircleCloseIcon } from "../../../../svg/CircleClose";
import AddPost from "./AddPost";
import EmojiPickers from "./EmojiPickers";
import ImagePicker from "./ImagePicker";

const CreatePostModal = () => {
  const [text, setText] = useState("");
  const [toggleRender, setToggleRender] = useState("imagePicker");
  const [image, setImage] = useState([]);
  const textRef = useRef(null);

  return (
    <div className="absolute top-0 left-0 w-full bg-blur h-screen z-20 flex justify-center items-center  ">
      <div className=" w-3/9 shadow-md bg-white rounded-md ">
        <div className="border-b border-white_100 p-2 relative ">
          <h3 className="font-bold text-lg text-black text-center  ">
            Create Post
          </h3>
          <div className="absolute top-2.5 right-1 text-secondary cursor-pointer ">
            <CircleCloseIcon />
          </div>
        </div>
        <div className="px-3 py-4 ">
          <div className="flex items-center gap-3 ">
            <div className="size-12 rounded-full bg-gray-100"></div>
            <h4 className="font-bold text-base text-black  ">
              Abdur Rahman Fahim
            </h4>
          </div>
          {toggleRender === "input" && (
            <>
              <EmojiPickers text={text} setText={setText} textRef={textRef} />
              <div className="">
                <AddPost setImage={setImage} />
              </div>
            </>
          )}

          {toggleRender === "imagePicker" && (
            <>
              <ImagePicker
                text={text}
                setText={setText}
                textRef={textRef}
                image={image}
                setImage={setImage}
              />
              <div className="">
                <AddPost setImage={setImage} />
              </div>
            </>
          )}

          <div className="mt-3">
            <button
              disabled
              className="w-full bg-white_100 p-2 font-medium text-black text-base rounded-md hover:bg-black hover:text-white transition-all ease-linear duration-100 "
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
