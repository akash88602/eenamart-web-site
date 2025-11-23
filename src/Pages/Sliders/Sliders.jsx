import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




const Sliders = () => {
   const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(2);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );
  return (
    <div>
         <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        virtual
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            
            <div className="card  w-96 bg-base-100 shadow-xl">
                    <figure><img src="/src/assets/222.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Bkack pepeer 30g

                        </h2>
                        <h2 class="card-title">500 TK</h2>
                        <div className="card-actions justify-between">
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