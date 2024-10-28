import { VideoCardSkeleton } from "@/components/molecules";

const VideoFlowSkeleton = () => {
    return (
        <div className="flex gap-4 overflow-hidden">
            {Array.from({ length: 6 }, (_, key) => (
                <VideoCardSkeleton key={key} />
            ))}
        </div>
    );
}

export default VideoFlowSkeleton;