"use client";

import { Key, Suspense, useCallback, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from 'swiper/types';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import api from "@/services/api";

import { VideoCard } from "@/components/molecules";
import { VideoProps } from "@/types/video";
import { VideoFlowPropsType } from "./type";
import VideoFlowSkeleton from "./skeleton";

const VideoFlow = ({ title, params }: VideoFlowPropsType) => {
    const [swiperRef, setSwiperRef] = useState<SwiperClass>();
    const [slidesLength, setSlidesLength] = useState<number>(0);
    
    const theSlides = useMemo(async () => 
        await api.get('/videos', { params: {...params, _page: 1, _per_page: 10 } })
            .then(res => res.data.data)
            .then(respose => {
                setSlidesLength(respose.length);
                return respose.map((slide: VideoProps, key: Key) => 
                <SwiperSlide key={key}>
                    <VideoCard {...slide} category={title} />
                </SwiperSlide>)
            })
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
                {slidesLength > 5 && (
                    <div className="flex font-bold gap-6">
                        <span className="text-[#EE3965] lg:text-white">Veja mais</span>
                        <div className="hidden lg:flex gap-6">
                            <button type="button" onClick={handlePrevious}>
                                <FaChevronLeft />
                            </button>
                            <button type="button" onClick={handleNext}>
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div className="flex flex-row gap-3">
                <Suspense fallback={<VideoFlowSkeleton />}>
                    <Swiper
                        onSwiper={setSwiperRef}
                        style={{ width: '100%', height: '100%' }}
                        breakpoints={{
                            320: {
                                slidesPerGroup: 1,
                                slidesPerView: 1.5,
                                spaceBetween: 20
                            },
                            640: {
                                slidesPerGroup: 5,
                                slidesPerView: 5.5,
                                spaceBetween: 20
                            }
                        }}
                    >
                        {theSlides}
                    </Swiper>
                </Suspense>
            </div>
        </section>
    );
}

export default VideoFlow;