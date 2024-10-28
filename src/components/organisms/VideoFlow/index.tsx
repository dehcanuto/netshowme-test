"use client";

import { Key, useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from 'swiper/types';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import api from "@/services/api";
import { getAllCategories } from "@/hooks/getCategory";

import { VideoCard } from "@/components/molecules";
import { VideoProps } from "@/types/video";

import { VideoFlowPropsType } from "./type";
import { CategoryType } from "@/types/category";
import VideoFlowSkeleton from "./skeleton";

const VideoFlow = ({ title, params }: VideoFlowPropsType) => {
    const [loadingFLow, setLoadingFLow] = useState<boolean>(true);
    const [swiperRef, setSwiperRef] = useState<SwiperClass>();
    const [slides, setSlides] = useState<VideoProps[]>([]);
    
    const handlePrevious = useCallback(() => {
        swiperRef?.slidePrev();
    }, [swiperRef]);
    
    const handleNext = useCallback(() => {
        swiperRef?.slideNext();
    }, [swiperRef]);

    useEffect(() => {
        async function init() {
            await api.get('/videos', { params: {...params, _page: 1, _per_page: 10 } })
            .then(res => res.data.data)
            .then(async response => {
                const allCategories = await getAllCategories();
                const categoryWithTitle = response.map((video: VideoProps) => {
                    const categoryName = allCategories.find((item: CategoryType) => 
                        item.id == video.category
                    );

                    return {
                        ...video,
                        category: categoryName.title
                    };
                })
                return setSlides(categoryWithTitle)
            })
            .catch((error) => {
                return new Response(
                  'There has been a problem with your fetch operation VideoFlow: ' + error.message,
                  { status: 500 }
                );
            })
            .finally(() => setLoadingFLow(false));
        }
        init();
    }, [params])

    return (
        <section className="container mx-auto">
            <div className="flex flex-row w-full items-center justify-between mb-4">
                <h3 className="font-bold text-2xl">
                    {title}
                </h3>
                {slides.length > 5 && (
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
                {loadingFLow ? <VideoFlowSkeleton /> : (
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
                        {slides.map((slide: VideoProps, key: Key) => 
                            <SwiperSlide key={key}>
                                <VideoCard {...slide} />
                            </SwiperSlide>   
                        )}
                    </Swiper>
                )}
            </div>
        </section>
    );
}

export default VideoFlow;