'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Hero() {
    return (
        <section className="">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="h-128"
            >
                <SwiperSlide>
                    <div className="flex h-full align-center justify-center">
                        <Image
                            className="absolute top-0 w-full object-cover h-128 z-1"
                            src="/hero/hero2.png"
                            alt="Imagen del Banner"
                            width={1920}
                            height={1080}
                        />
                        <p className="relative z-10 text-neutral-50 text-7xl text-center self-center">Fisioterapia Neurológica</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className="flex h-full align-center justify-center">
                    <Image
                        className="absolute top-0 w-full object-cover h-128 z-1"
                        src="/hero/hero.jpg"
                        alt="Imagen del Banner"
                        width={1920}
                        height={1080}
                    />
                    <p className="relative z-10 text-neutral-50 text-7xl text-center self-center">Tus logros nuestro objetivo</p>
                </div></SwiperSlide>
            </Swiper>
        </section>
    );
}