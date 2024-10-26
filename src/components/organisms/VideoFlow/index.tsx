"use client";

import { Key, Suspense } from "react";
import { VideoCard } from "@/components/molecules";

import api from "@/services/api";
import { VideoProps } from "@/types/video";

const VideoFlow = ({ title, endpoint }: { title: string, endpoint: string }) => {
    const handleFlow = async () => {
        return await api.get(endpoint)
            .then(res => res.data)
            .then(respose => 
                respose.map((item: VideoProps, index: Key) => (
                    <VideoCard key={index} {...item} />
                ))
            )
            .catch((error) => 
                <p className="text-white">Erro no fetch { error.message }</p>
            )
    }

    return (
        <section className="container mx-auto">
            <div className="flex flex-row w-full items-center justify-between mb-4">
                <h3 className="font-bold text-2xl">
                    {title}
                </h3>
                <div className="">
                    <span>Veja mais</span>
                </div>
            </div>
            <div className="flex flex-row gap-3">
                <Suspense fallback={<span>loading...</span>}>
                    {handleFlow()}
                </Suspense>
            </div>
        </section>
    );
}

export default VideoFlow;