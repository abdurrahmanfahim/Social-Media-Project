import React from "react";
import { StoriesData } from "./storiesData";
import { Swiper, SwiperSlide } from "swiper/react";

const Stories = () => {
  return (
    <>
      <div className="mb-5 ">
        <h4 className="font-bold text-lg text-black">Stories</h4>
      </div>

      <div className="w-full">
        <Swiper spaceBetween={10} slidesPerView={3}>
          {StoriesData.map((data, index) => {
            return (
              <SwiperSlide
                key={index + 123}
                style={{
                  background: `url(${data.bgPicture})`,
                  height: '200px',
                }}
                className="bg-cover bg-no-repeat bg-center rounded-md "
              >
                <div className="size-8 rounded-full overflow-hidden object-cover mt-2 ml-2 border-2 border-primary_bg ">
                  <img src={data.picture} alt="" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* <div className="flex items-center gap-x-2 ">
        
      </div> */}
    </>
  );
};

export default Stories;
