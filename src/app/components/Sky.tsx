export const Sky = () => {
  const stars = Array.from({ length: 100 }, () => {
    const x = Math.floor(Math.random() * 70);
    const y = Math.floor(Math.random() * 100);
    return { x: x, y: y };
  });

  const gradient =
    "linear-gradient(0deg, rgba(164,184,173,0) 21%, rgba(45,154,253,0.49625787815126055) 84%)";

  return (
    <div>
      <div
        className={`animate-[dayNight_20s_linear_infinite]`}
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          zIndex: -9999,
        }}
      ></div>
      <div
        style={{
          background: gradient,
          width: "100%",
          height: "100vh",
          position: "fixed",
          zIndex: -9998,
        }}
      />
      <div
        style={{
          background: "white",
          height: 20,
          position: "absolute",
          top: "50vh",
          right: "50vw",
          zIndex: -9997,
        }}
      ></div>
      {stars.map(({ x, y }, index) => (
        <div
          key={index}
          className={`animate-[stars_20s_linear_infinite]`}
          style={{
            zIndex: -9996,
            height: 2,
            width: 2,
            background: "white",
            position: "absolute",
            top: `${x}vh`,
            left: `${y}vw`,
          }}
        ></div>
      ))}
    </div>
  );
};
