import { IconLinks } from "@/app/components/IconLinks";

export const Footer = () => {
  return (
    <div className="fixed inline-grid grid-cols-2 gap-4 bottom-0 w-screen font-mono text-xs">
      <div className="col-start-2 justify-self-center">
        <IconLinks />
      </div>
      <div className="justify-self-end self-end">
        icons by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </div>
    </div>
  );
};
