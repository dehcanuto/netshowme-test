import { SlideBanner, VideoFlow } from "@/components/organisms";
import bannerItems from "@/misc/bannerItems";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <SlideBanner slides={bannerItems} />
        <VideoFlow title="Continuar reprodução" params={{  }} />
        <VideoFlow title="Ao vivo" params={{  }} />
        <VideoFlow title="Minha lista" params={{  }} />
        <VideoFlow title="Over The Cast" params={{ category: 1 }} />
        <VideoFlow title="Flow experience 2021" params={{ category: 2 }} />
        <VideoFlow title="Netshow.me Talks" params={{ category: 3 }} />
    </main>
  );
}
