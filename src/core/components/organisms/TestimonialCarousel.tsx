"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import testimonials from "@/core/data/testimonials"; // Import testimonial data

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <h2 className="text-3xl font-semibold text-center mb-12 text-[#FF9A25]">What Our Clients Say</h2>

      <div className="flex justify-center align-center">
          <Swiper
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
            640: { slidesPerView: 2, spaceBetween: 20 }, // Tablets
            1024: { slidesPerView: 3, spaceBetween: 30 }, // Desktop
          }}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay]}
          className="max-w-6xl px-8"
        >
          {testimonials.map((testimonial, i) => (
            <SwiperSlide key={i} className="flex justify-center m-2">
              <div className="relative bg-gray-800 text-white p-6 rounded-2xl shadow-xl w-[310px] border border-[#FF9A25] flex flex-col items-center text-center">
                
            
                

                {/* Content */}
                <p className="text-sm italic opacity-80">&ldquo;{testimonial.quote}&ldquo;</p>

                {/* Name & Position */}
                <h4 className="mt-4 font-semibold text-lg text-[#FF9A25]">{testimonial.name}</h4>
                <p className="text-sm text-gray-400">{testimonial.position}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
