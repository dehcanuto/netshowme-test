import { useMemo, Suspense, Key } from "react";

import { SlideBanner, VideoFlow } from "@/components/organisms";
import bannerItems from "@/misc/bannerItems";

import api from "@/services/api";
import { CategoryType } from "@/types/category";

export default function Home() {
  
  const categories = useMemo(async () => 
    await api.get('/categories')
      .then(res => res.data)
      .then(respose => respose.map((category: CategoryType, index: Key) => (
        <VideoFlow key={index} title={category.title} params={{ category: category.id }} />
      )))
      .catch((error) => <p className="text-white">Erro no fetch { error.message }</p>), [])

  return (
    <main className="flex flex-col gap-16">
      <SlideBanner slides={bannerItems} />
      <VideoFlow title="Continuar reprodução" params={{  }} />
      <VideoFlow title="Ao vivo" params={{  }} />
      <VideoFlow title="Minha lista" params={{  }} />
      <Suspense fallback={<span>loading...</span>}>
        {categories}
      </Suspense>
    </main>
  );
}
