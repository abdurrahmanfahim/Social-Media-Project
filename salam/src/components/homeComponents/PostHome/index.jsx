import { LiveIcon } from "../../../svg/Live";
import MediaIcon from "../../../svg/MediaIcon";


const PostHome = () => {
  return <div className="mt-10 py-10 px-6 bg-white_100 rounded-md  ">
    <div className="flex items-center gap-x-3 w-full p-2 rounded-full bg-white mb-6 ">
      <div className="size-12 rounded-full bg-gray-100"></div>
      <input className="w-7/9 text-secondary focus:outline-none " type="text" placeholder="What's up! Say Something..." />
    </div>
    <div className="border-t-2 border-line ">
      <div className="flex items-center gap-x-7 justify-around mt-6 ">
        <div className=" flex items-center gap-x-3 font-medium text-black py-3 px-6 border border-gray-300 hover:border-primary transition-all ease-linear duration-75 rounded-full ">
        <span><LiveIcon /></span>
        <span>Live Video</span>
      </div>
      <div className=" flex items-center gap-x-3 font-medium text-black py-3 px-6 border border-gray-300 hover:border-primary transition-all ease-linear duration-75 rounded-full ">
        <span><MediaIcon /></span>
        <span>Image/Gallery</span>
      </div>
      <div className=" flex items-center gap-x-3 font-medium text-black py-3 px-6 border border-gray-300 hover:border-primary transition-all ease-linear duration-75 rounded-full ">
        <span><LiveIcon /></span>
        <span>Activities</span>
      </div>
      </div>
    </div>
  </div>;
};

export default PostHome;
