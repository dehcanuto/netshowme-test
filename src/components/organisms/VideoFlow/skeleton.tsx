import { VideoCardSkeleton } from "@/components/molecules";

const VideoFlowSkeleton = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-row w-full items-center justify-between mb-5">
                <span className="flex w-32 h-6 bg-gray-600 animate-pulse" />
            </div>
            <div className="flex flex-row gap-3">
                <div className="flex gap-4 overflow-hidden">
                    {Array.from({ length: 6 }, (_, key) => (
                        <VideoCardSkeleton key={key} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default VideoFlowSkeleton;