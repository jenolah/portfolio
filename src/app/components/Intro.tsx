import { IconLinks } from "./IconLinks";

export const Intro = () => {
  return (
    <div className="h-screen w-screen flex justify-center flex-col items-center text-slate-950 gap-20">
      <div className="backdrop-hue-rotate-15 backdrop-blur-md bg-white/30 p-9 rounded-xl grid gap-4">
        <h1 className="text-5xl">I'm Jen</h1>
        <p>I'm a frontend developer.</p>
        <IconLinks />
      </div>
      <a
        href="/Jen-Eng.pdf"
        download="Jen-Olah-CV"
        className="p-4 rounded-2xl center text-center cursor-pointer text-4xl animate-rainbowShadow bg-slate-950 text-white hover:bg-white hover:text-slate-950"
      >
        DOWNLOAD MY CV
      </a>
      <a
        href="/Jen-Eng.pdf"
        className="center text-center cursor-pointer text-2xl text-white hover:text-slate-950"
      >
        OR JUST CHECK IT OUT
      </a>
    </div>
  );
};
