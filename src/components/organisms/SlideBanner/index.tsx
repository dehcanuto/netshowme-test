"use client"

import { CSSProperties, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { MdOutlinePlayArrow } from "react-icons/md";

import { SlideBannerPropType } from "./type";

const SlideBanner = ({ slides }: SlideBannerPropType) => {
    const [nextSlideProgress, setNextSlideProgress] = useState<number>(0);
    const onAutoplayTimeLeft = (_s: SwiperClass, _time: number, progress: number) => {
        const result = 100 - (progress * 100);
        setNextSlideProgress(result);
    }

    return (
        <div className="container mx-auto h-[628px] lg:h-[500px] pt-28 lg:pt-0">
            <Swiper
                className="banner-home"
                effect="fade"
                speed={1000}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                fadeEffect={{ crossFade: true }}
                pagination={{ clickable: true }}
                modules={[Autoplay, EffectFade, Pagination]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                style={{
                    "--swiper-pagination-color": "#fff",
                    "--swiper-pagination-bullet-inactive-color": "#1b1b1b",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "10px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px",
                    "--swiper-pagination-bottom": "4.6rem",
                } as CSSProperties}
            >
                {slides.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col max-w-lg py-36 gap-4">
                            <h4 className="text-white/70">{item.category}</h4>
                            <h2 className="text-3xl font-medium">{item.title}</h2>
                            <p className="text-white/70">{item.description}</p>
                            <Link href={{ pathname: item.path }} className="flex items-center justify-center w-full lg:w-fit p-2 px-6 mt-3 gap-2 bg-white text-black font-bold rounded">
                                <MdOutlinePlayArrow className="text-2xl" />
                                Reproduzir agora
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="absolute left-0 bottom-16">
                    <div className="overflow-hidden w-12 h-2.5 mb-4 text-xs flex rounded bg-gray-100">
                        <div style={{ width: nextSlideProgress }} className="flex flex-col whitespace-nowrap justify-center bg-white/70 shadow-none" />
                    </div>
                </div>
            </Swiper>
        </div>
    );
}

export default SlideBanner;