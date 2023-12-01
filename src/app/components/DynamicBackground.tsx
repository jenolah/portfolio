import { Sky } from "@/app/components/Sky";
import { Sun } from "@/app/components/Sun";
import { Clouds } from "@/app/components/Clouds";

export const DynamicBackground = () => {
  return (
    <>
      <Sky />
      <Sun />
      <Clouds />
    </>
  );
};
