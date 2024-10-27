"use client";

import { useCallback } from "react";
import { BiSolidDislike, BiSolidLike, BiSolidShareAlt } from "react-icons/bi";

const VideoSingleActions = ({ id }: { id: string }) => {

    const handleLikeVideo = useCallback(() => {
        console.log('id', id)
    }, [id]);

    const handleDislikeVideo = useCallback(() => {
        console.log('id', id)
    }, [id]);

    const handleShareVideo = () => {
        console.log('handleShareVideo');
    }

    return (
        <div className="flex items-center gap-6">
            <button type="button" onClick={handleLikeVideo} className="flex items-center font-bold gap-2">
                <BiSolidLike />
                Gostei
            </button>
            <button type="button" onClick={handleDislikeVideo} className="flex items-center font-bold gap-2">
                <BiSolidDislike />
                Não é pra mim
            </button>
            <button type="button" onClick={handleShareVideo} className="flex items-center font-bold gap-2">
                <BiSolidShareAlt />
                Compartilhar
            </button>
        </div>
    )
}

export default VideoSingleActions;