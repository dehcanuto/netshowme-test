import { useMemo, Suspense, Key } from "react";

import { SlideBanner, VideoFlow } from "@/components/organisms";
import bannerItems from "@/misc/bannerItems";

import { getAllCategories } from "@/hooks/getCategory";
import { CategoryType } from "@/types/category";

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
      <VideoFlow title="Continuar reprodução" params={{ keep_watching: true }} />
      <VideoFlow title="Ao vivo" params={{ live: true }} />
      <VideoFlow title="Minha lista" params={{ my_list: true }} />
      <Suspense fallback={<span>loading...</span>}>
        {categories}
      </Suspense>
    </main>
  );
}
