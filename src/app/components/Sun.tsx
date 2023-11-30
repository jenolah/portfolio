export const Sun = () => {
  return (
    <div
      className="absolute p-16 bg-yellow-100 rounded-full shadow-[0_0_20px_5px] shadow-yellow-100 animate-sun"
      style={{
        top: "90vh",
        left: "-150px",
        transformOrigin: "calc(50vw + 150px)",
        zIndex: -1,
      }}
    />
  );
};
