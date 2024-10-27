import Image from "next/image";
import { VideoProps } from "@/types/video";

const VideoCard = ({ thumbnail, title, category, live }: VideoProps) => {
    return (
        <div className="flex flex-col gap-3">
            <div className="relative w-full h-[163px] object-cover bg-slate-800 overflow-hidden">
                <Image
                    src={thumbnail}
                    alt={title}
                    className="object-cover w-full h-full"
                    width={290}
                    height={163}
                />
                {live && (
                    <div className="absolute left-1 top-1">
                        <span className="py-1 px-2 bg-[#F44336] text-xs text-white rounded-full">Ao vivo</span>
                    </div>
                )}
            </div>
            <div>
                <span className="text-sm text-white/70">
                    {category}
                </span>
                <h4 className="text-lg font-semibold">
                    {title}
                </h4>
            </div>
        </div>
    )
}

export default VideoCard;