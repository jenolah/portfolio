export const Clouds = () => {
  return (
    <div>
      <div
        className="absolute animate-clouds"
        style={{ zIndex: -1, top: `40vh`, left: `90vw` }}
      >
        <div className="absolute top-2 left-2 p-9 rounded-full bg-slate-200" />
        <div className="absolute top-9 px-16 py-9 rounded-full bg-slate-200" />
        <div className="absolute left-12 px-8 py-8 rounded-full bg-slate-200" />
      </div>
      <div
        className="absolute animate-clouds"
        style={{ zIndex: -1, top: `10vh`, left: `20vw` }}
      >
        <div className="absolute top-2 left-2 p-9 rounded-full bg-slate-200" />
        <div className="absolute top-9 px-16 py-9 rounded-full bg-slate-200" />
        <div className="absolute left-12 px-8 py-8 rounded-full bg-slate-200" />
      </div>
    </div>
  );
};
