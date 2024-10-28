import VideoFlowSkeleton from "@/components/organisms/VideoFlow/skeleton";

export default function Loading() {
    return (
        <main className="bg-[#131313]">
            <div className="bg-black h-[520px] mt-[72px]">
                <div className="container mx-auto">
                    <span className="flex animate-pulse bg-gray-300 w-[924px] h-[520px] mx-auto"></span>
                </div>
            </div>
            <section className="container py-8 mx-auto">
                <span className="flex animate-pulse w-96 h-6 bg-gray-600 rounded-sm" />
                <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center justify-center gap-4">
                        <span className="bg-[#1e1e1e] w-20 h-4 rounded-full" />
                        <span className="bg-[#1e1e1e] w-32 h-4" />
                        <span className="bg-[#1e1e1e] w-44 h-4 rounded-sm" />
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="bg-[#1e1e1e] w-32 h-4 rounded-sm" />
                        <span className="bg-[#1e1e1e] w-32 h-4 rounded-sm" />
                        <span className="bg-[#1e1e1e] w-32 h-4 rounded-sm" />
                    </div>
                </div>
            </section>
            <section className="container mx-auto py-12">
                <div className="flex flex-col gap-4">
                    <span className="bg-gray-300 w-96 h-4 rounded-sm" />
                    <span className="bg-[#1e1e1e] w-full h-4 rounded-sm" />
                    <span className="bg-[#1e1e1e] w-full h-4 rounded-sm" />
                </div>
            </section>
            <section className="py-12 bg-black">
                <div className="container mx-auto">
                    <VideoFlowSkeleton />
                </div>
            </section>
        </main>
    )
}