import { DynamicBackground } from "@/app/components/DynamicBackground";
import { Intro } from "@/app/components/Intro";

export default function Home() {
  return (
    <main className="overflow-hidden relative">
      <DynamicBackground />
      <Intro />
    </main>
  );
}
