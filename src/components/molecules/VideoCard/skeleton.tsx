const VideoCardSkeleton = () => {
    return (
        <div className="flex flex-col gap-3 animate-pulse">
            <span className="bg-gray-300 w-[214px] h-[163px]"></span>
            <span className="bg-gray-300/70 w-20 h-3"></span>
            <div className="flex flex-col gap-3">
                <span className="bg-gray-600 w-40 h-4"></span>
                <span className="bg-gray-600 w-32 h-4"></span>
            </div>
        </div>
    )
}

export default VideoCardSkeleton;