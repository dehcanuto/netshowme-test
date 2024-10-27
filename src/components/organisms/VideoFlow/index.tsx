"use client";

import { Key, Suspense, useCallback, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from 'swiper/types';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import api from "@/services/api";

import { VideoCard } from "@/components/molecules";
import { VideoProps } from "@/types/video";
import { VideoFlowPropsType } from "./type";

const VideoFlow = ({ title, params }: VideoFlowPropsType) => {
    const [swiperRef, setSwiperRef] = useState<SwiperClass>();
    
    const theSlides = useMemo(async () => 
        await api.get('/videos', { params: {...params, _page: 1, _per_page: 10 } })
            .then(res => res.data.data)
            .then(respose => respose.map((slide: VideoProps, key: Key) => 
                <SwiperSlide key={key}>
                    <VideoCard {...slide} category={title} />
                </SwiperSlide>)
            )
            .catch((error) => <p className="text-white">Erro no fetch { error.message }</p>), [params])

    const handlePrevious = useCallback(() => {
        swiperRef?.slidePrev();
    }, [swiperRef]);
    
    const handleNext = useCallback(() => {
        swiperRef?.slideNext();
    }, [swiperRef]);

    return (
        <section className="container mx-auto">
            <div className="flex flex-row w-full items-center justify-between mb-4">
                <h3 className="font-bold text-2xl">
                    {title}
                </h3>
                <div className="flex font-bold gap-6">
                    <span>Veja mais</span>
                    <div className="flex gap-6">
                        <button type="button" onClick={handlePrevious}>
                            <FaChevronLeft />
                        </button>
                        <button type="button" onClick={handleNext}>
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-3">
                <Suspense fallback={<span>loading...</span>}>
                    <Swiper
                        onSwiper={setSwiperRef}
                        slidesPerView={5.5}
                        spaceBetween={20}
                    >
                        {theSlides}
                    </Swiper>
                </Suspense>
            </div>
        </section>
    );
}

export default VideoFlow;