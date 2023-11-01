import { IconLinks } from "@/app/components/IconLinks";

export const Footer = () => {
  return (
    <div className="fixed inline-grid grid-cols-3 bottom-0 w-screen font-mono text-xs">
      <div className="col-start-2 justify-self-center">
        <IconLinks />
      </div>
      <div className="col-start-3 justify-self-end self-end">
        icons by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </div>
    </div>
  );
};
