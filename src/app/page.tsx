import { useMemo, Suspense, Key } from "react";

import { SlideBanner, VideoFlow } from "@/components/organisms";
import bannerItems from "@/misc/bannerItems";

import { getAllCategories } from "@/hooks/getCategory";
import { CategoryType } from "@/types/category";

import VideoFlowSkeleton from "@/components/organisms/VideoFlow/skeleton";

export default function Home() {
  const categories = useMemo(async () => {
    const response = await getAllCategories();
    return response.map((category: CategoryType, index: Key) => (
      <VideoFlow key={index} title={category.title} params={{ category: category.id, live: false }} />
    ))
  }, []);

  return (
    <main className="flex flex-col gap-16 p-4">
      <SlideBanner slides={bannerItems} />
      <Suspense fallback={<VideoFlowSkeleton />}>
        <VideoFlow title="Continuar reprodução" params={{ keep_watching: true }} />
      </Suspense>
      <Suspense fallback={<VideoFlowSkeleton />}>
        <VideoFlow title="Ao vivo" params={{ live: true }} />
      </Suspense>
      <Suspense fallback={<VideoFlowSkeleton />}>
        <VideoFlow title="Minha lista" params={{ my_list: true }} />
      </Suspense>
      <Suspense fallback={<VideoFlowSkeleton />}>
        {categories}
      </Suspense>
    </main>
  );
}
