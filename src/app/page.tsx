import { DynamicBackground } from "@/app/components/DynamicBackground";
import { Intro } from "@/app/components/Intro";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
      <DynamicBackground />
      <Intro />
      <Footer />
    </main>
  );
}
