"use client"

import React, { useCallback } from "react";
import { useEffect, useState  } from "react";
import { MdOutlineBookmarkAdd } from "react-icons/md";

import { VideoFlow, VideoSingleActions } from "@/components/organisms";
import { JWTVideoPlayer } from "@/components/organisms/JWTVideoPlayer";

import api from "@/services/api";
import { VideoProps } from "@/types/video";
import { formatDate } from "@/misc/format";
import { BaseButton } from "@/components/atoms";
import { getCategory } from "@/hooks/getCategory";

export default function VideoPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = React.use(params);
    const [video, setVideo] = useState<VideoProps>();
    const [myList, setMyList] = useState<boolean>(false);
    
    const handleAddList = useCallback(async (added: boolean) => {
        await api.patch(`/videos/${id}`, { my_list: added })
                .then(res => res.data)
                .then(() => setMyList(added))
                .catch((error) => {
                    return new Response(
                      'There has been a problem with your fetch operation handleAddList: ' + error.message,
                      { status: 500 }
                    );
                })
    }, [id]);

    useEffect(() => {
        async function getVideo () {
            await api.get(`/videos/${id}`)
                .then(res => res.data)
                .then(respose => {
                    setVideo(respose);
                    setMyList(respose.my_list);
                })
                .catch((error) => {
                    return new Response(
                      'There has been a problem with your fetch operation getVideo: ' + error.message,
                      { status: 500 }
                    );
                })
        }
        getVideo();
    }, [id])

    return (
        video && (
            <main className="bg-[#131313]">
                <div className="bg-black lg:h-[520px] mt-[72px]">
                    <div className="container mx-auto">
                        <JWTVideoPlayer hls_path={video.hls_path} />
                    </div>
                </div>
                <section className="container py-8 px-4 mx-auto">
                    <h1 className="text-2xl font-semibold">
                        {video.title}
                    </h1>
                    <div className="flex flex-col lg:flex-row items-center justify-between mt-3">
                        <div className="flex items-center justify-center gap-4">
                            <span className="py-1 px-2 bg-[#1e1e1e] text-xs rounded-full">
                                {getCategory(video.category)}
                            </span>
                            <time dateTime={video.created_at} className="text-xs">
                                {formatDate(video.created_at)}
                            </time>
                            <BaseButton click={() => handleAddList(!myList)} filled={myList}>
                                <MdOutlineBookmarkAdd className="text-2xl" />
                                Adicionar à minha lista 
                            </BaseButton>
                        </div>
                        <VideoSingleActions id={id} likes={video.likes} />
                    </div>
                </section>
                {video?.description && (
                    <section className="container mx-auto px-4 py-12">
                        <h2 className="font-bold text-2xl mb-3">Resumo</h2>
                        {video.description}
                    </section>
                )}
                <section className="py-12 px-4 bg-black">
                    <VideoFlow title="Conteúdos relacionados" params={{}} />
                </section>
            </main>
        )
  );
}
