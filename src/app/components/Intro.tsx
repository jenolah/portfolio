export const Intro = () => {
  return (
    <div className="h-screen w-screen flex justify-center flex-col items-center	font-mono text-slate-950 gap-20">
      <div className="backdrop-hue-rotate-15 backdrop-blur-md bg-white/30 p-9 rounded-xl grid gap-4">
        <h1 className="text-5xl">I'm Jen</h1>
        <p>I'm a frontend developer.</p>
      </div>
      <a
        href="/Jen-CV-Eng.pdf"
        className="p-4 rounded-2xl center text-center cursor-pointer text-4xl animate-[rainbowShadow_2s_linear_infinite] bg-slate-950 text-white hover:bg-white hover:text-slate-950"
      >
        HERE'S MY CV
      </a>
    </div>
  );
};
