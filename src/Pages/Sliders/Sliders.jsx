import React, {  useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Sliders = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const [slides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

  return (
    <div>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={30}
        pagination={{ type: 'fraction' }}
        navigation={true}
        virtual
        initialSlide={0}
        watchSlidesProgress={true}

       
        breakpoints={{
          320: { slidesPerView: 1 },   
          480: { slidesPerView: 1 },   
          640: { slidesPerView: 2 },   
          768: { slidesPerView: 2 },   
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },  
        }}
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
              <div className="card w-full max-w-4xl  bg-base-100 shadow-md hover:shadow-xl duration-200">
                    <figure><img src="/src/assets/222.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Bkack pepeer 30g

                        </h2>
                        <h2 class="card-title">500 TK</h2>
                        <div className="card-actions flex justify-between">
                            <button className="btn btn-outline ">ADD TO CART </button>
                            <button className=" btn  btn-error ">BUY NOW</button>
                        </div>
                    </div>
                </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sliders;
