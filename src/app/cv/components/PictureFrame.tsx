export const PictureFrame = () => {
  return (
    <div className="col-span-2 flex justify-center content-center p-4">
      <img
        className="rounded-full ring-violet-300 ring-2 w-36 h-36 object-cover"
        src={"/me.jpg"}
      ></img>
    </div>
  );
};
