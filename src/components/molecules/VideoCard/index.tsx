import Image from "next/image";
import { VideoProps } from "@/types/video";

const VideoCard = ({ thumbnail, title, category }: VideoProps) => {
    return (
        <div className="flex flex-col gap-3">
            <div className="w-[290px] h-[163px] object-cover bg-slate-800 overflow-hidden">
                <Image
                    src={thumbnail}
                    alt={title}
                    className="object-cover w-full h-full"
                    width={290}
                    height={163}
                />
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