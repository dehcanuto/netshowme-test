import { SlideBanner } from "@/components/organisms";
import bannerItems from "@/misc/bannerItems";

export default function Home() {
  return (
    <main>
      <SlideBanner slides={bannerItems} />

    </main>
  );
}
