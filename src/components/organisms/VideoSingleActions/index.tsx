"use client";

import { useCallback, useState } from "react";
import { BiSolidDislike, BiSolidLike, BiSolidShareAlt } from "react-icons/bi";

import { BaseButton } from "@/components/atoms";

import api from "@/services/api";
import { VideoSingleActionsPropType } from "./type";

const VideoSingleActions = ({ id, likes }: VideoSingleActionsPropType) => {
    const [liked, setLiked] = useState<boolean>(likes == 1);
    const [unliked, setUnliked] = useState<boolean>(likes < 0);

    const handleLikeVideo = useCallback(async (likeNumber: number) => {
        await api.patch(`/videos/${id}`, { likes: likeNumber })
                .then(res => res.data)
                .then((res) => {
                    setLiked(res.likes == 1);
                    setUnliked(res.likes < 0)
                })
                .catch((error) => <p className="text-white">Erro no fetch { error.message }</p>)
    }, [id]);

    const handleShareVideo = () => {
        navigator.clipboard.writeText(`http://localhost:4000/v/${id}`);
    }

    return (
        <div className="flex items-center gap-3">
            <BaseButton click={() => handleLikeVideo(1)} filled={liked}>
                <BiSolidLike />
                Gostei
            </BaseButton>
            <BaseButton click={() => handleLikeVideo(-1)} filled={unliked}>
                <BiSolidDislike />
                Não é pra mim
            </BaseButton>
            <BaseButton click={handleShareVideo}>
                <BiSolidShareAlt />
                Compartilhar
            </BaseButton>
        </div>
    )
}

export default VideoSingleActions;