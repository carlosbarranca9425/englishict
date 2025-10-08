import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// @ts-expect-error ...
import "swiper/css";
// @ts-expect-error ...
import "swiper/css/navigation";
// @ts-expect-error ...
import "swiper/css/pagination";

const slides = new Array(6)
    .fill("/challenge2")
    .map((e, i) => `${e}/${i + 1}.png`);

export default function Challenge2() {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            className="bg-gray-800"
            modules={[Navigation, Pagination]}
            speed={700}
            navigation
            pagination={{ clickable: true }}
        >
            {slides.map((slide) => {
                return (
                    <SwiperSlide>
                        <div className="flex items-center justify-center h-dvh">
                            <img
                                draggable={false}
                                src={slide}
                                className="relative top-[-12px]"
                                style={{
                                    maxWidth: "calc(100vw - 150px)",
                                    maxHeight: "calc(100vh - 200px)",
                                    boxShadow: "25px 25px 0px rgba(0,0,0,0.4)",
                                }}
                            />
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
