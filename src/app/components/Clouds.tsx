export const Clouds = () => {
  return (
    <div>
      <div
        className="absolute cloud animate-clouds"
        style={{ zIndex: -1, top: `40vh`, left: `90vw` }}
      />
      <div
        className="absolute animate-clouds cloud"
        style={{ zIndex: -1, top: `10vh`, left: `20vw` }}
      />
    </div>
  );
};
