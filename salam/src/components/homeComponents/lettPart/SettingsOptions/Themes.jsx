import MoonIcon from "../../../../svg/MoonIcon";
import RightArrow from "../../../../svg/RightArrow";

const Themes = ({setVisible}) => {
  
  return (
    <>
      <div className="w-[300px] bg-white border border-gray-100 shadow-sm rounded-lg p-5">
        <div className="flex items-center gap-3 pb-4 border-b border-gray-50">
          <div className="text-gray-400 hover:text-black"
          onClick={()=> setVisible(false)}>
            <RightArrow />
          </div>
          <h4 className="font-semibold text-lg text-gray-900">
            Display & Accessability
          </h4>
        </div>
        <div className="flex gap-4 mt-5">
          <div className="size-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
            <MoonIcon />
          </div>
          <div className="flex-1">
            <h5 className="font-medium text-gray-900 mb-1">Dark Mode</h5>
            <p className="text-gray-500 text-sm mb-3">
              Adjust the appearance to reduce glare
            </p>
            <div className="flex gap-3">
              <label className="flex items-center gap-2 cursor-pointer px-3 py-2 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all">
                <input name="mode" type="radio" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                <span className="text-sm font-medium text-gray-700">Dark</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer px-3 py-2 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all">
                <input name="mode" type="radio" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                <span className="text-sm font-medium text-gray-700">Light</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Themes;
