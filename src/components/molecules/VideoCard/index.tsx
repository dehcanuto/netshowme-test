import Image from "next/image";
import Link from "next/link";

import { VideoProps } from "@/types/video";

const VideoCard = ({ id, thumbnail, title, category, live, keep_watching }: VideoProps) => {
    return (
        <Link href={{ pathname: `/v/${id}` }} className="flex flex-col gap-3">
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
                {keep_watching && (
                    <div className="absolute inset-x-0 bottom-0">
                        <div className="flex h-1 bg-slate-900/50 overflow-hidden">
                            <div style={{ width: '50%' }} className="flex flex-col whitespace-nowrap justify-center bg-primary shadow-none" />
                        </div>
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
        </Link>
    )
}

export default VideoCard;