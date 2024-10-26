"use client"

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlinePlayArrow } from "react-icons/md";

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import { SlideBannerPropType } from "./type";

const SlideBanner = ({ slides }: SlideBannerPropType) => {
    return (
        <div className="container mx-auto h-screen">
            <Swiper className="mySwiper" pagination>
                {slides.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col max-w-xl py-36 gap-4">
                            <h4 className="text-white/70">{item.category}</h4>
                            <h2 className="text-3xl font-medium">{item.title}</h2>
                            <p className="text-white/70">{item.description}</p>
                            <Link href={{ pathname: item.path }} className="flex w-fit p-2 px-6 mt-3 gap-2 bg-white text-black font-bold rounded">
                                <MdOutlinePlayArrow className="text-2xl" />
                                Reproduzir agora
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SlideBanner;