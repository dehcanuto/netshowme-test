"use client"

import React from "react";
import { useEffect, useState  } from "react";
import { MdOutlineBookmarkAdd } from "react-icons/md";

import { VideoFlow, VideoSingleActions } from "@/components/organisms";

import api from "@/services/api";
import { VideoProps } from "@/types/video";
import { formatDate } from "@/misc/format";


export default function VideoPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = React.use(params);
    const [video, setVideo] = useState<VideoProps>();
    
    useEffect(() => {
        async function getVideo () {
            await api.get(`/videos/${id}`)
                .then(res => res.data)
                .then(respose => setVideo(respose))
                .catch((error) => <p className="text-white">Erro no fetch { error.message }</p>)
        }

        getVideo();
        console.log('video', video);
    }, [])

    return (
        <main className="bg-[#131313]">
            <div className="bg-black h-[600px] mt-[72px]">

            </div>
            <section className="container py-8 mx-auto">
                <h1 className="text-2xl font-semibold">
                    {video?.title}
                </h1>
                <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center justify-center gap-4">
                        <span className="py-1 px-2 bg-[#1e1e1e] text-xs rounded-full">
                            Over the Cast
                        </span>
                        {video?.created_at && (
                            <time dateTime={video.created_at} className="text-xs">
                                {formatDate(video.created_at)}
                            </time>
                        )}
                        <button type="button" className="flex items-center font-bold gap-2">
                            <MdOutlineBookmarkAdd className="text-2xl" />
                            Adicionar à minha lista
                        </button>
                    </div>
                    <VideoSingleActions id={id} />
                </div>
            </section>
            <section className="container mx-auto py-12">
                <h2 className="font-bold text-2xl mb-3">Resumo</h2>
                {video?.description}
            </section>
            <section className="py-12 bg-black">
                <VideoFlow title="Conteúdos relacionados" params={{}} />
            </section>
        </main>
  );
}
