import { SlideBanner, VideoFlow } from "@/components/organisms";
import bannerItems from "@/misc/bannerItems";

export default function Home() {
  return (
    <main>
      <SlideBanner slides={bannerItems} />
      <VideoFlow title="Continuar reprodução" endpoint="/videos" />
    </main>
  );
}
