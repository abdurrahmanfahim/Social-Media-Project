import { LiveIcon } from "../../../../svg/Live";
import { CircleProfileIcon } from "../../../../svg/Circleprofile";
import ImageIcon from "../../../../svg/ImageIcon";
import { useRef } from "react";
import useImagePicker from "../../../../functions/useImagePicker";

const AddPost = ({setImage}) => {
  const chooseFile = useRef(null);
  const handleImageUpload = useImagePicker(setImage);

  return (
    <div className="px-2 py-1 border border-line rounded-md flex items-center justify-between  ">
      <span className="font-semibold text-black text-base ml-2.5">Add to Your Post</span>
      <div className="flex items-center gap-x-3 ">
        <div
          className="size-10 rounded-full flex items-center justify-center hover:bg-white_100 cursor-pointer transition-all ease-linear duration-100 "
          onClick={() => chooseFile.current.click()}
        >
          <ImageIcon />
          <input
            type="file"
            multiple
            accept="image/jpeg,image/png,image/webp,image/gif,image/jpg"
            className="hidden "
            ref={chooseFile}
            onChange={handleImageUpload}
          />
        </div>
        <div className="size-10 rounded-full flex items-center justify-center hover:bg-white_100 cursor-pointer transition-all ease-linear duration-100 ">
          <LiveIcon />
        </div>
        <div className="size-10 rounded-full flex items-center justify-center hover:bg-white_100 cursor-pointer transition-all ease-linear duration-100 ">
          <CircleProfileIcon />
        </div>
      </div>
    </div>
  );
};

export default AddPost;
