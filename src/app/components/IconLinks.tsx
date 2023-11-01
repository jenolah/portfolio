export const IconLinks = () => {
  return (
    <div className="flex gap-3">
      <a
        href="https://www.linkedin.com/in/ol%C3%A1h-dzsenifer/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/icons8-linkedin.svg"
          alt="linkedin"
          className="hover:invert"
        />
      </a>
      <a
        href="https://github.com/jenolah"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/icons8-github.svg" alt="github" className="hover:invert" />
      </a>
    </div>
  );
};
